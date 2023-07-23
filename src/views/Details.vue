<template>
<div v-if="err">Error in page</div>
  <div v-for= "detail in details" :key = "detail.id">
      <p>{{details.title}}</p>
      <p>{{details.body}}</p>
  </div>
  <div>Test</div>
</template>

<script>
import updateDetails from '../composables/updateDetails.js'
export default {
    components:{ updateDetails },
    setup(){

    const {link, err, details} = updateDetails();
    
    link();
    console.log(details);
    return{link, err, details}
    }
}
</script>

<style>

</style>