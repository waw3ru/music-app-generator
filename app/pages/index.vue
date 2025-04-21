<script setup lang="ts">

</script>

<template>
<div :class="$style.page">
  <div :class="$style['page-topbar']">
    <img src="~/assets/images/logo.svg" alt="Logo">

    <div :class="$style['page-action-buttons']">
      you
    </div>
  </div>
</div>
</template>

<style lang="scss" module scoped>
$topbar-height: 1.875rem;

.page {
  width: 100%;
  height: 100%;
  display: block;
  margin: 0;
  padding: 0;
  //overflow: hidden;
}

.page-topbar {
  height: $topbar-height;
  background: transparent;
  display: flex;
  justify-content: space-between;
  padding: 0.625rem;
}

.page-action-buttons {

}
</style>