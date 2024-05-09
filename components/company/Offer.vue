<template>
  <div class="p-4 border-2 border-primary rounded-lg bg-white">
    <div class="flex justify-between mb-4">
      <div class="text-3xl font-semibold">العرض الأول</div>

      <base-chip color="success">قيد الانتظار</base-chip>
    </div>

    <div class="text-gray-500 mb-4">
      تفاصيل العرض الطويلة والطويلة جداُ تفاصيل العرض الطويلة والطويلة جداُ
      تفاصيل العرض الطويلة والطويلة جداُ
    </div>

    <div class="text-lg text-gray-500 font-semibold">
      
      <div class="flex items-center gap-2 mb-2">
        <Icon name="mdi:cash" />
        <div>5000$/شهر</div>
      </div>

      <div class="flex items-center gap-2">
        <Icon name="mdi:clock" />
        <div>دوام جزئي</div>
      </div>
    </div>

    <div class="flex justify-end gap-2">
      <base-btn color="error" icon="mdi:delete" />
      <base-btn icon="mdi:information" />
    </div>
  </div>
</template>
