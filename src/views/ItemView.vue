<template>
  <div>
      item
  </div>
</template>

<script>
import {fetchItemList} from "../api/index.js"
export default {
  created(){
    fetchItemList()
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

}
</script>

<style>

</style>