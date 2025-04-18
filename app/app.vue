<script setup lang="ts">
const config = useRuntimeConfig()

const serverUrl = ref<string | undefined>(undefined)

if (import.meta.server) {
  serverUrl.value = config.apiServerUrl
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@use "~/assets/scss/main.scss";
</style>