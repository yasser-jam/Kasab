<template>
    <base-select
      :model-value="modelValue"
      :items="categories"
      placeholder="تصميم، برمجة،..."
      map-options
      item-title="name"
      item-value="id"
      :loading
      @update:model-value="$emit('update:model-value', $event)"
    ></base-select>
  </template>
  
  <script setup lang="ts">
  const categoryStore = useCategoryStore();
  
  const { categories } = storeToRefs(categoryStore);
  
  const { pending: loading } = useLazyAsyncData(() => categoryStore.list());
  
  const props = defineProps<{
    modelValue: number;
  }>();
  
  </script>
  