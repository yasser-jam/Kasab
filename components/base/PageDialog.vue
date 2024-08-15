<template>
  <dialog id="my_modal_3" class="modal">
    <div
      class="modal-box bg-slate-50 overflow-y-hidden"
      :class="widthClass"
    >
      <div>
        <form method="dialog">
          <button
            class="btn btn-md btn-circle btn-ghost absolute left-2 top-2"
            @click="$router.back()"
          >
            ✕
          </button>
        </form>

        <h3 class="font-bold text-2xl">
          <slot name="title" />
        </h3>

        <div class="mt-6">
          <slot />
        </div>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    width?: number,
    size?: 'big' | 'default'
  }>(),
  {
    width: 8000,
    size: 'default'
  }
)

const widthClass = computed(() => {
  if (props.size == 'big') return 'max-w-[1200px]'
  return 'max-w-[900px]'
})

// open modal by default
onMounted(() => {
  const el = document.querySelector('#my_modal_3') as any

  el?.showModal()
})
</script>
