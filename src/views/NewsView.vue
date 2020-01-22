<template>
  <div>
      <ul>
        <li v-for="(item,index) in this.$store.state.news" v-bind:key="index">
          <a :href="item.url">{{item.title}}</a>
           <small>{{item.time_ago}}</small> by <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
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