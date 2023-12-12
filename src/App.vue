<script setup lang="ts">
import NavHeader from './components/NavHeader.vue';
import Background from './components/Background.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <background>
    <nav-header>
      <router-view />
    </nav-header>
  </background>
</template>

<style scoped></style>
