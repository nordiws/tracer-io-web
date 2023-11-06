<script setup lang="ts">
import { NPageHeader, NAffix } from "naive-ui";
import { useNavHeaderStore } from "../stores/navHeader";
const store = useNavHeaderStore();
const handleBack = () => {
  console.log("handleBack");
};
</script>

<template>
  <n-affix :top="0" class="nav-header" listen-to="">
    <n-page-header v-if="store.active" :title="store.title" @back="handleBack">
    </n-page-header>
  </n-affix>
</template>

<style lang="scss">
.nav-header {
  padding: 8px;
  width: 100vw;
  background-image: var(--background-color);
  z-index: 1;
}
</style>
