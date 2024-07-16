<template>
    <base-select :items="options" map-options placeholder="من موقع الشركة"></base-select>
  </template>
  
  <script setup lang="ts">
  const options = ref<{ title: string, value: string }[]>([
      {
        title: 'من موقع الشركة',
        value: 'on-site'
      },
      {
        title: 'عن بعد (من البيت)',
        value: 'remotly'
      }
  ])
  </script>
  