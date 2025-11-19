<script setup>
  import Home from './components/Home.vue'
  import navbar from './components/navbar.vue';
</script>

<template>
  <navbar></navbar>
  <!-- <Home></Home> -->
  <!-- <p><strong>Current route path:</strong> {{ $route.fullPath }}</p> -->
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>

</style>
