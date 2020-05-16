<template>
  <div>
    <div id="nav">
      <router-link to="/app/home">Home</router-link>
      |
      <router-link to="/app/about">About</router-link>
      |
      <router-link to="/app/camera">Camera</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Portal',
};
</script>

<style scoped>

</style>
