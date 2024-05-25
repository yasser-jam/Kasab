<template>
  <div class="form-control">

    <label class="label flex items-center gap-2 cursor-pointer">
      <span class="label-text text-base">{{ label }}</span>

      <input
        type="checkbox"
        checked="checked"
        class="checkbox checkbox-primary"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>
