<template>
  <div dir="rtl">
    <layout-header></layout-header>
  
    <NuxtPage />
  </div>

</template>


<script setup lang="ts">
const authStore = useAuthStore()

useLazyAsyncData<User>(() => authStore.me())
</script>