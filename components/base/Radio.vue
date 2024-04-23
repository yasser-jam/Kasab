<template>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text me-4 mb-2">{{ label }}</span>
      <input
        type="radio"
        name="radio-10"
        class="radio radio-primary"
        checked
      />
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>
