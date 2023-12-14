<script setup lang="ts">
import MenuDrawer from './MenuDrawer.vue';
import { useNavHeaderStore } from '../stores/navHeader';
import { useMenuDrawerStore } from '../stores/menuDrawer';
import { NPageHeader, NAffix, NIcon, NButton } from 'naive-ui';

import HomeRound from '@vicons/material/HomeRound.js';
import MenuSharp from '@vicons/material/MenuSharp.js';
/* import SearchSharp from '@vicons/material/SearchSharp.js'; */

const menuStore = useMenuDrawerStore();
const store = useNavHeaderStore();

function handleBack() {
  console.log('handleBack');
}
/* function handleSearch() {
  console.log('handleSearch');
} */
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
        <!--         <n-button text @click="handleSearch">
          <n-icon size="24" style="margin-top: 5px"><SearchSharp /></n-icon>
        </n-button> -->
        <n-button text @click="menuStore.open()">
          <n-icon size="24" style="margin-top: 5px; margin-left: 5px">
            <MenuSharp />
          </n-icon>
        </n-button>
      </template>
    </n-page-header>
  </n-affix>
  <menu-drawer />
  <slot></slot>
</template>

<style lang="scss">
.nav-header {
  height: 50px;
  width: 100vw;
  background-color: #bbebad;
  border-radius: 0 0 5px 5px;
  z-index: 100;
  position: fixed;
}
.page-header {
  margin: 6px 15px;
}
</style>
