<template>
<div v-if="err">Error in page</div>
  <div v-if= "details">
      <p>{{details.title}}</p>
      <p>{{details.body}}</p>
       <span v-for= "tag in details.tags" :key = "tag">
            <p>{{tag}}</p>
        </span>
  </div>
 
</template>

<script>
import updateDetails from '../composables/updateDetails';
export default {
    components:{ updateDetails },
    props:["id"],//Fetch data based on id from Details using props
    setup(props){

    const {link, err, details} = updateDetails(props.id);
    
    link();
    return{link, err, details}
    }
}
</script>

<style>

</style>