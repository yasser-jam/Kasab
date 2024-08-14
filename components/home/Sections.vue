<template>
  <div class="flex flex-col items-center justify-center bg-white my-0 pt-24 pb-12">
    <div>
      <div class="text-primary text-5xl font-semibold text-center">
        أقسام الموقع
      </div>

      <div class="flex items-center gap-24 mt-20">
        <div class="flex flex-col items-center justify-center gap-6">
          <div class="avatar">
            <div class="bg-primary text-white p-6 rounded-full">
              <Icon name="mdi:domain" size="4rem" />
            </div>
          </div>

          <div class="text-primary font-semibold text-3xl">قسم الشركات</div>

          <div class="text-slate-500 text-center text-lg">
            يحوي قسم الشركات على العروض المقدمة من قبل الشركات والراغبين بالتقدم
            عليها من الموظفين
          </div>
        </div>

        <div class="flex flex-col items-center justify-center gap-6">
          <div class="avatar">
            <div class="bg-primary text-white p-6 rounded-full">
              <Icon name="mdi:account-tie" size="4rem" />
            </div>
          </div>

          <div class="text-primary font-semibold text-3xl">قسم العمل الحر</div>

          <div class="text-slate-500 text-center text-lg">
            يضم قسم العمل الحر جميع العروض المقدمة من قبل عملاء خارجيين
            والمتقدمين عليها من المستقلين الراغبين بالعمل الحر
          </div>
        </div>

        <div class="flex flex-col items-center justify-center gap-6">
          <div class="avatar">
            <div class="bg-primary text-white p-6 rounded-full">
              <Icon name="mdi:file" size="4rem" />
            </div>
          </div>

          <div class="text-primary font-semibold text-3xl">
            قسم المنتجات الجاهزة
          </div>

          <div class="text-slate-500 text-center text-lg">
            يضم قسم المنتجات الجاهزة للبيع والاستخدام الفوري من مقالات وتصاميم
            وتمبلت وغيرها...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
