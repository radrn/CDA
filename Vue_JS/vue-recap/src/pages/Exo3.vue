

<template>
  <div v-for="(question, indexQuestion) in questions">
    {{question.question}}
    <button
        v-for="(option, indexOption) in question.options"
        @click="chosenAnswer(option, indexQuestion)"
    >
      {{option}}
    </button>
    <p v-if="question.reponseChoisie == question.bonneReponse">Correct !</p>
    <p v-if="isWrong(question.reponseChoisie, question.bonneReponse, indexQuestion)">Essayez à nouveau !</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Exo3",
  data() {
    return {
      questions: [
        {
          question: 'Quelle est la capitale de la France ?',
          options: ['Paris', 'Lyon', 'Marseille', 'Bordeaux'],
          bonneReponse: 'Paris',
          reponseChoisie: null
        },
        {
          question: 'Quelle planète est la plus proche du Soleil ?',
          options: ['Terre', 'Mercure', 'Mars', 'Venus'],
          bonneReponse: 'Mercure',
          reponseChoisie: null
        },
        {
          question: 'Combien de continents y a-t-il sur Terre ?',
          options: ['5', '6', '7', '8'],
          bonneReponse: '7',
          reponseChoisie: null
        }
      ]
    }
  },
  methods: {
    chosenAnswer(option, indexQuestion){
      console.log(option);
      console.log(indexQuestion);
      this.questions[indexQuestion].reponseChoisie = option;
    },
    isWrong(reponseChoisie, bonneReponse, indexQuestion){
      if( this.questions[indexQuestion].reponseChoisie !== this.questions[indexQuestion].bonneReponse && this.questions[indexQuestion].reponseChoisie !== null){
        return true
      } else {
        return false
      }
    }
  }
})
</script>

<style scoped>

</style>