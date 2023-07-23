<template>
  <h3>{{ post.title}}</h3>
   <router-link :to = "{name: 'details'}">
      <p>{{ snippet}}</p>
   </router-link>
 
  <span v-for= "tag in post.tags" :key= "tag">
    <li>{{tag}}</li>
  </span>
</template>

<script>
import { computed } from 'vue'
export default {
    props:["post"],
    setup(props){
        const snippet = computed(() =>{
        return props.post.body.substring(0,50) + '....';

        
    })
    return {snippet}
    }
    
}
</script>

<style>

</style>