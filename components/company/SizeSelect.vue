<template>
    <base-select :model-value="selectedItem" @update:model-value="$emit('update:model-value', $event)" :items placeholder="من 10 - 50 موظف"></base-select>
</template>

<script setup lang="ts">

const props = defineProps<{
    modelValue: string
}>()

const selectedItem = computed(() => ({
  title: props.modelValue,
  value: props.modelValue,
}));

const items = ref<{ title: string, value: string }[]>([
    {
        title: 'أقل من 10 موظفين',
        value: 'أقل من 10 موظفين',
    },
    {
        title: 'من 10 - 50 موظف',
        value: 'من 10 - 50 موظف',
    },
    {
        title: 'من 50 - 100 موظف',
        value: 'من 50 - 100 موظف',
    },
    {
        title: 'أكثر من 100 موظف',
        value: 'أكثر من 100 موظف',
    },
])

</script>