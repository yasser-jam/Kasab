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
const subCategoryStore = useSubCategoryStore()

const { subCategories } = storeToRefs(subCategoryStore)

const { pending: loading } = useLazyAsyncData(() => subCategoryStore.list(props.categoryId))

const props = defineProps<{
  modelValue: number,
  categoryId: number
}>()

const items = computed(() =>
  subCategories.value.map((el) => ({
    title: el.name,
    value: el.name
  }))
)
</script>
