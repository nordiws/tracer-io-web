<script setup lang="ts">
import { NPageHeader, NAffix, NIcon, NCard } from 'naive-ui';
import { useNavHeaderStore } from '../stores/navHeader';
import HomeRound from '@vicons/material/HomeRound.js';
import SearchSharp from '@vicons/material/SearchSharp.js';
import MenuSharp from '@vicons/material/MenuSharp.js';
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
        <n-icon size="24"><HomeRound /></n-icon>
      </template>
      <template #extra>
        <n-icon size="24" style="margin-top: 5px"><SearchSharp /></n-icon>
        <n-icon size="24" style="margin-top: 5px; margin-left: 5px">
          <MenuSharp />
        </n-icon>
      </template>
    </n-page-header>
  </n-affix>
  <n-card v-if="$route.path !== '/login'" class="main"><slot></slot> </n-card>
  <slot v-else></slot>
</template>

<style lang="scss">
.nav-header {
  height: 50px;
  width: 100vw;
  background-color: #a9e996;
  //border-radius only bottom corners
  border-radius: 0 0 5px 5px;
  z-index: 100;
  position: fixed;
}
.page-header {
  margin: 6px 15px;
}
.main {
  margin-top: 55px;
  border-radius: 15px 15px 0 0;
  min-height: 100vh;
}
</style>
