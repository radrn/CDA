<template>
  <h1>Je suis dans Cours Component !</h1>
  <p>{{myString}}</p>
  <p :class="{greenText: myNumber >= 50}">Mon nombre : {{myNumber}}</p>

  <button @click="addTwenty">Ajouter 20 !</button>

  <p v-if="age >= 18">Je suis majeur</p>
  <p v-else>Je suis mineur !</p>
  <ul>
    <li v-for="(item, index) in arrayNames" :key="index">{{item}}</li>
  </ul>

  <input v-model="inputText">
  <p>{{inputText}}</p>
</template>

<script>
export default {
  name: 'CoursVariable',
  data(){
    return {
      myString: 'Bonjour !',
      myNumber: 35,
      age: 15,
      arrayNames: [
        "Toto", "Tata", "Titi"
      ],
      inputText: ""
    }
  },
  methods: {
    addTwenty(){
      this.myNumber += 20;
    }
  }
}
</script>

<style scoped>
  .greenText{
    color: green;
  }
</style>
