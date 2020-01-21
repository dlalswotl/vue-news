<template>
  <div>
      <ul>
        <li v-for="(job,index) in this.$store.state.jobs" v-bind:key="index">
          <a :href="job.url">{{job.title}}</a> <small>{{job.time_ago}}</small> by <small>{{job.domain}}</small>
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