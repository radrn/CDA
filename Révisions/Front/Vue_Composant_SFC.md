## Structure d'un Composant Vue (Single File Component)

Un fichier Vue utilise l'extension .vue et regroupe logique, rendu et style. On utilise la Composition API (syntaxe moderne avec <script setup>).

```vue
<script setup lang="ts">
import { ref, computed } from 'vue';

// Déclaration d'une propriété reçue du parent (Props)
const props = defineProps({
    title: { type: String, required: true }
});

// État réactif local (State)
const count = ref<number>(0);

// Propriété calculée (Computed)
const doubleCount = computed(() => count.value * 2);

// Méthode
const increment = () => {
    count.value++;
};
</script>

<template>
  <div class="card">
    <h2>{{ props.title }}</h2>
    <p>Compteur : {{ count }}</p>
    <p>Double : {{ doubleCount }}</p>
    
    <button @click="increment">Ajouter 1</button>
  </div>
</template>

<style scoped>
/* "scoped" protège le CSS pour qu'il ne s'applique qu'à ce composant */
.card { border: 1px solid #ddd; padding: 20px; border-radius: 8px; }
button { background-color: #42b983; color: white; border: none; padding: 10px; }
</style>
```

