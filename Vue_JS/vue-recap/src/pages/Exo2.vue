
<template>
  <button
    @click="afficherDisponibles = !afficherDisponibles"
  >
    Afficher seulement disponibles
  </button>
  <div v-for="(item, index) in plats">
    <p
        v-if="!afficherDisponibles || item.disponible"
        :class="{disponible: !item.disponible}"
    >
      {{item.nom}} : {{item.prix}} €
    </p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Exo2",
  data() {
    return {
      plats: [
        { nom: 'Pizza Margherita', prix: 8, disponible: true },
        { nom: 'Burger', prix: 6, disponible: false },
        { nom: 'Salade César', prix: 7, disponible: true },
        { nom: 'Pâtes Carbonara', prix: 9, disponible: true },
        { nom: 'Sushi', prix: 12, disponible: false }
      ],
      afficherDisponibles: false
    }
  },
  methods(){
    priceColor()
      if(this.countValue > 0){
        return true;
      } else {
        return false
      }
    }
})
</script>
<style scoped>
.disponible{
  color: gray
}
</style>