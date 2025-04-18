<template>
  <section id="page" class="row center-xs" :class="$style.page">
    <slot />
  </section>
</template>

<script setup lang="ts">
</script>

<style module scoped>
.page {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>