import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/pages/Home.vue";
import Presentation from "@/pages/Presentation.vue";
import ExoRecap from "@/pages/ExoRecap.vue";
import Exo2 from "@/pages/Exo2.vue";
import Exo3 from "@/pages/Exo3.vue";
import Exo4 from "@/pages/Exo4.vue";
import MovieList from "@/component/MovieList.vue";
import Promise from "@/pages/Promise.vue";
import Login from "@/pages/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", component: Home, meta: {requiresAuth: true}},
    {path: "/presentation", component: Presentation},
    {path: "/exo-recap",component: ExoRecap},
    {path: "/exo2", component: Exo2},
    {path: "/exo3", component: Exo3},
    {path: "/exo4", component: Exo4},
    {path: "/movie", component: MovieList},
    {path: "/promise", component: Promise},
    {path: "/login", component: Login}
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if(to.meta.requiresAuth && !token){
    next('/login');
  }else {
    next()
  }
})

export default router
