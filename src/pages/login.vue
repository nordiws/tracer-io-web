<script setup lang="ts">
import { NSpace, NIcon, NInput, NButton, NDivider } from 'naive-ui';
import AccountCircleFilled from '@vicons/material/AccountCircleFilled.js';
import SendFilled from '@vicons/material/SendFilled.js';
import { router } from '../routes';
const login = () => {
  router.push('/');
};
</script>

<template>
  <n-space class="login" vertical align="center" justify="center">
    <n-icon color="white" size="150">
      <account-circle-filled />
    </n-icon>
    <n-divider></n-divider>
    <n-input round placeholder="username" />
    <n-input round placeholder="password" />
    <n-button text>forgot your password?</n-button>
    <n-divider></n-divider>
    <n-button color="white" text-color="black" @click="login">
      <template #icon>
        <n-icon>
          <SendFilled />
        </n-icon>
      </template>
      LOGIN
    </n-button>
    <n-button color="white" text-color="black">
      <template #icon>
        <n-icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
          >
            <path
              d="M27.39 13.82H16.21v4.63h6.44c-.6 2.95-3.11 4.64-6.44 4.64a7.09 7.09 0 0 1 0-14.18a7 7 0 0 1 4.42 1.58L24.12 7a12 12 0 1 0-7.91 21c6 0 11.45-4.36 11.45-12a9.56 9.56 0 0 0-.27-2.18z"
              fill="currentColor"
            ></path>
          </svg>
        </n-icon>
      </template>
      GOOGLE
    </n-button>
  </n-space>
</template>

<style lang="scss">
.login {
  height: 100vh;
}
</style>
