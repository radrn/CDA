
<template>
  <router-link to="/">Home </router-link>
  <router-link to="/presentation">Presentation </router-link>
  <router-link to="/exo-recap">Exo Recap </router-link>
  <router-link to="/exo2">Exo2 </router-link>
  <router-link to="/exo3">Exo3 </router-link>
  <router-link to="/exo4">Exo4 </router-link>
  <router-link to="/movie">MovieList</router-link>
  <router-link to="/promise">Promise</router-link>
  <router-link to="/login">Se Connecter</router-link>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Presentation from "@/pages/Presentation.vue";

export default defineComponent({
  name: "Navbar",
  components: {Presentation}
})
</script>

<style scoped>

</style>