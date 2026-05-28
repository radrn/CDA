<template>
  <div class="dashboard-header">
    <div class="left-content">
      <div class="logo-container">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24" class="logo">
          <rect width="18" height="4" x="3" y="8" rx="1"></rect>
          <path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
        </svg>
      </div>
      <div class="title-container">
        <h1>Giftéa</h1>
        <p>Salut USERNAME ! 👋</p>
      </div>
    </div>
    <div class="right-content">
      <button class="disconnect-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" viewBox="0 0 24 24">
          <path d="m16 17 5-5-5-5M21 12H9M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        </svg>
        <span>Déconnexion</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Header"
})
</script>
<style scoped>
.dashboard-header{
  width: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to right, #ec4899, #a855f7, #3b82f6);
  color: #ffffff;
  box-shadow: 2px 8px 14px rgba(0, 0, 0, 0.17);
}
.dashboard-header .left-content {
  display: flex;
  gap: .8rem;
  justify-content: center;
  align-items: center;
}
.dashboard-header .right-content .disconnect-btn {
  background: none;
  border: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: .5rem;
  padding: .6rem;
  border-radius: .5rem;
  transition-duration: .4s;
  font-family: 'Poppins', sans-serif;
  font-size: .9rem;
}
.dashboard-header .logo{
  width: 35px;
  height: 35px;
  fill: none;
  stroke: currentcolor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}
</style>