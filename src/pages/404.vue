<script setup lang="ts">
import { useNavHeaderStore } from '../stores/navHeader';
const store = useNavHeaderStore();
store.title = 'Not Found';
</script>
<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold">404</h1>
    <p class="text-xl">Page not found</p>
  </div>
</template>
