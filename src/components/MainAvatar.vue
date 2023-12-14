<script setup lang="ts">
import { NCard, NIcon } from 'naive-ui';
import CameraEnhanceRound from '@vicons/material/CameraEnhanceRound.js';
</script>

<template>
  <div class="photo-container">
    <n-card class="photo">
      <n-icon size="96" :depth="5"><CameraEnhanceRound /></n-icon>
    </n-card>
  </div>
</template>

<style lang="scss">
.photo-container {
  margin-top: 78px;
  margin-bottom: -14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.photo {
  width: 200px;
  height: 155px;
  border-radius: 15px;
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);
  .n-card__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
