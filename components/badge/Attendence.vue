<template>
  <base-chip color="error" class="flex gap-2">
    <Icon name="mdi:clock" size="1.5rem" />
    <div>{{ attendence == 'full-time' ? 'دوام كامل' : 'دوام جزئي' }}</div>
  </base-chip>
</template>

<script setup lang="ts">
defineProps<{
  attendence: 'part-time' | 'full-time'
}>()
</script>
