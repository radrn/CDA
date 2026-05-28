<template>

  <img :src="{{imgPath}}">

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MovieImage",
  props:{
    imgPath: Sting,
  }
})
</script>

<style scoped>

</style>