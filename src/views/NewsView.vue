<template>
  <div>
      <ul>
        <li v-for="(item,index) in this.$store.state.news" v-bind:key="index">
          {{item.title}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  created(){
   this.$store.dispatch("FETCH_NEWS");
  }
}
</script>

<style>

</style>