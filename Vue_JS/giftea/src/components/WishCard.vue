<template>
  <div class="left-content">
    <div class="btn-drag">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="9" cy="12" r="1"></circle>
          <circle cx="9" cy="5" r="1"></circle>
          <circle cx="9" cy="19" r="1"></circle>
          <circle cx="15" cy="12" r="1"></circle>
          <circle cx="15" cy="5" r="1"></circle>
          <circle cx="15" cy="19" r="1"></circle>
        </svg>
      </button>
    </div>
    <div class="heart-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
      </svg>
    </div>
    <p>{{wish.label}}</p>
  </div>
  <div class="right-content">
    <button class="blue" v-if="wish.link !== null" @click="copyLink">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3498db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy h-4 w-4" aria-hidden="true">
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
      </svg>
    </button>
    <button class="blue" v-if="wish.link !== null"@click="openLink">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3498db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M15 3h6v6"></path><path d="M10 14 21 3"></path>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      </svg>
    </button>
    <button class="green" @click="openModal">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
      </svg>
    </button>
    <button class="red">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M10 11v6"></path>
        <path d="M14 11v6"></path>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6">
        </path><path d="M3 6h18"></path>
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      </svg>
    </button>
  </div>
  <Modal v-if="isOpen === true" @close="closeModal"
         :title="'Modifier mon souhait'"
         :buttonLabel="'Modifier mon souhait'"
         :wish-label="wish.label"
         :wish-link="wish.link"
         :wish-id="wish.id"
  ></Modal>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Modal from "@/components/Modal.vue";

export default defineComponent({
  name: "WishCard",
  components: {Modal},
  props:{
    wish: {},
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
      async copyLink() {
        try{
          await navigator.clipboard.writeText(this.wish.link)
          console.log('le lien a été copié !')
        } catch(error){
          console.log('le lien ne peut pas être copié')
        }
      },
      async openLink() {
          await window.open(this.wish.link)
      },
    openModal() {
        this.isOpen = true
    },
    closeModal() {
        this.isOpen = false
    }
    }
})
</script>
<style scoped>
.left-content{
  display: flex;
  align-items: center;
  gap: .5rem;
}
.right-content{
  display: flex;
  align-items: center;
  gap: .7rem;
}
button{
  border: none;
  background: unset;
  padding: 0.5rem;
}

.blue:hover{
  background-color: rgba(52, 152, 219, 0.25);
  border-radius: 8px;
}
.green:hover{
  background-color: rgba(46, 204, 113, 0.25);
  border-radius: 8px;
}
.red:hover{
  background-color: rgba(231, 76, 60, 0.25);
  border-radius: 8px;
}
</style>