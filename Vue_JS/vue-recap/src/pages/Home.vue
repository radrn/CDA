
<template>
  <h1> Page de home</h1>
  <div v-for="item in defaultStore.arrayTest">

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import axios from "axios";
import api from '@/api/api';
import {jwtDecode} from "jwt-decode";
import defaultStore from '@/store/defaultStore';

export default defineComponent({
  name: "home",
  computed:{
    defaultStore(){
      return defaultStore
    }
  },
  async mounted() {

    let token = localStorage.getItem('token')
    let decoded = jwtDecode(token);
    console.log(decoded)
  //   const token = localStorage.getItem('token');
  //   let response = await axios.get(import.meta.env.VITE_API_URL + '/gifts/self-gift', {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json",
  //       "Authorization": `Bearer ${token}`
  //     }
  // })
  //   console.log(response);
    let response2= await api.get('/gifts/self-gift', {})
    console.log(response2);
  }
})
</script>

<style scoped>

</style>