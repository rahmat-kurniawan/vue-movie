<template>
  <div id="app">
    <Navbar />
    <div class="container mt-3">
      <router-view/>
    </div>
  </div>
</template>

<style>
 body{
   background-color: rgb(247, 247, 247);
 }
</style>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>