<template>
  <div>
      news
  </div>
</template>

<script>
import {fetchNewsList} from '../api/index.js'
export default {
  data(){
    return {
      news:[],
    }
  },
  created(){
    fetchNewsList()
    .then(
      function(response){
        console.log(response);
        })
    .catch(
      function(error){
        console.log(error+"에러");
        })
  }
}
</script>

<style>

</style>