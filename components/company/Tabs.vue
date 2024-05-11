<template>
  <div role="tablist" class="tabs tabs-lg tabs-bordered">
    <nuxt-link role="tab" class="tab font-semibold text-primary" to="/accounts/company/general-info" :class="{ 'tab-active': routeName == 'general' }">المعلومات العامة</nuxt-link>
    <nuxt-link role="tab" class="tab font-semibold" to="/accounts/company/offers" :class="{'tab-active': routeName == 'offers'}">عروضي</nuxt-link>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const routeName = String(route.name)?.split('-')[2] // general or offers

</script>