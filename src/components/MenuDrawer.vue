<script setup lang="ts">
import { NDrawer, NDrawerContent } from 'naive-ui';
import { useMenuDrawerStore } from '../stores/menuDrawer';

const store = useMenuDrawerStore();
store.title = 'Menu';
</script>

<template>
  <n-drawer v-model:show="store.active" :width="300" placement="right">
    <n-drawer-content :title="store.title" closable>
      Stoner is a 1965 novel by the American writer John Williams.
    </n-drawer-content>
  </n-drawer>
</template>
