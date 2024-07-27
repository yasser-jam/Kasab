<template>
  <base-select
    :model-value="modelValue"
    :items
    placeholder="برمجي، خدمي"
    map-options
    item-title="name"
    item-value="id"
    :loading
    @update:model-value="$emit('update:model-value', $event)"
  ></base-select>
</template>

<script setup lang="ts">
import type { SubCategory } from '~/types'

const subCategoryStore = useSubCategoryStore()

const { subCategories } = storeToRefs(subCategoryStore)

const { pending: loading } = useLazyAsyncData(async () => {
  if (props.items) return Promise.resolve()
  return await subCategoryStore.list(props.categoryId)
})

const props = defineProps<{
  modelValue: number
  categoryId: number
  items?: SubCategory[]
}>()

const items = computed(() => props.items ?? subCategories.value)
</script>
