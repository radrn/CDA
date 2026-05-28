
## # Fichier_01_Symfony_Filtres_Attributs.md
### Les Filtres via Attributs PHP (API Platform)

Dans un contexte fullstack où Symfony sert d'API pour Vue.js, on déclare des filtres directement au-dessus de la classe ou des propriétés de l'entité. Cela permet au front-end de filtrer les données via l'URL (ex: `/api/products?name=clavier&price[gt]=20`).

```php
namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Doctrine\Orm\Filter\OrderFilter;
use ApiPlatform\Doctrine\Orm\Filter\RangeFilter;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ApiResource]
// Filtre textuel : nom (partiel), catégorie (exacte)
#[ApiFilter(SearchFilter::class, properties: ['name' => 'partial', 'category' => 'exact'])]
// Filtre de tri : (ex: ?order[price]=desc)
#[ApiFilter(OrderFilter::class, properties: ['price' => 'ASC', 'createdAt' => 'DESC'])]
class Product
{
    #[ORM\Id] #[ORM\GeneratedValue] #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $category = null;

    #[ORM\Column]
    #[ApiFilter(RangeFilter::class)] // Permet de faire ?price[gt]=10
    private ?float $price = null;
}

``` 

Les stratégies du SearchFilter (À retenir pour l'exam)
exact : La valeur doit être identique (ex: un ID ou un code).

partial : Génère un LIKE %valeur% (idéal pour une barre de recherche).

start : Génère un LIKE valeur% (commence par).