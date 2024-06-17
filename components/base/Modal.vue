<template>
  <dialog id="my_modal_3" class="modal">
    <div class="modal-box bg-slate-50">
      <form method="dialog">
        <button class="btn btn-md btn-circle btn-ghost absolute left-2 top-2">
          ✕
        </button>
      </form>
      <h3 class="font-bold text-xl">عنوان</h3>
    </div>
  </dialog>
</template>

<script setup lang="ts">
const el = document.querySelector('#my_modal_3')
</script>
