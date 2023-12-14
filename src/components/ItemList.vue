<script setup lang="ts">
import { NList, NListItem, NIcon } from 'naive-ui';
import { PropType } from 'vue';
import { StrainItem } from '../types/strain';
import CameraEnhanceRound from '@vicons/material/CameraEnhanceRound.js';
import MoreVertSharp from '@vicons/material/MoreVertSharp.js';

const props = defineProps({
  items: {
    type: Array as PropType<StrainItem[]>,
    default: () => [],
  },
});
</script>

<template>
  <n-list :show-divider="false">
    <n-list-item v-for="item in props.items" class="item">
      <template #prefix>
        <div class="image-background">
          <n-icon size="24" color="#637081" :depth="5">
            <CameraEnhanceRound />
          </n-icon>
        </div>
      </template>
      <div class="content">
        <strong>{{ item.name }}</strong>
        <span>{{ item.description }}</span>
        <span>Origin: {{ item.origin }}</span>
      </div>
      <template #suffix>
        <n-icon size="24">
          <MoreVertSharp />
        </n-icon>
      </template>
    </n-list-item>
  </n-list>
</template>

<style lang="scss">
.item {
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
}
.n-list .n-list-item {
  padding: 10px 10px;
  margin: 5px 0;
}
.content {
  // content has to be an element on top of the other elements
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.image-background {
  background-color: #e3e4e2;
  border-radius: 5px;
  height: 56px;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
