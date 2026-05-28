## Formulaires Imbriqués complexes (CollectionType)

Utilisé pour gérer une relation One-To-Many dans un seul et même formulaire (ex : une Facture contenant plusieurs LigneFacture).

1. Formulaire enfant

```php
namespace App\Form;

use App\Entity\LigneFacture;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class LigneFactureType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('designation', TextType::class)->add('prix');
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['data_class' => LigneFacture::class]);
    }
}
```

2. Formulaire Parent

```php
namespace App\Form;

use App\Entity\Facture;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;

class FactureType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('clientName')
            ->add('lignes', CollectionType::class, [
                'entry_type' => LigneFactureType::class,
                'allow_add' => true,     // Permet au JS d'ajouter des lignes dynamiquement
                'allow_delete' => true,  // Permet au JS de supprimer des lignes
                'by_reference' => false, // OBLIGATOIRE : Force l'appel de addLigne() et removeLigne()
                'prototype' => true,     // Génère l'attribut HTML 'data-prototype' pour le JS
            ]);
    }
}
```

