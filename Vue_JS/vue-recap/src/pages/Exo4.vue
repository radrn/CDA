

<template>
  <h1> Exo 4</h1>

  <select v-model="filtreCondition">
    <option value="">Tous</option>
    <option value="soleil">Soleil</option>
    <option value="pluie">Pluie</option>
    <option value="nuageux">Nuageux</option>
    <option value="neige">neige</option>
  </select>
  <template v-for="(item, index) in villes">
    <div
        v-if="selectCondition(item.condition)">
      <p> Ville: {{item.nom}},  température: {{item.temperature}}°C, condition: {{item.condition}}</p>
    </div>
  </template>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Exo4",
  data() {
    return {
      villes: [
        { nom: 'Paris', temperature: 18, condition: 'soleil' },
        { nom: 'New York', temperature: 22, condition: 'pluie' },
        { nom: 'Tokyo', temperature: 25, condition: 'nuageux' },
        { nom: 'Sydney', temperature: 30, condition: 'soleil' },
        { nom: 'Moscou', temperature: 10, condition: 'neige' }
      ],
      filtreCondition: ''
    }
  },
  methods: {
    selectCondition(condition){

      console.log(condition)
      console.log(this.filtreCondition)
      if(this.filtreCondition === ''){
        return true;
      } else if(this.filtreCondition === condition) {
        return true;
      }
      return false ;
    }
  }
})

</script>
<style scoped>

</style>