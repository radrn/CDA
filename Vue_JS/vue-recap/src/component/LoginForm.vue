<template>
  <form @submit.prevent="formSubmit">
    <label for="email">Email: </label>
    <input type="email" v-model="emailValue">

    <p v-if="passwordError">Mot de passe trop court</p>
    <label for="password">Mot de passe</label>
    <input type="password" v-model="passwordValue">

    <button type="submit">Se connecter</button>
  </form>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LoginForm",
  data(){
    return {
      emailValue: "",
      passwordValue: "",
      passwordError: false,
    }
  },
  methods: {
    formSubmit(){
      if(this.passwordValue.length <3){
        this.passwordError = true;
      }else{
        this.$emit("dataForm", {
          email: this.emailValue,
          password: this.passwordValue
        });
      console.log(this.emailValue);
      console.log(this.passwordValue);
      }
    }
  }
})
</script>

<style scoped>

</style>