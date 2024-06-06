<template>
  <input v-model="model" type="range" min="0" max="100" value="25" class="range text-primary" step="25" />
  <div class="w-full flex justify-between text-xs px-2">
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
  </div>
</template>

<script setup lang="ts">

const model = defineModel()
</script>