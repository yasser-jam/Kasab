<template>
    <base-select :items="genders" map-options placeholder="ذكر"></base-select>
  </template>
  
  <script setup lang="ts">
  const genders = ref<{ title: string, value: string }[]>([
      {
        title: 'ذكر',
        value: 'male'
      },
      {
        title: 'أنثى',
        value: 'female'
      }
  ])
  </script>
  