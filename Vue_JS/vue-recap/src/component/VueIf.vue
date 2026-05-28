
<template>
  <p v-if="age < 18"> Tu es mineur</p>
  <p v-if="age = 18">Tu es majeur</p>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "VueIf",
  data(){
    return{
      age: 18,
    }
  }
})
</script>

<style scoped>

</style>