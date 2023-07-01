<script setup>
  import Counter from './components/Counter.vue';
</script>

<template>

  <div class="main-container">
    <h1>Vue App</h1>
    <Counter :inicio="1" />
  </div>
</template>

<style scoped>
  .main-container{
    padding: 50px;
  }
</style>
