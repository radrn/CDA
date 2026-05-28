

<template>
<p :class="{positif: isPositive()}">Valeur du compteur : {{countValue}}</p>
  <button @click="minusOne">-1</button>
  <button @click="addOne">+1</button>

  <input
      type="text"
      v-model="modelInput"
      @input="handleInput"
  >

  <p>{{modelInput}}</p>

</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "VueEventAndClass",
  data(){
    return{
      countValue: 0,
      modelInput: "ipme"
    }
  },
  methods:{
    addOne(){
      this.countValue ++;
    },
    minusOne(){
      this.countValue --;
    },
    isPositive(){
      if(this.countValue > 0){
        return true;
      } else {
        return false
      }
    },
    handleInput() {
      if(this.modelInput.length > 15){
        alert('message trop long !');
      }
    }
  }
})
</script>
<style scoped>
.positif{
  color: green;
}
</style>