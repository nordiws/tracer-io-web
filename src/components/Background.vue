<template>
  <div class="background">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.background {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  overflow: auto;
  background-image: var(--background-color);
}
</style>
