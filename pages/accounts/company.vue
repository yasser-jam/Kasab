<template>
    <div class="container">
  
      <div class="flex justify-between my-8">
  
        <layout-breadcrumb></layout-breadcrumb>
  
        <div class="flex gap-2">
          <base-btn type="cancel" color="gray">إلغاء</base-btn>
          <base-btn>حفظ</base-btn>
        </div>
      </div>
  
      
      <div class="grid grid-cols-3 gap-8">
        <div class="col-span-2">
          <!-- <div class="card bg-white p-4">
            <div class="text-xl text-slate-800 font-semibold mb-8">
              معلومات المستخدم
            </div>
  
            <div class="flex items-center gap-12 w-full">
              <div class="rounded-full bg-[#E2E8F0] w-[150px] h-[150px]"></div>
  
              <div class="grid grid-cols-2 gap-4 grow">
                <div>
                  <base-label>الاسم الأول</base-label>
  
                  <base-input></base-input>
                </div>
  
                <div>
                  <base-label>الاسم الأخير</base-label>
  
                  <base-input></base-input>
                </div>
  
                <div class="col-span-2">
                  <base-label>البريد الإلكتروني</base-label>
  
                  <base-input></base-input>
                </div>
  
                <div>
                  <base-label>رقم الهاتف</base-label>
  
                  <base-input></base-input>
                </div>
  
                <div>
                  <base-label>النوع</base-label>
  
                  <div class="flex">
                    <base-radio label="ذكر"></base-radio>
  
                    <base-radio label="أنثى" class="ms-12"></base-radio>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
  
          <div class="card bg-white p-4">
            <div class="text-xl text-slate-800 font-semibold mb-8">
              معلومات الشركة
            </div>
  
            <div class="grid grid-cols-2 gap-4 grow">
              <div class="col-span-2">
                <base-label>اسم الشركة</base-label>
  
                <base-input></base-input>
              </div>
  
              <div>
                <base-label>المدينة</base-label>
  
                <base-input></base-input>
              </div>
  
              <div>
                <base-label>المنطقة</base-label>

                <system-city-select v-model="city"></system-city-select>
              </div>
  
              <div class="col-span-2">
                <base-label>عنوان الشركة</base-label>
  
                <base-input></base-input>
              </div>
  
              <div class="col-span-2">
                <base-label>تفاصيل الشركة</base-label>
  
                <base-input></base-input>
              </div>
            </div>
          </div>
        </div>
  
        <div>
          <div class="card bg-white h-fit p-4">
            <div class="text-xl text-slate-800 font-semibold mb-8">
              معلومات إضافية
            </div>
  
            <div class="grid gap-8">
              <div>
                <base-label>نوع الشركة</base-label>
                <base-input></base-input>
              </div>
  
              <div>
                <base-label>حجم الشركة</base-label>
                <base-input></base-input>
              </div>
            </div>
          </div>
  
          <div class="card bg-white p-4 mt-8">
            <div class="text-xl text-slate-800 font-semibold mb-8">
              معلومات التواصل
            </div>
  
            <div class="grid gap-4 grow">
              <div>
                <base-label>بريد الشركة الإلكتروني</base-label>
  
                <base-input></base-input>
              </div>
  
              <div>
                <base-label>أرقام التواصل</base-label>
  
                <base-input></base-input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
const city = ref({
  title: 'حلب',
  value: 'Aleppo'
})
</script>