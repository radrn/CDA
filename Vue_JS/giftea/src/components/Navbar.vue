<template>
  <div class="navigation">
      <div class="idea">
        <NavCard title="Idée Cadeaux" icon="gift" id="1" @card-change="mainTab"></NavCard>
      </div>
      <div class="group-people">
        <NavCard title="Groupes & Personnes" icon="people" id="2" @card-change="mainTab"></NavCard>
      </div>

      <div class="profile">
        <NavCard title="Mon Profil" icon="profile" id="3" @card-change="mainTab"></NavCard>
      </div>
        <div class="wishes">
          <NavCard title="Mes Souhaits" icon="wishes" id="4" @card-change="mainTab"></NavCard>
        </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import NavCard from "@/components/NavCard.vue";

export default defineComponent({
  name: "Navbar",
  components: {NavCard},
  methods: {
    mainTab(id){
      this.$emit('cardChange', id)
    }
  }
})
</script>

<style scoped>
.navigation{
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .9rem;
}

.idea,
.profile,
.group-people,
.wishes{
  min-width: 200px;
  background-color: #f3f4f6;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-radius: .6rem;
  transition-duration: .25s;
  position: relative;
}
</style>