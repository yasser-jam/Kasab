<template>
  <div class="container">
    <layout-breadcrumb class="my-8"></layout-breadcrumb>

    <base-title class="mb-12"> اسم العمل </base-title>

    <div class="grid grid-cols-4 gap-8">
      <div class="col-span-3">
        <div class="card">
          <base-card-title>وصف المشرووع</base-card-title>

          <div class="text-slate-700 text-base leading-loose mt-4">
            معلومات كثيرة تصف المشروع وتشرحه معلومات كثيرة تصف المشروع وتشرحه
            معلومات كثيرة تصف المشروع وتشرحه معلومات كثيرة تصف المشروع وتشرحه
            معلومات كثيرة تصف المشروع وتشرحه
          </div>
        </div>

        <div class="card mt-8">
          <base-card-title class="mb-4">ملفات المشروع</base-card-title>

          <div class="max-h-[400px] overflow-auto">
            <base-file-item></base-file-item>
            <base-file-item></base-file-item>
          </div>
        </div>

        <div class="card mt-8">
          <base-card-title class="mb-4">أضف عرضك الآن</base-card-title>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <base-label>العرض المقدم</base-label>
              <base-input placeholder="العرض المقدم (ل.س)"></base-input>
            </div>

            <div>
              <base-label>الوقت المتوقع</base-label>
              <base-input
                type="number"
                placeholder="عدد الأيام المتوقع"
              ></base-input>
            </div>

            <div class="col-span-2">
              <base-label>وصف العرض</base-label>
              <base-textarea placeholder="وصف العرض"></base-textarea>
            </div>
          </div>
        </div>

        <div class="card my-8">
          <base-card-title class="flex items-center gap-2 mb-12">
            <div>العروض المقدمة</div>
            <span class="text-gray-500 text-sm font-semibold">(65 عرض)</span>
          </base-card-title>

          <div class="flex flex-col max-h-[500px] overflow-auto">
            <div v-for="i of 10">
              <project-offer-card class="border-solid"></project-offer-card>

              <div class="divider !my-1"></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="card">
          <base-card-title class="mb-8">بطاقة المشروع</base-card-title>

          <div class="flex gap-4 items-center mb-6">
            <div>مدة التنفيذ</div>
            <base-chip color="secondary">20 يوم</base-chip>
          </div>

          <div class="flex gap-4 items-center mb-6">
            <div>الميزانية</div>

            <div class="flex items-center font-semibold gap-2">
              <!-- <span></span> -->
              <base-chip color="success">400 ل.س</base-chip>

              <Icon name="mdi:arrow-left" />

              <base-chip color="success">600 ل.س</base-chip>
              <!-- <span>800$</span> -->
            </div>
          </div>


          <div class="flex gap-4 items-center mb-6">
            <div>متوسط العروض</div>
            <base-chip color="gray">200 ل.س</base-chip>
          </div>

          <div class="flex gap-4 items-center mb-6">
            <div>تاريخ الإضافة</div>
            <base-chip color="primary">1/2/2015</base-chip>
          </div>

          
        </div>

        <div class="card mt-8">
          <base-card-title class="mb-8">المهارات المستخدمة</base-card-title>

          <div class="flex gap-4 flex-wrap">
            <base-chip color="secondary">HTML</base-chip>
            <base-chip color="secondary">HTML</base-chip>
            <base-chip color="secondary">HTML</base-chip>
            <base-chip color="secondary">HTML</base-chip>
            <base-chip color="secondary">HTML</base-chip>
          </div>
        </div>

        <div class="card mt-8">
          <base-card-title class="mb-8">مراحل المشروع</base-card-title>

          <project-steps-card></project-steps-card>
        </div>

        <div class="card mt-8">
          <base-card-title class="mb-8">صاحب المشروع</base-card-title>

          <project-owner-card></project-owner-card>
        </div>

        <div class="card mt-8">
          <base-card-title class="mb-8">رابط المشروع</base-card-title>

          <div class="flex justify-between bg-slate-100 rounded-lg p-4">
            <div>https://google.com</div>

            <base-btn
              icon="mdi:link"
              btn-class="btn-link btn-xs btn-primary"
            ></base-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
