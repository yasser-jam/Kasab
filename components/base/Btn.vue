<template>
  <button class="btn btn-md" :class="type == 'default' ? 'btn-primary' : 'btn-gray'"><slot /></button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type: "default" | "cancel";
  }>(),
  {
    type: "default",
  }
);
</script>
