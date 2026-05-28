<template>
  <div class="cards">
    <div class="wish-card" v-for="wish in wishArray">
      <WishCard :label="wish.label" :wish="wish"></WishCard>
    </div>
  </div>
</template>

<script lang="ts">
import api from '@/api/api'
import {defineComponent} from 'vue'
import WishCard from "@/components/WishCard.vue";

export default defineComponent({
  name: "WishComponent",
  components: {WishCard},
  data(){
    return{
    wishArray: []
    }
  },
  async mounted () {
    let response = await api.get('/gifts/self-gift');
    this.wishArray = response.data
    console.log(this.wishArray);
  },
})
</script>

<style scoped>
.cards{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}
.wish-card{
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(168, 168, 168, .3607843137);
  border-radius: 15px;
}
</style>