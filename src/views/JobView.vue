<template>
  <div>
      <ul>
        <li v-for="(job,index) in this.$store.state.jobs" v-bind:key="index">
          {{job.title}}
        </li>
      </ul>
  </div>
</template>

<script>
export default { 
  created(){
   this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>