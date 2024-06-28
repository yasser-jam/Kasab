<template>
  <base-select
    :items="data"
    placeholder="مطور فرونت اند"
    :loading
    item-title="name"
    item-value="id"
  ></base-select>
</template>

<script setup lang="ts">
const jobStore = useJobStore()

const name = ref<string>()

const { data, pending: loading } = useLazyAsyncData(() => jobStore.list())
</script>
