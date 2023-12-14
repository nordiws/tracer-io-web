<script setup lang="ts">
import { NCard, NIcon, NSwitch } from 'naive-ui';
import SaveEdit24Regular from '@vicons/fluent/SaveEdit24Regular.js';
const props = defineProps({
  title: {
    type: String,
    default: 'Title',
  },
  content: {
    type: String,
    default: 'Content',
  },
});
</script>

<template>
  <n-card :title="props.title" class="header" :bordered="false">
    <template #header-extra>
      <n-switch />
    </template>
    {{ props.content }}
    <template #footer>
      <n-icon size="24" color="#637081"><SaveEdit24Regular /></n-icon>
    </template>
  </n-card>
</template>

<style lang="scss">
.header {
  border-radius: 15px;
  background: #fff;
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);
  .n-card__footer {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
