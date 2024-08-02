<template>
  <base-select :items="companies" map-options :loading placeholder="ذكر"></base-select>
</template>

<script setup lang="ts">
const companyStore = useCompanyStore()

const { pending: loading } = useLazyAsyncData(() => companyStore.list())

const { companies } = storeToRefs(companyStore)
</script>
