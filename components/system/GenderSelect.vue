<template>
  <base-select :items="options" map-options placeholder="ذكر" v-bind="$attrs"></base-select>
</template>

<script setup lang="ts">
const props = defineProps<{
  full?: boolean
}>()

const genders = ref<{ title: string; value: string }[]>([
  {
    title: 'ذكر',
    value: 'male'
  },
  {
    title: 'أنثى',
    value: 'female'
  }
])

const fullGenders = ref<{ title: string; value?: string }[]>([
  {
    title: 'ذكر',
    value: 'male'
  },
  {
    title: 'أنثى',
    value: 'female'
  },
  {
    title: 'غير محدد',
    value: undefined
  }
])

const options = computed(() => (props.full ? fullGenders.value : genders.value))
</script>
