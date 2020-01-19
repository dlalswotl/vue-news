<template>
<div class="header">
  <router-link to="/news">news</router-link> |
  <router-link to="/ask">ask</router-link> |
  <router-link to="/jobs">jobs</router-link>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    color: white;
    background: darkcyan;
    display: flex;
    padding: 8px;
}
.header .router-link-active{
 color:red;
}
.header a{
    color:white;
}
</style>