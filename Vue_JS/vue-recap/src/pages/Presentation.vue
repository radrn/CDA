<script lang="ts">
import {defineComponent} from 'vue'
import VueIf from "@/component/VueIf.vue";
import VueLoop from "@/component/VueLoop.vue";
import VueEventAndClass from "@/component/VueEventAndClass.vue";
import defaultStore from '@/store/defaultStore';
export default defineComponent({
  name: "presentation",
  components: {VueEventAndClass, VueLoop, VueIf},
  methods: {
    addUser(){
      defaultStore.arrayTest.push({
        name: 'Julesxxxxx',
        lastname: 'Paulyxxxx'
      });
    }
  }
})
</script>

<template>
  <h1>Presentation</h1>
  <h2>Les conditions: </h2>
  <VueIf></VueIf>

  <h2> Les boucles: </h2>
  <VueLoop></VueLoop>

  <h2>Les évenements et classes: </h2>
  <VueEventAndClass/>

  <button @click="addUser">+</button>
</template>


<style scoped>

</style>