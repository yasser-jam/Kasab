<template>
  <div class="card bg-white">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <base-label>موقع العمل</base-label>

        <offer-location-select />
      </div>

      <div>
        <base-label>نوع الدوام</base-label>

        <offer-attendence-select />
      </div>

      <div>
        <base-label>المسمى المهني</base-label>

        <system-job-select />
      </div>

      <div>
        <base-label>الحالة</base-label>

        <base-input />
      </div>
    </div>
  </div>
</template>
