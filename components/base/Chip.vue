<template>
  <div class="badge badge-lg py-4 px-4 rounded-3xl" :class="color">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    color: "primary" | "success" | "secondary" | "error" | "gray" | "warning";
  }>(),
  {
    color: "primary",
  }
);

const color = computed(() => {
  switch (props.color) {
    case "primary":
      return "badge-primary";
    case "success":
      return "badge-success";
    case "secondary":
      return "badge-secondary";
    case "error":
      return "badge-error";
    case "gray":
      return "badge-gray";
      case "warning":
      return "badge-warning";
  }
});
</script>
