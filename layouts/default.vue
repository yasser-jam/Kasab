<template>
  <div dir="rtl">
    <layout-header></layout-header>
  
    <NuxtPage />
  </div>

  <base-toast v-if="showToaster"></base-toast>

</template>


<script setup lang="ts">
const authStore = useAuthStore()
const toastStore = useToasterStore()

const { showToaster } = storeToRefs(toastStore)

useLazyAsyncData<User>(() => authStore.me())

</script>