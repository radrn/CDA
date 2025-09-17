<template>
  <CoursVariable></CoursVariable>
  <CounterComposent></CounterComposent>
</template>

<script>
import CoursVariable from '@/Component/CoursVariable.vue'
import CounterComposent from '@/Component/CounterComposent.vue'

export default {
  name: 'App',
  components: { CounterComposent, CoursVariable }
}
</script>

<style scoped></style>
