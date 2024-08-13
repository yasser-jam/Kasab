<template>
  <button class="btn hidden" id="handler" onclick="my_modal.showModal()">
    open modal
  </button>
  <dialog id="my_modal" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold"><slot name="title" /></h3>

      <div class="py-4">
        <slot name="body" />
      </div>

      <div class="modal-action flex gap-2">
        <base-btn color="gray" @click="$emit('close')">إغلاق</base-btn>
        <base-btn :loading @click="$emit('save')">حفظ</base-btn>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  open: boolean
  loading?: boolean
}>()

onMounted(() => {
  const button = document?.querySelector('#handler')

  // @ts-ignore
  // button.click()
})

watch(
  () => props.open,
  () => {
    const modal = document?.querySelector('#my_modal')

    // @ts-ignore
    props.open ? modal.showModal() : modal.close()
  }
)
</script>
