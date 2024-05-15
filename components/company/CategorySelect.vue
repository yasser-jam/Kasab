<template>
  <base-select
    :model-value="selectedItem"
    :items
    placeholder="برمجي، خدمي"
    @update:model-value="$emit('update:model-value', $event)"
  ></base-select>
</template>

<script setup lang="ts">
const categoryStore = useCategoryStore();

const { categories } = storeToRefs(categoryStore);

const { pending } = useLazyAsyncData(() => categoryStore.list());

const props = defineProps<{
  modelValue: string;
}>();

const selectedItem = computed(() => ({
  title: props.modelValue,
  value: props.modelValue,
}));

const items = computed(() =>
  categories.value.map((el) => ({
    title: el.name,
    value: el.name,
  }))
);
</script>
