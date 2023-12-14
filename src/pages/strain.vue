<script setup lang="ts">
import { NCard, NIcon, NList, NListItem, NSpace } from 'naive-ui';
import { useNavHeaderStore } from '../stores/navHeader';
import ItemHeader from '../components/ItemHeader.vue';
import CameraEnhanceRound from '@vicons/material/CameraEnhanceRound.js';
import { HarvestItem } from '../types/harvest';
import MainAvatar from '../components/MainAvatar.vue';

const items: HarvestItem[] = [
  {
    name: 'Harvest 1',
    date: '2021',
    qantiy: '10',
    yield: 0.8,
  },
  {
    name: 'Harvest 2',
    date: '2022',
    qantiy: '15',
    yield: 1.6,
  },
  {
    name: 'Harvest 3',
    date: '2023',
    qantiy: '20',
    yield: 3.2,
  },
];
const store = useNavHeaderStore();
store.title = 'Strain';
</script>

<template>
  <main-avatar />
  <n-card class="main variant">
    <item-header title="Strain" content="Strain content" />
    <n-list :show-divider="false">
      <template #header>
        <div style="margin-top: 10px">Harvest history:</div>
      </template>
      <n-list-item v-for="item in items" class="harvest-item">
        <template #prefix>
          <n-icon size="24" color="#637081" :depth="5" class="thumbanil">
            <CameraEnhanceRound />
          </n-icon>
        </template>
        <n-space>
          <span>
            {{ `${item.name} -  ${item.date}` }}
          </span>
          <div class="details">
            {{
              `Qty: ${item.qantiy}  Yield: ${item.yield.toLocaleString(
                undefined,
                {
                  style: 'decimal',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 3,
                }
              )} kgs`
            }}
          </div>
        </n-space>
      </n-list-item>
    </n-list>
  </n-card>
</template>

<style lang="scss">
.thumbanil {
  margin-left: 5px;
  border: 1px solid #e3e4e2;
  padding: 3px;
  border-radius: 50%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
}
.harvest-item {
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
}
.n-list .n-list-item {
  padding: 5px 5px;
  margin: 5px 0;
}
.details {
  font-size: 12px;
  color: #637081;
  margin-left: 10px;
}
</style>
