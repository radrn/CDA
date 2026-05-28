<template>

  <h2>{{title}}</h2>
  <p>{{from}}</p>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MovieInfo",
  props:{
    title: String,
    from: String,
  }
})
</script>

<style scoped>

</style>