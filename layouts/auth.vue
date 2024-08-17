<template>
  <div class="container min-h-screen px-16">
    <NuxtPage />

      <base-toast v-if="showToaster"></base-toast>
  </div>

</template>

<script setup lang="ts">
const toasterStore = useToasterStore()

const { showToaster } = storeToRefs(toasterStore)
</script>