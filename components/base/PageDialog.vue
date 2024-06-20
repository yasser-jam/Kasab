<template>
  <dialog id="my_modal_3" class="modal">
    <div class="modal-box bg-slate-50 max-w-[900px] overflow-y-hidden">
      
      <div>
        <form method="dialog">
          <button class="btn btn-md btn-circle btn-ghost absolute left-2 top-2" @click="$router.back()">
            ✕
          </button>
        </form>
        
        <h3 class="font-bold text-2xl">
          <slot name="title" />
        </h3>


        <div class="mt-6 max-h-[500px] overflow-auto">
          <slot />
        </div>

        <div class="mt-4">

          <slot name="actions" />
        </div>
      </div>
    </div>

  </dialog>
</template>

<script setup lang="ts">
// open modal by default
onMounted(() => {
  const el = document.querySelector('#my_modal_3') as any

  el?.showModal()
})

</script>
