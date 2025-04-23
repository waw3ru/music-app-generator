<script setup lang="ts">

</script>

<template>
<div :class="$style['selector']">
  <FloatLabel variant="in" style="width: 100%">
    <InputText type="text" size="large" style="--p-inputtext-lg-padding-y: 1rem; width: 100%" />
    <label for="over_label">Type any idea you have</label>
  </FloatLabel>
  <Button label="Create" icon="pi pi-headphones" size="large" style="margin-inline-start: 0.5rem; --p-button-lg-padding-y: 1rem; --p-button-lg-padding-x: 1rem" />
</div>
</template>

<style lang="scss" module scoped>
.selector {
  width: 40.25rem;
  border: 1px solid transparent;
  padding: 0;
  border-radius: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
