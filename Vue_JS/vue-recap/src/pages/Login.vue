<template>
  <h1> Login</h1>
  <p v-if="wrongId">Identifiant ou Mot de passe incorrect</p>
  <login-form @data-form="handleLoginSubmit"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
  import LoginForm from "@/component/LoginForm.vue";
  import axios from "axios";

export default defineComponent({
  name: "Login",
  components: {LoginForm},
  data(){
    return {
    wrongId: false
    }
  },
  methods: {
    async handleLoginSubmit(data) {
    try{
      const response = await axios.post('https://giftea-api.jp-dev.fr/api/login', data, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    });
      localStorage.setItem('token', response.data.token);
      this.$router.push("/")
    }catch(error){
      this.wrongId = true;
      console.log('erreur')
    }
    }
  }
})
</script>
<style scoped>

</style>