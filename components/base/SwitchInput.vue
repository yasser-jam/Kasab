<template>
  <div
    class="flex items-center justify-between border-2 border-dashed rounded-lg p-3 mt-2"
    :class="`${colorsClasses.bg} ${colorsClasses.border}`"
  >
    <div class="flex flex-col gap-2">
      <div class="text-lg font-semibold" :class="colorsClasses.text">
        <slot name="title" />
        {{ title }}
      </div>

      <div v-if="!mini" class="text-sm text-gray-500">
        <slot name="subtitle" />
        {{ subtitle }}
      </div>
    </div>

    <input
      v-model="model"
      type="checkbox"
      class="toggle"
      :class="colorsClasses.toggle"
      :checked="modelValue"
    />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: boolean
    title?: string
    subtitle?: string
    mini?: boolean
    color?: 'primary' | 'success' | 'warning' | 'info'
  }>(),
  {
    color: 'primary'
  }
)

const model = defineModel()

const colorsClasses = computed(() => {
  switch (props.color) {
    case 'primary':
      return {
        bg: 'bg-slate-50',
        border: 'border-primary-200',
        text: 'text-primary',
        toggle: 'toggle-primary'
      }

    case 'success':
      return {
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        text: 'text-success',
        toggle: 'toggle-success'
      }

    case 'warning':
      return {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-warning',
        toggle: 'toggle-warning'
      }

    case 'info':
      return {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-info',
        toggle: 'toggle-info'
      }
  }
})
</script>
