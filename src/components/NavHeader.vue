<script setup lang="ts">
import { NPageHeader, NAffix, NIcon } from 'naive-ui';
import { useNavHeaderStore } from '../stores/navHeader';
import Home12Regular from '@vicons/fluent/Home12Regular.js';
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
    <n-page-header :title="store.title" @back="handleBack">
      <template v-if="$route.path === '/'" #back>
        <n-icon size="large"><Home12Regular /></n-icon>
      </template>
    </n-page-header>
  </n-affix>
  <slot></slot>
</template>

<style lang="scss">
.nav-header {
  height: 35;
  padding: 8px;
  width: 100vw;
  background-color: #a9e996;
  z-index: 100;
}
</style>
