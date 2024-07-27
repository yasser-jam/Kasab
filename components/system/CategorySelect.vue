<template>
    <base-select
      :model-value="modelValue"
      :items
      placeholder="برمجي، خدمي"
      map-options
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
  
  
  const items = computed(() =>
    categories.value.map((el) => ({
      title: el.name,
      value: el.name,
    }))
  );
  </script>
  