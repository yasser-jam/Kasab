<template>
  <div class="card shadow-md rounded-lg">
    <div class="flex justify-between">
        <div>
          <nuxt-link to="/offers/1">
            <div class="text-2xl font-bold mb-3">اسم العرض</div>
          </nuxt-link>
            <div class="text-lg font-semibold text-primary">500ل.س - 4000ل.س</div>
        </div>

        <base-chip color="success">مفعل</base-chip>
    </div>

    <div class="mt-4">
      <div class="text-lg text-gray-500">
        وصف العرض وصف العرض وصف العرض وصف العرض وصف العرض وصف العرض وصف العرض
        وصف العرض
      </div>
    </div>

    <div class="flex justify-between items-center mt-8">
        <div class="flex items-center gap-4">
          <badge-health></badge-health>
    
          <badge-transportation></badge-transportation>
    
          <badge-attendence></badge-attendence>
        </div>

        <base-chip color="gray" class=" text-gray-500 font-semibold">تاريخ التقديم: 1 / 4 / 2024</base-chip>

    </div>

  </div>
</template>
