<template>
  <NuxtPage />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: [
    function () {
      navigateTo("/accounts/company/create/general-info");
    },
  ],
});
</script>
