<template>
  <h1> Exo Recap</h1>
    <select v-model="categorieSelectionnee">

      <option value="nature">Nature</option>
      <option value="animaux">Animaux</option>
      <option value="ville">Ville</option>
    </select>
  <div class="image-container">
    <template v-for="(item, index) in images">
      <img
          :src="item.url"
          v-if="item.categorie == categorieSelectionnee"
          :class="{activeClass: item.active}"
          @click="handleClickImage(index)"
      >
    </template>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ExoRecap",
  data() {
    return {
      images: [
        { url: 'https://picsum.photos/200/150?random=1', categorie: 'nature', active: true },
        { url: 'https://picsum.photos/200/150?random=2', categorie: 'animaux' , active: false},
        { url: 'https://picsum.photos/200/150?random=3', categorie: 'ville' , active: true},
        { url: 'https://picsum.photos/200/150?random=4', categorie: 'nature', active: false },
        { url: 'https://picsum.photos/200/150?random=5', categorie: 'animaux', active: false}
      ],
      categorieSelectionnee: 'nature',
    }
  },
  methods: {
    handleClickImage(index){
      this.images[index].active = !this.images[index].active;
    }
  }
})
</script>
<style scoped>
.image-container{
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.activeClass{
  border: 5px solid green;
}
</style>