<template>
  <NuxtPage />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: [
    function () {
      navigateTo("/accounts/company/general-info");
    },
  ],
});
</script>
