<script setup lang="ts">
import { NPageHeader, NAffix, NIcon } from 'naive-ui';
import { useNavHeaderStore } from '../stores/navHeader';
import Home12Regular from '@vicons/fluent/Home12Regular.js';
import SearchSharp from '@vicons/material/SearchSharp.js';
import MenuRound from '@vicons/material/MenuRound.js';
const store = useNavHeaderStore();
const handleBack = () => {
  console.log('handleBack');
};
</script>

<template>
  <n-affix
    v-if="store.active && $route.path !== '/login'"
    :top="0"
    class="nav-header"
    listen-to=""
  >
    <n-page-header class="page-header" :title="store.title" @back="handleBack">
      <template v-if="$route.path === '/'" #back>
        <n-icon size="large"><Home12Regular /></n-icon>
      </template>
      <template #extra>
        <n-icon size="24" style="margin-top: 5px"><SearchSharp /></n-icon>
        <n-icon size="24" style="margin-top: 5px; margin-left: 5px">
          <MenuRound />
        </n-icon>
      </template>
    </n-page-header>
  </n-affix>
  <slot></slot>
</template>

<style lang="scss">
.nav-header {
  height: 40px;
  width: 100vw;
  background-color: #a9e996;
  z-index: 100;
}
.page-header {
  margin: 4px 10px;
}
</style>
