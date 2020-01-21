<template>
  <div>
      <ul>
        <li v-for="(ask,index) in fetchedAsk" v-bind:key="index">
          <router-link v-bind:to="`/item/${ask.id}`">{{ask.title}}</router-link> <small>{{ask.time_ago}}</small> by <small>{{ask.user}}</small>
        </li>
      </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed:{
    ...mapGetters([
      'fetchedAsk',
    ]),
  },
  created(){
    this.$store.dispatch('FETCH_ASKS');
  }

}
</script>

<style>

</style>