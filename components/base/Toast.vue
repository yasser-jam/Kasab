<template>
  <transition>
    <div v-if="show" class="toast toast-bottom toast-start w-[400px]">
      <div
        class="alert"
        :class="toasterType == 'success' ? 'alert-success' : 'alert-error'"
      >
        <span>{{ message }}</span>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const toasterStore = useToasterStore()

const { toasterType, message } = storeToRefs(toasterStore)

const show = ref(true)

onMounted(() => {
  setTimeout(() => {
    show.value = false
  }, 2000)
})
</script>
