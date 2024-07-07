<template>
    <base-select :items="options" map-options placeholder="دوام كامل"></base-select>
  </template>
  
  <script setup lang="ts">
  const options = ref<{ title: string, value: string }[]>([
      {
        title: 'دوام جزئي (part time)',
        value: 'part-time'
      },
      {
        title: 'دوام كامل',
        value: 'full-time'
      }
  ])
  </script>
  