<template>
  <div class="dashboard-section">
    <div class="section-header">
      <div>
        <h1>Mes Souhaits</h1>
        <p>Ta liste privée de tout ce qui te fait envie</p>
      </div>
      <div class="wishes-button">
        <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none">
            <path d="M6 2H14L18 6V22H6V2Z" stroke="white" stroke-width="2" stroke-linejoin="round"></path>
            <path d="M14 2V6H18" stroke="white" stroke-width="2" stroke-linejoin="round"></path>
            <path d="M12 10V16" stroke="white" stroke-width="2" stroke-linecap="round"></path>
            <path d="M9 13L12 16L15 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          Télécharger en Excel
        </button>
        <button type="submit" @click="openModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4 mr-2" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          Nouveau souhait
        </button>
      </div>
    </div>

    <div class="search-bar">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
           stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
           stroke-width="2" aria-hidden="true" viewBox="0 0 24 24"
           class="search-icon">
        <path d="m21 21-4.34-4.34"></path>
        <circle cx="11" cy="11" r="8"></circle>
      </svg>

      <input class="search-input" placeholder="Rechercher un souhait...">
    </div>

    <WishComponent></WishComponent>
    <Modal v-if="isOpen === true" @close="closeModal"
           :label="'Ajouter un souhait'"
           :buttonLabel="'Ajouter à mes souhait'"></Modal>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue'
import WishComponent from "@/components/WishComponent.vue";
import Modal from "@/components/Modal.vue";

export default defineComponent({
  name: "Wishes",
  components: {Modal, WishComponent},
  data (){
    return{
      isOpen: false
    }
  },
 methods: {
    openModal (){
      this.isOpen = true
    },
    closeModal() {
        this.isOpen = false
      }
    }
})
</script>

<style scoped>
.dashboard-section{
  width: 80%;
  margin: auto;
  padding-bottom: 5rem;
}
.section-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wishes-button{
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.wishes-button svg{
  width: 1rem;
  height: 1rem;
}

button{
  border-radius: 0.35rem;
  border: none;
  padding: 0.5rem 1rem;
  color: #fff;
  background: linear-gradient(to right, #ec4899, #a855f7);
  padding-left: .75rem;
  padding-right: .75rem;
  cursor: pointer;
}
.wishes-button :hover{
  background: linear-gradient(to right, #ae3472, #7c3eb3);
}
.search-bar{
  position: relative;
  width: 100%;
  margin-top: 1rem;
}
.search-input{
  width: 100%;
  height: 100%;
  background-color: #f3f3f5;
  padding: 12px 12px 12px 42px;
  color: #3a3a3c;
  border: none;
  border-radius: 5px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #999;
}
</style>