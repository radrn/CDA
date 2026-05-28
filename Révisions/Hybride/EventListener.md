## Communication via EventListener de Réponses HTTP

### 1. Côté Symfony : Modifier la réponse globalement

Un EventListener intercepte la réponse serveur juste avant son envoi pour y injecter une métadonnée.
   
```php
namespace App\EventListener;

use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\Attribute\AsEventListener;

#[AsEventListener(event: 'kernel.response')]
class MaintenanceListener
{
    public function __invoke(ResponseEvent $event): void
    {
        $response = $event->getResponse();
        // Injecte un header HTTP lisible par le Front-end
        $response->headers->set('X-App-Status', 'Operational');
    }
}
```

### 2. Côté Vue.js : Consommer l'information de l'événement HTTP

```javascript
fetch('/api/data')
    .then(response => {
        // Lecture du header injecté par l'EventListener de Symfony
        const appStatus = response.headers.get('X-App-Status');
        
        if (appStatus === 'Maintenance') {
            alert("Le site est actuellement indisponible !");
        }
        return response.json();
    });
```
