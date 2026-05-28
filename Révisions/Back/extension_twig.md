## Créer des Fonctions Twig Personnalisées

### 1. Génération via le CLI

```bash
php bin/console make:twig-extension AppExtension
```

### 2. Implémentation (src/Twig/Extension/AppExtension.php)

```php
namespace App\Twig\Extension;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            // Premier argument : le nom utilisé dans Twig. Deuxième : la méthode PHP associée.
            new TwigFunction('format_price', [$this, 'formatPrice']),
        ];
    }

    public function formatPrice(float $amount, string $currency = '€'): string
    {
        return number_format($amount, 2, ',', ' ') . ' extension_twig.md' . $currency;
    }
}
```

### 3. Utilisation dans Twig

```php
<p>Le prix total est de : {{ format_price(1540.5) }}</p>
{# Résultat : Le prix total est de : 1 540,50 € #}
```

