<template>
    <input v-model="model" type="range" min="0" max="100" value="25" class="range range-xs range-primary" step="25" />
    <div class="w-full flex justify-between text-primary text-sm font-bold px-2">
      <span>50000k</span>
      <span>10000k</span>
      <span>1000k</span>
      <span>100k</span>
      <span>10k</span>
    </div>
</template>

<script setup lang="ts">

const model = defineModel()
</script>