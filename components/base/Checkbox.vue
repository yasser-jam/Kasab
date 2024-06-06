<template>
  <div class="form-control">

    <label class="label flex items-center gap-2 cursor-pointer">
      <span class="label-text text-base">
        <slot name="label">
          {{ label }}
        </slot>
      </span>

      <input
        v-model="model"
        type="checkbox"
        class="checkbox checkbox-primary"
      />
    </label>
  </div>
</template>

<script setup lang="ts">

const model = defineModel()

defineProps<{
  label?: string
}>()
</script>
