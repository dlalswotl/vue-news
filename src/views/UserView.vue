<template>
  <div>
    <p>{{user.id}}</p>
    <p>{{user.created}}</p>
    <p>{{user.karma}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters({
      user:'UserInfo',
    })
  },
  created(){
    const username=this.$route.params.id;
    this.$store.dispatch('FETCH_USER',username);
  },
}
</script>

<style>

</style>