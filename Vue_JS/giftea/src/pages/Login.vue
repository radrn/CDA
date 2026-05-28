<template>
 <div class="login-page">
  <div class="container">
    <h1 class="main-title">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#f6339a" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24">
        <rect width="18" height="4" x="3" y="8" rx="1"></rect>
        <path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
      </svg>
      <span>Giftéa</span>
    </h1>

    <h3>Ne perds plus tes idées cadeaux !</h3>
    <p>
      Crée tes groupes, ajoute tes proches et conserve
      <br>
      toutes tes idées de cadeaux au même endroit.
    </p>

    <div class="paper-wrap">
      <img src="/gift_1-f2ajdsyA.jpeg" alt="Cadeau">
    </div>

    <div class="login-bloc">
      <p>Rejoint Giftéa</p>
      <div class="selection-menu">
        <button @click="isActive" :class="{active: !displayInfo}">Connexion</button>
        <button @click="isNot" :class="{active: displayInfo}">Inscription</button>
      </div>
      <register-form v-if="displayInfo === true" @data-form="handleRegisterSubmit"/>
      <login-form v-if="displayInfo === false" @data-form="handleLoginSubmit"/>
      <span v-if="wrongId">Identifiant ou Mot de passe incorrect</span>
    </div>
  </div>
 </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue'
import LoginForm from "@/components/LoginForm.vue";
import axios from "axios";
import RegisterForm from "@/components/RegisterForm.vue";
export default defineComponent({
  name: "Login",
  components: {RegisterForm, LoginForm},
  data(){
    return{
      wrongId: false,
      displayInfo: true
    }
  },
  methods:{
    async handleLoginSubmit(data){
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
    },
    async handleRegisterSubmit(data){
      const response = await axios.post('https://giftea-api.jp-dev.fr/api/users', data, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      });
      console.log(response);
    },
    isActive(){
      this.displayInfo = false;
    },
    isNot(){
      this.displayInfo = true;
    }

  }
})
</script>

<style scoped>
.login-page{
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.main-title{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: xxx-large;
}
.main-title svg{
  color: #f6339a;
  margin-right: .7rem;
  width: 60px;
  height: 60px;
  margin: 0px 11.2px 0px 0px
}
.main-title span{
  font-weight: 400;
  background: linear-gradient(to right, #ec4899, #a855f7, #3b82f6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
h3{
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  margin: 8px 0px;
}
p{
  font-weight: 400;
  text-align: center;
  margin-bottom: 16px;
}
.paper-wrap{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.paper-wrap img{
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 4px 15px #00000040;
}
.login-bloc{
  max-width: 550px;
  width: 100%;
  background-color: #fef8ff;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px #0000001a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 1rem;
}
.selection-menu{
  width: 100%;
  background-color: #ececf0;
  border-radius: 15px;
  padding: 5px;
  display: flex;
  text-align: center;
  justify-content: center;
}
.selection-menu button{
  border: none;
  border-radius: 15px;
  width: 100%;
  padding: .1rem;
}
button{
  cursor: pointer;
}
.active{
  background-color: white;
}

</style>