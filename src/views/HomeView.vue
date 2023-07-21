<template>
  <div class="home">
    <h1>HOME</h1>
<div v-if="err">Problem With Page</div>
<div v-else-if= "posts.length">
  <PostList v-if = "showPost" :posts = "posts"/>
</div>
<div v-else>{{loading}}</div>
    
    <button @click= "showPost = !showPost">Show Post</button>
    <button @click= "posts.pop()">Remove Post</button>
    
  </div>
</template>
<script>
import PostList from '../components/PostList.vue';
import { ref } from 'vue';
// @ is an alias to /src


export default {
  name: 'HomeView',
  components:{PostList},
  setup(){
    const posts = ref([]);
    const err = ref();
    const loading = ref("Loading Page");
   const url = async()=>{
     try{
        let data = await fetch('http://localhost:3000/post');
       if(!data.ok){
         throw Error("Url problem");
       }else{
        posts.value = await data.json();  
       }
       

     }catch(error){
       err.value = error.message;
     }
   }
  url()
   const showPost = ref(true);

   return{showPost, posts,err,loading}
  
  }
}

</script>
