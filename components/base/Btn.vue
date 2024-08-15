<template>
  <nuxt-link :to="to ?? undefined">
    <button class="btn" :class="`${color} ${btnClass}`" :type v-bind="$attrs">

      <Icon v-if="loading" name="mdi:loading" class="animate-spin" size="2rem" />
      
      <template v-else>

        <slot />

        <Icon v-if="icon" :name="icon" size="1.25rem" />
      </template>

    </button>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    color: "primary" | "success" | "secondary" | "error" | 'neutral' | "gray";
    icon?: string;
    tonal?: boolean;
    link?: boolean;
    to?: string;
    btnClass?: string
    loading?: boolean
    type?: 'submit' | 'button' | 'reset'
  }>(),
  {
    color: "primary",
    btnClass: 'btn-md'
  }
);

const color = computed(() => {
  switch (props.color) {
    case "primary":
      return "btn-primary";
    case "success":
      return "btn-success";
    case "secondary":
      return "btn-secondary";
    case "error":
      return "btn-error";
    case "neutral":
      return "btn-neutral";
    case "gray":
      return "btn-gray";
  }
});
</script>
