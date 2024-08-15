<template>
  <textarea
    v-model="model"
    class="textarea textarea-primary relative w-full max-w-none text-base bg-slate-200 border-0 ring-0 focus:border-0 focus:ring-0 focus:outline-0"
    rows="5"
    v-bind="$attrs"
    :disabled="fixed"
  ></textarea>

  <transition>
    <div v-if="errors" class="text-sm text-error">{{ errors }}</div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{
  fixed?: boolean;
  errors?: string
}>();

const model = defineModel()
</script>

<style scoped>
.input.fixed::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: red;
}
</style>
