<template>
  <base-select
    :model-value="modelValue"
    :items
    placeholder="برمجي، خدمي"
    map-options
    @update:model-value="$emit('update:model-value', $event)"
  ></base-select>
</template>

<script setup lang="ts">
const industryStore = useIndustryStore();

const { industries } = storeToRefs(industryStore);

const { pending } = useLazyAsyncData(() => industryStore.list());

const props = defineProps<{
  modelValue: string;
}>();

const selectedItem = computed(() => ({
  title: props.modelValue,
  value: props.modelValue,
}));

const items = computed(() =>
  industries.value.map((el: any) => ({
    title: el.name,
    value: el.name,
  }))
);
</script>
