<template>
  <div class="header">
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .header{color: white;background-color: #42b883; display: flex;padding:8px 8px 8px 25px;}
    .header .router-link-exact-active {color: #35495e;}
    .header a {color: #fff; display: inline-block; margin: 0 5px;}

</style>