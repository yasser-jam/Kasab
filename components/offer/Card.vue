<template>
  <div class="card border">
    <div class="flex justify-between">
        <div>
            <div class="text-3xl font-bold mb-3">اسم العرض</div>
            <div class="text-xl font-semibold text-primary">500ل.س - 4000ل.س</div>
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
          <base-chip class="flex gap-2">
            <Icon name="mdi:pill" size="1.5rem" />
            <div>تأمينات صحية</div>
          </base-chip>
    
          <base-chip color="secondary" class="flex gap-2">
            <Icon name="mdi:train-car" size="1.5rem" />
            <div>مواصلات مؤمنة</div>
          </base-chip>
    
          <base-chip color="error" class="flex gap-2">
            <Icon name="mdi:clock" size="1.5rem" />
            <div>دوام كامل</div>
          </base-chip>
        </div>

        <base-chip color="gray" class="text-gray-500 font-semibold">تاريخ التقديم: 1 / 4 / 2024</base-chip>

    </div>

  </div>
</template>
