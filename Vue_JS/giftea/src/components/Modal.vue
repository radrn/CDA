<template>

  <div class="modal">
    <div class="header">
      <button class="close-modal" @click="closeModal">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </button>
      <div class="icon-add-edit"> 💝 </div>
      <h2>{{title}}</h2>
    </div>
    <div class="edit-form">
      <div class="content">
        <label for="label">Que souhaites-tu ?</label>
        <input id="label" :placeholder="wishLabel" v-model="label">
      </div>
      <div class="content">
        <label for="label">Lien (optionnel)</label>
        <input id="label" :placeholder="wishLink" v-model="link">
      </div>
    </div>
    <div class="submit-btn">
      <button type="button" @click="sendRequest">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart h-4 w-4 mr-2" aria-hidden="true">
          <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
        </svg>
        <span>{{ buttonLabel }}</span>
      </button>
    </div>
  </div>

</template>

<script lang="ts">
import api from '@/api/api'
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Modal",
  data (){
    return {
      isClosed: false,
      label: "",
      link: "",
      id: "",
    }
  },
  props:{
    title: "",
    buttonLabel: "",
    wishLabel: {
      required: false,
      default: ""
    },
    wishLink: {
      required: false,
      default: ""
    },
    wishId: {
      required: false,
      default: null
    }
  },
  methods: {
    closeModal () {
      this.$emit('close')
    },
    async sendRequest() {
      console.log(this.wishId);
      if(this.wishId !== null){
        let update = await api.patch('/gifts/'+ this.wishId, {
          label : this.label,
          link: this.link,
          orderItem: 0
        });
        console.log(update);
      }
    }
  },
  mounted(): any{
    this.label = this.wishLabel;
    this.link = this.wishLink;
  }
})
</script>

<style scoped>
.modal{
  position: absolute;
  background-color: #3a3a3c;
}
.edit-form{
  display: flex;
  flex-direction: column;
}
.submit-btn{
  background: linear-gradient(to right, #ec4899, #ef4444);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  border-radius: .375rem;
  font-size: .875rem;
  font-weight: 500;
  height: 2.25rem;
  padding: .5rem 1rem;
  width: 100%;
  border: none;
  color: #fff;
  margin-top: 1.5rem
}
.submit-btn svg{
  padding-left: .75rem;
  padding-right: .75rem;
}
.content{
  margin-top: 1.5rem
}
input{
  width: 100%;
  height: 100%;
  background-color: #f3f3f5;
  padding: .5rem;
  color: #3a3a3c;
  border: none;
  border-radius: 5px;
}
</style>