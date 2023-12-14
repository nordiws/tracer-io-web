<script setup lang="ts">
import ItemList from '../components/ItemList.vue';
import { StrainItem } from '../types/strain';
import { NCard } from 'naive-ui';

const items: StrainItem[] = [
  {
    name: 'Gorilla Glue',
    description: 'Hybrid strain (50% indica/50% sativa).',
    origin: 'los pibes de la costa.',
  },
  {
    name: 'Girl Scout Cookies',
    description: 'Indica-dominant (60%).',
    origin: 'monsterseeds.com.br',
  },
  {
    name: 'Banana Sherbet',
    description: 'Potent hybrid and indica-dominant.',
    origin: 'monsterseeds.com.br',
  },
];
</script>

<template>
  <n-card class="main">
    <item-list :items="items"> </item-list>
  </n-card>
</template>
