## Architecture complète : Hydratation par Twig & Mises à jour AJAX

Cette architecture technique évite une requête API lourde au premier chargement en injectant le JSON directement dans un attribut HTML 
(Data Attributes), puis effectue des requêtes AJAX (Fetch) pour les actions utilisateur futures.

### 1. Le Template Twig (front/cart/index.html.twig)

```twig
{% extends 'front/base.html.twig' %}

{% trans_default_domain 'front' %}

{% block body %}
    <div class="container">
        <h1>{{ 'page.cart.title'|trans }}</h1>
        <a class="text-decoration-none" href="{{ path('app_clear_cart') }}">Vider mon panier</a>
        
        <div id="vue-root-container" class="mt-3" data-cart-games="{{ cartJson|e('html_attr') }}">

        </div>
    </div>
{% endblock %}
```

### 2. Le Contrôleur Symfony (AjaxCartController.php)

```php
<?php

declare(strict_types=1);

namespace App\Controller\Front;

use App\Repository\GameRepository;
use App\Service\SessionCartService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class AjaxCartController extends AbstractController
{
    #[Route('/ajax/add-game-to-cart/{id}', name: 'app_add_game_cart', methods: ['POST'])]
    public function addGameCart(
        GameRepository $gameRepository,
        SessionCartService $sessionCartService,
        string $id,
    ): JsonResponse {
        $game = $gameRepository->findOneBy(['id' => $id]);
        
        if (null === $game) {
            return new JsonResponse([], Response::HTTP_NOT_FOUND);
        }

        $sessionCartService->addItemToCart($game);

        return new JsonResponse([
            'qty' => $sessionCartService->getCartQty(),
        ], Response::HTTP_OK);
    }
}
```

### 3. Le Script d'Initialisation TypeScript (cart.ts)

```typescript
import { App, createApp } from "vue";
import RootCartComponent from './vue/RootCartComponent.vue';

window.addEventListener('load', () => {
    initCartLoader();
});

function initCartLoader(): void {
    const element: HTMLDivElement | null = document.querySelector('#vue-root-container');
    
    if (element) {
        const data: string | null = element.getAttribute('data-cart-games');
        
        if (data) {
            // Création de l'app Vue en transmettant le JSON parsé en props
            const vueApp: App<Element> = createApp(
                RootCartComponent,
                {
                    propsCart: JSON.parse(data), 
                }
            );
            vueApp.mount(element);
            element.removeAttribute('data-cart-games'); // Nettoyage de sécurité
        }
    }
}
```

### 4. L'Interface de Structure TypeScript (i-cart.ts)

```typescript
export interface IGameDTO {
    id: number;
    name: string;
    price: number;
    thumbnailCover: string;
    urlShow: string;
}

export interface ICart {
    gamesDTO: IGameDTO[];
    totalPrice: number;
}
```

### 5. Le Composant Vue Réactif avec Traitement AJAX (RootCartComponent.vue)

```vue
<template>
    <a v-for="game in cart.gamesDTO" :key="game.id" class="text-decoration-none" :href="game.urlShow">
        <div class="d-flex mb-3">
            <div class="col-2">
                <img class="w-100" :src="game.thumbnailCover" :alt="'Couverture de ' + game.name">
            </div>
            <div class="col-10 ps-3">
                <h2>{{ game.name }}</h2>
                <p>{{ game.price }}€</p>
            </div>
        </div>
    </a>
    
    <div class="mt-3">
        <h3>Total : {{ cart.totalPrice }}€</h3>
        <p>Articles actuellement en session : **{{ totalQty }}**</p>
    </div>

    <button @click="addGameViaAjax(12)" class="btn btn-success mt-2">
        Ajouter le jeu de démo #12 via AJAX
    </button>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue';
import { ICart } from "../interfaces/i-cart";

const props = defineProps({
    propsCart: {
        type: Object as PropType<ICart>,
        required: true
    }
});

// Hydratation de l'état local réactif de Vue
const cart = ref<ICart>({ ...props.propsCart });
const totalQty = ref<number>(props.propsCart.gamesDTO.length);

// Fonction d'envoi AJAX (Fetch) vers le contrôleur Symfony
const addGameViaAjax = async (gameId: number) => {
    try {
        const response = await fetch(`/ajax/add-game-to-cart/${gameId}`, {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) throw new Error(`Erreur serveur : ${response.status}`);

        const responseData = await response.json();
        
        // Mise à jour de l'état graphique réactif (Vue) à chaud avec la réponse de Symfony
        totalQty.value = responseData.qty;
        
        alert(`Panier mis à jour ! Quantité renvoyée par Symfony : ${responseData.qty}`);
    } catch (error) {
        console.error("Échec de l'appel AJAX :", error);
    }
};
</script>
```
