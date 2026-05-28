## Gestion des Sessions et Messages Flash

Symfony encapsule la session PHP standard de manière sécurisée et orientée objet via l'objet Request

```php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SessionController extends AbstractController
{
#[Route('/session-demo', name: 'app_session_demo')]
public function index(Request $request): Response
{
$session = $request->getSession();

        // 1. Stocker une information
        $session->set('user_cart_count', 3);

        // 2. Récupérer (avec valeur par défaut en 2e paramètre)
        $cartCount = $session->get('user_cart_count', 0);

        // 3. Supprimer une information
        $session->remove('user_cart_count');

        // 4. Vider la session
        $session->clear();

        return $this->json(['cart' => $cartCount]);
    }
}
```

### Les Messages Flash (Flash Bags)

Ce sont des variables de session qui s'effacent automatiquement dès qu'elles sont lues une fois.

```php
// Dans un contrôleur
$this->addFlash('success', 'Profil mis à jour !');
``` 

Affichage dans ton template Twig :

```php
{% for message in app.flashes('success') %}
<div class="alert alert-success">{{ message }}</div>
{% endfor %}
```