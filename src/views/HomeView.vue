<template>
  <div class="home">
    <h1>HOME</h1>
<div v-if= "err">Problem With Page</div>
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
import updatePost from '../composables/updatePost.js';
// @ is an alias to /src


export default {
  name: 'HomeView',
  components:{PostList, updatePost},
  setup(){
    const {showPost,posts,err,loading,url} = updatePost();
    
    url();
    return{showPost, posts,err,loading}
  }
}

</script>
