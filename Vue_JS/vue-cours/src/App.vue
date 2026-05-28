<template>
<!--  <CoursVariable></CoursVariable>-->
<!--  <CounterComposent></CounterComposent>-->
  <ToDoComponent></ToDoComponent>
</template>

<script>
import CoursVariable from '@/Component/CoursVariable.vue'
import CounterComposent from '@/Component/CounterComposent.vue'
import ToDoComponent from '@/Component/ToDoComponent.vue'

export default {
  name: 'App',
  components: { ToDoComponent, CounterComposent, CoursVariable },
}
</script>

<style scoped></style>
