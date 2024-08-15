<template>
    <div
      class="flex justify-between items-center bg-slate-50 rounded-lg p-3"
    >
      <div class="flex items-center gap-4">
        <div class="bg-slate-200 rounded-full p-3">
          <Icon name="mdi:image" size="1.5rem" class="text-primary" />
        </div>
  
        <div class="text-primary text-lg font-semibold">الصورة #{{ file.id }}</div>
      </div>
  
      <base-btn
        v-if="downloadable"
        icon="mdi:download"
        color="primary"
        btn-class="btn btn-link"
        :to="file.url"
      ></base-btn>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    file: any
    downloadable?: boolean
  }>()
  </script>