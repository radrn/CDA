# 📝 Exercice guidé
## Infos rapides : 
### VOIR : rendu.png pour le résulat demandé

- Vous devez avoir un composant principal : MovieList
  - Importez dans ce composant les datas
- Pendant une boucle sur les datas dans votre composant MovieList
  - vous devez appelez un composant enfant : Movie

- Le composant enfant Movie va lui même avoir 2 composant enfant :
  - MovieImage
  - MovieInfo

### Structure attendu des composants : 
```scss
MovieList.vue       → Composant parent principal
│
├── Movie.vue       → Composant enfant (un film)
│   │
│   ├── MovieImage.vue   → Sous-composant (affiche du film)
│   └── MovieInfo.vue    → Sous-composant (infos du film)

```

### Structure attendu des props : 
```scss
MovieList.vue
│
│--(v-for)---> Movie.vue
│                ├── prop: imgPath
│                ├── prop: title
│                └── prop: from
│
│-- Movie.vue --> MovieImage.vue
│                  └── prop: imgPath
│
│-- Movie.vue --> MovieInfo.vue
                   ├── prop: title
                   └── prop: from

```