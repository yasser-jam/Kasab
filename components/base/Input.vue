<template>
  <input
    v-model="model"
    type="text"
    class="input input-primary relative w-full max-w-none bg-slate-200 border-0 ring-0 focus:border-0 focus:ring-0 focus:outline-0"
    v-bind="$attrs"
    :class="{ 'input-disabled': disabled }"
    :disabled="fixed"
  />

  <transition>
    <div v-if="errors" class="text-sm text-error">{{ errors }}</div>
  </transition>
</template>

<script setup lang="ts">
const model = defineModel()

defineProps<{
  fixed?: boolean
  disabled?: boolean
  errors?: string
}>()
</script>

<style scoped>
.input.fixed::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: red;
}
</style>
