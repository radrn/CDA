<template>
  <h1>Les promises: </h1>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Promise",
  async mounted() {
   console.log('salut');
   // let test = this.sleep(false).then((data) =>  {
   //   console.log(data)
   // }).catch((error) => {
   //   console.log('une erreuuuuuuuur')
   // });
   // console.log(test);
    try{
   let data = await this.sleep(true);
   console.log(data)
    } catch (error) {
      console.log(('errooooooooooooooooor'))
    }
    const array = await Promise.all([
        this.sleep(true),
        this.sleep(true),
        this.sleep(true),
        this.sleep(true),
        this.sleep(true),
    ])
    console.log(array)
  },
  methods: {
    sleep(status){
      return new Promise((resolve, reject) =>{
        setTimeout(()=> {
          if(status ===true){
            resolve('alloooo')
          }else{
          reject ('wrong status');
          }
        }, 2000)
      })
    }
  }

})
</script>
<style scoped>

</style>