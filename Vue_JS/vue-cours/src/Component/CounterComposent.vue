<template>
  <h1>Exo 1 : </h1>
  <p v-if="number >0" :class="{positive: number}"> Mon compteur : {{number}}</p>
  <p v-else :class="{negative: number}">Mon compteur : {{number}}</p>
  <p v-if="number >0">Le compteur est positif !</p>
  <p v-if="number <0">Le compteur est négatif</p>
  <button @click="addOne">+1</button>
  <button @click="minusOne">-1</button>
  <button @click="addFive">+5</button>
  <button @click="minusFive">-5</button>

</template>

<script>
export default {
  name: "CounterComponent",
  data(){
    return{
  number: 0,
    }
  },
  methods : {
    addOne(){
      this.number += 1;
    },
    minusOne(){
      this.number -= 1;
    },
    addFive(){
      this.number += 5;
    },
    minusFive(){
      this.number -= 5;
    }
  }
}
</script>

<style scoped>
  .positive {
    color : green;
  }
  .negative {
    color: red;
  }
</style>
