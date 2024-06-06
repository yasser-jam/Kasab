<template>
  <div class="flex gap-2 items-center">
    <div class="text-lg font-semibold">{{ type.name }}</div>
    <span class="text-gray-400">({{ type.count }} عرض)</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
    type: {
        name: string
        count: number
    }
}>()
</script>
