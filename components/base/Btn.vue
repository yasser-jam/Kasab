<template>
  <button
    class="btn btn-md"
    :class="color"
  >
  <Icon v-if="icon" :name="icon" size="1.25rem" />
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
const  props = withDefaults(
  defineProps<{
    color: 'primary' | 'success' | 'secondary' | 'error' | 'gray'
    icon?: string
  }>(),
  {
    color: 'primary',
  }
);

const color = computed(() => {
  switch (props.color) {
    case 'primary': return 'btn-primary';
    case 'success': return 'btn-success';
    case 'secondary': return 'btn-secondary';
    case 'error': return 'btn-error';
    case 'gray': return 'btn-gray';
  }
})
</script>
