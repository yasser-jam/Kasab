<template>
  <base-select
    :model-value="modelValue"
    :items
    placeholder="من 10 - 50 موظف"
    @update:model-value="$emit('update:model-value', $event)"
  ></base-select>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string
}>()

const selectedItem = computed(() => ({
  title: props.modelValue,
  value: props.modelValue
}))

const items = ref([
  'أقل من 10 موظفين',
  'من 10 - 50 موظف',
  'من 50 - 100 موظف',
  'أكثر من 100 موظف'
])

// const items = ref<{ title: string, value: string }[]>([
//     {
//         title: ,
//         value: 'أقل من 10 موظفين',
//     },
//     {
//         title: ,
//         value: 'من 10 - 50 موظف',
//     },
//     {
//         title: ,
//         value: 'من 50 - 100 موظف',
//     },
//     {
//         title: ,
//         value: 'أكثر من 100 موظف',
//     },
// ])
</script>
