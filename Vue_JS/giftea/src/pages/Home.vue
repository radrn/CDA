<template>

    <Header></Header>
    <div class="container">
      <Navbar @card-change="clickCard"></Navbar>

      <div class="content">
        <Idea v-if="idCard === '1'">  </Idea>
        <Groups v-if="idCard === '2'"></Groups>
        <Profile v-if="idCard === '3'"></Profile>
        <Wishes v-if="idCard === '4'"></Wishes>
      </div>
    </div>



</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import Idea from "@/components/Idea.vue";
import Profile from "@/components/Profile.vue";
import Groups from "@/components/Groups.vue";
import Wishes from "@/components/Wishes.vue";


export default defineComponent({
  name: "Home",
  components: {Wishes, Groups, Profile, Idea, Navbar, Header},
  data() {
    return {
    idCard: '1'
    }
  },
  methods: {
    clickCard(id){
      this.idCard = id;
      console.log(id)
    }
  }
})
</script>
<style scoped>
.container{
  background-color: white;
  box-shadow: 2px 8px 14px rgba(0, 0, 0, 0.17);
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
}
</style>