<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<template>
  <main class=" flex">
    <Header></Header>
    <RouterView />
  </main>

</template>

<style scoped>

</style>
