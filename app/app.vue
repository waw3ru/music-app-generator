<script setup lang="ts">
const config = useRuntimeConfig()

const serverUrl = ref<string | undefined>(undefined)

if (import.meta.server) {
  serverUrl.value = config.apiServerUrl
}
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
