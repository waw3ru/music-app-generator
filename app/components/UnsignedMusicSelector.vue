<script setup lang="ts">

</script>

<template>
<div :class="$style['selector']">
  <InputText type="text" size="large" style="--p-inputtext-lg-padding-y: 1rem; width: 100%" />
  <Button label="Create" icon="pi pi-user" size="large" style="margin-inline: 1rem" />
</div>
</template>

<style lang="scss" module scoped>
.selector {
  width: 40.25rem;
  border: 1px solid white;
  padding: 1.75rem 0.75rem;
  border-radius: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>