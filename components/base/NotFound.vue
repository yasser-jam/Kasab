<template>
  <div class="text-center">
    <Icon name="mdi:magnify" size="5rem" class="text-primary text-xs" />

    <div class="text-primary font-semibold">لا يوجد أي {{ name }}<slot /></div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    name?: string
  }>(),
  {
    name: 'عنصر'
  }
)
</script>
