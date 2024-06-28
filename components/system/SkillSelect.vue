<template>
    <base-select
      :items="data"
      placeholder="الكتابة الإبداعية، التعليق الصوتي، التصميم، HTML،..."
      :loading
      map-options
      item-title="name"
      item-value="id"
      multiple
    ></base-select>
  </template>
  
  <script setup lang="ts">
  const skillStore = useSkillStore()
  
  const name = ref<string>()
  
  const { data, pending: loading } = useLazyAsyncData(() => skillStore.list())
  </script>
  