<template>
  <base-chip class="flex gap-2" :color="data.color">
    <Icon :name="data.icon" size="1.5rem" />
    <div>{{ data.title }}</div>
  </base-chip>
</template>

<script setup lang="ts">
const props = defineProps<{
  gender: 'male' | 'female' | 'unknown' | null
}>()

const data = computed<{
  icon: string
  title: string
  color: 'primary' | 'error' | 'secondary'
}>(() => {
  switch (props.gender) {
    case 'male':
      return {
        icon: 'mdi:gender-male',
        title: 'ذكر',
        color: 'primary'
      }
    case 'female':
      return {
        icon: 'mdi:gender-female',
        title: 'أنثى',
        color: 'error'
      }
    case 'unknown':
      return {
        icon: 'mdi:help',
        title: 'غير محدد',
        color: 'secondary'
      }

    default:
      return {
        icon: 'mdi:help',
        title: 'غير محدد',
        color: 'secondary'
      }
  }
})
</script>
