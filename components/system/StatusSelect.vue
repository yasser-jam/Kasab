<template>
    <base-select :items="options" map-options placeholder="فعال"></base-select>
  </template>
  
  <script setup lang="ts">
  const options = ref<{ title: string, value: string }[]>([
      {
        title: 'فعال',
        value: 'active'
      },
      {
        title: 'مغلق',
        value: 'cloused'
      }
  ])
  </script>
  