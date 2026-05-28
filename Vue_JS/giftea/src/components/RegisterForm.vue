<template>
  <form @submit.prevent="formSubmit">
    <div class="form-group">
      <label for="email" class="form-label">Email</label>
      <input id="email" type="email" name="email" placeholder="caeaux@giftea.fr" v-model="emailValue">
    </div>
    <div class="form-group">
      <label for="fullname" class="form-label">Votre Nom</label>
      <input id="fullName" class="form-control" type="text" name="fullName" placeholder="John Doe" v-model="fullNameValue">
    </div>
    <div class="form-group">
      <label for="mot de passe" class="form-label">Mot de passe</label>
      <input id="password" type="password" name="password" v-model="passwordValue">
      <span v-if="passwordError">Mot de passe trop court</span>
    </div>
    <div class="form-group">
      <label for="password-confirmation" class="form-label">Confirmation Mot de passe</label>
      <input class="form-control" id="password-confirmation" type="password" name="password">
    </div>

    <button type="submit">S'inscrire</button>
  </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "RegisterForm",
  data(){
    return{
      emailValue: "",
      fullNameValue: "",
      passwordValue: "",
      passwordError: false,
    }
  },
  methods: {
    formSubmit(){
      if(this.passwordValue.length <3){
        this.passwordError = true;
      }else {
        this.$emit("dataForm", {
          email: this.emailValue,
          fullName: this.fullNameValue,
          password: this.passwordValue
        });
      }
    }
  }
})
</script>

<style scoped>
form{
  width: 100%;
  margin-top: 1rem;
}
.form-group{
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}
form label{
  color: #000;
}
form input{
  border: none;
  background-color: #fffdff;
  padding: 6px 12px;
}
button{
  background: linear-gradient(to right, #ec4899, #a855f7);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  white-space: nowrap;
  border-radius: .375rem;
  font-size: .875rem;
  font-weight: 500;
  transition: all .2s
  ease;
  pointer-events: auto;
  -webkit-user-select: none;
  user-select: none;
  flex-shrink: 0;
  outline: none;
  height: 2.25rem;
  padding: .5rem 1rem;
  margin-top: 16px;
  width: 100%;
  border: 0;
  color: #fff;
  cursor: pointer;
}
</style>