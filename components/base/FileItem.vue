<template>
  <div
    class="flex justify-between items-center bg-slate-50 rounded-lg p-3 my-4"
  >
    <div class="flex items-center gap-4">
      <div class="bg-slate-200 rounded-full p-3">
        <Icon name="mdi:file" size="1.5rem" class="text-primary" />
      </div>

      <div class="text-primary text-lg font-semibold">اسم الفايل</div>
    </div>

    <base-btn
      icon="mdi:download"
      color="primary"
      btn-class="btn btn-link"
    ></base-btn>
  </div>
</template>
