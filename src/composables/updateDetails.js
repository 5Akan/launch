import { ref } from 'vue';

const updateDetails = () =>{
    
    const details = ref([]);
    const err = ref();
    const link = async()=>{
     try{
        let data = await fetch('http://localhost:3000/posts');
       if(!data.ok){
         throw Error("Url problem");
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
