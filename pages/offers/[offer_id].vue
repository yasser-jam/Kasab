<template>
  <base-page-dialog>
    <template #title> 
        <div class="flex gap-2">
            <div>
                العرض الأول
            </div>
        
            <span class="text-sm text-gray-500 self-end">(45 متقدم)</span>
        </div>
    </template>

    <template #default>
      <div class="grid grid-cols-1 gap-4">
        <div>
          <div class="text-lg text-gray-500">
            وصف العرض وصف طويل ويوضح طبيعة العرضوصف العرض وصف طويل ويوضح طبيعة
            العرضوصف العرض وصف طويل ويوضح طبيعة العرضوصف العرض وصف طويل ويوضح
            طبيعة العرض
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6 bg-slate-100 rounded-lg p-4">
            <div class="flex gap-2 items-center">
                <base-label class="w-32">نوع العرض</base-label>
                <base-chip>برمجي</base-chip>
            </div>
            
            <div class="flex gap-2 items-center">
                <base-label class="w-32">المسمى الوظيفي</base-label>
                <base-chip>مهندس برمجيات</base-chip>
            </div>

            <div class="flex gap-2 items-center">
                <base-label class="w-32">الراتب</base-label>
                
                <div class="flex items-center gap-2 text-success">
                    <base-chip color="success">10k</base-chip>

                    <Icon name="mdi:arrow-left" size="1.5rem" />

                    <base-chip color="success">100k</base-chip>
                </div>
            </div>

            <div class="flex gap-2 items-center">
                <base-label class="w-32">النوع</base-label>
                <badge-gender class="!badge-success"></badge-gender>
            </div>

            <div class="flex gap-2 items-center">
                <base-label class="w-32">العمر</base-label>
                
                <div class="flex items-center gap-2 text-success">
                    <base-chip color="success">18 سنة</base-chip>

                    <Icon name="mdi:arrow-left" size="1.5rem" />

                    <base-chip color="success">45 سنة</base-chip>
                </div>
            </div>

            <div class="flex gap-2 items-center">
                <base-label class="w-32">طبيعة الدوام</base-label>
                <badge-attendence class="!badge-success"></badge-attendence>
            </div>

            <div class="flex gap-2 items-center">
                <base-label class="w-32">المواصلات</base-label>
                <badge-transportation></badge-transportation>
            </div>

            <div class="flex gap-2 items-center">
                <base-label class="w-32">التأمينات الصحية</base-label>
                <badge-health class="badge-secondary"></badge-health>
            </div>

            <div class="flex gap-2 items-center">
                <base-label class="w-32">مكان العمل</base-label>
                <badge-location class="badge-secondary"></badge-location>
            </div>

            <div class="flex gap-2 items-center">
                <base-label class="w-32">الخدمة العسكرية</base-label>
                <badge-military class="badge-secondary"></badge-military>
            </div>


        </div>

        <company-info-card></company-info-card>

      </div>
    </template>

    <template #actions>
        <div class="flex justify-end gap-2">
            <base-btn icon="mdi:check">التقدم للوظيفة</base-btn>
        </div>
    </template>

    <!-- company card -->
  </base-page-dialog>
</template>
