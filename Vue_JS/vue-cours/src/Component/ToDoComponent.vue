<template>
  <h1>Let's Get Busy !</h1>
  <input v-model="input">
  <button @click="addTodo">Ajouter la tâche !</button>
  <ul>
    <TransitionGroup name="list" tag="ul">
    <li v-for="(item, index) in tasks" :key="index" :class="{isDone: item.done === true}">
      <input type="checkbox" v-model="item.done">
      {{item.text}}
      <button @click="removeTask(index)"> Supprimer</button>
    </li>
    </TransitionGroup>
  </ul>
</template>

<script>
export default {
  name: 'ToDoComponent',
  data(){
    return {
      input: '',
      tasks: [
      ],
    }
  },
  methods : {
      addTodo(){
        this.tasks.push({
          text: this.input,
          done: false,
        })
      },
      // isChecked(index){
      //   this.tasks[index].done = !this.tasks[index].done;
      //   // if( this.tasks[index].done === false){
      //   //   this.tasks[index].done = true
      //   // } else {
      //   //   this.tasks[index].done = false
      //   // }
    // },
    removeTask(index){
        this.tasks.splice(index, 1)
    }
  }
}

</script>

<style scoped>

  input{
    margin-right: 10px;
  }
  .isDone{
    text-decoration:line-through;
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

 li{
  list-style: none;
  border: 1px solid black;
  padding: 8px;
  border-radius: 5px;
  background-color: rgba(236, 231, 226, 0.5);
   margin: 5px;
 }

 button {
   border-radius : 10px;
   padding: 8px;
   background-color: #d8edd8;
   border: none;
 }

</style>
