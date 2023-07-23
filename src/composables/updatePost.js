import { ref } from 'vue';

const updatePost = () =>{
    
    const posts = ref([]);
    const err = ref();
    const loading = ref("Loading Page");
    const url = async()=>{
     try{
        let data = await fetch('http://localhost:3000/posts');
       if(!data.ok){
         throw Error("Url problem");
       }else{
        posts.value = await data.json();  
       }
       

     }catch(error){
       err.value = error.message;
     }
   }

   const showPost = ref(true);

   return{showPost, posts,err,loading,url}
  
}
export default updatePost 
