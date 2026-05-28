
<template>
  <div v-for="(item, index) in array">
    <span>{{item}}</span>
  </div>

  <template v-for="(item, index) in array">
    <div v-if='item !== "Tata"'>
      <span>{{item}}</span>
    </div>
  </template>

  <div v-for="(item, index) in array2">
    <p>Je m'appelle {{item.name}}, je suis de couleur {{item.couleur}} et j'appartiens à {{item.owner.fullName}}.</p>
  </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "VueLoop",
  data(){
    return{
      array: ["Toto", "Tata", "Titi"],
      array2: [
        {name: "Milou", couleur: "blanc", owner: {fullName: "Jules"}},
        {name: "Rantaplan", couleur: "blanc", owner: {fullName: "Lucky luke"}},
        {name: "Garfield", couleur: "blanc", owner: {fullName: "Toto"}},
      ]
    }
  }
})
</script>
<style scoped>

</style>