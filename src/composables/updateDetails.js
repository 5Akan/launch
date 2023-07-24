import { ref } from 'vue';

const updateDetails = (id) =>{
    
    const details = ref(null);
    const err = ref(null);
    const link = async()=>{
     try{
        let data = await fetch('http://localhost:3000/posts/' + id);
       if(!data.ok){
         throw Error("Post does not exist");
       }else{
        details.value = await data.json();  
       }
     }catch(error){
       err.value = error.message;
     }
   }


   return{link, err, details}
  
}
export default updateDetails 
