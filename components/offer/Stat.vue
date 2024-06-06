<template>
  <div class="card shadow-md p-4 rounded-lg">
    <div class="text-2xl mb-4">أبرز الشركات</div>

    <company-inline-card></company-inline-card>

    <div class="divider w-[80%] mx-auto"></div>

    <company-inline-card></company-inline-card>
    <div class="divider w-[80%] mx-auto"></div>

    <company-inline-card></company-inline-card>
  </div>
</template>

<script setup lang="ts">
const types = ref([
  {
    name: 'برمجي',
    count: 305
  },
  {
    name: 'طبي',
    count: 20
  },
  {
    name: 'خدمي',
    count: 100
  },
  {
    name: 'صناعي',
    count: 150
  }
])
</script>
