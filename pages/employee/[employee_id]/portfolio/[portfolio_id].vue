<!-- <template>
  <base-page-dialog size="big">
    <template #title>
      <div class="">
        <div class="text-4xl">العرض الأول</div>

        <div class="text-xl text-gray-400 font-medium self-end mt-4">تاريخ المشروع: 1/1/2002</div>
      </div>
    </template>

    <template #default>
      <div>
        <div>
          <div class="h-[150px]">
            <img
              src="./../../../../public/test.png"
              alt="test"
              class="rounded-lg h-full block object-cover mx-auto"
            />
          </div>

          <Swiper
            :slides-per-view="7"
            space-between="10"
            :loop="false"
            class="px-8"
          >
            <SwiperSlide class="mt-4">
              <div class="relative">
                <img
                  src="./../../../../public/test.png"
                  alt="gallery-image"
                  class="object-contain h-full w-full relative block"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide class="mt-4">
              <div class="relative">
                <img
                  src="./../../../../public/test.png"
                  alt="gallery-image"
                  class="object-contain h-full w-full relative block"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide v-for="i of 10" class="mt-4">
              <div class="relative">
                <img
                  src="./../../../../public/test.png"
                  alt="gallery-image"
                  class="object-contain h-full w-full relative block"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div class="mt-8">
            <div class="text-2xl font-semibold my-2">وصف المشروع</div>
            <div class="bg-slate-100 text-lg text-gray-500 rounded-lg p-4">
              وصف طبيعة العمل وصف طبيعة العمل وصف طبيعة العمل وصف طبيعة العمل وصف
              طبيعة العمل وصف طبيعة العمل وصف طبيعة العمل
            </div>
        </div>

        <div class="mt-8">
            <div class="text-2xl font-semibold my-2">المهارات المستخدمة</div>

            <div class="flex bg-slate-100 gap-4 rounded-lg p-4">

                <base-chip color="secondary">HTML</base-chip>
                <base-chip color="secondary">HTML</base-chip>
                <base-chip color="secondary">HTML</base-chip>
                <base-chip color="secondary">HTML</base-chip>
                <base-chip color="secondary">HTML</base-chip>

            </div>

        </div>
      </div>
    </template>

    <template #actions>
      <div class="flex justify-end gap-2 py-12">
        <base-btn icon="mdi:check">التقدم للوظيفة</base-btn>
      </div>
    </template>

  </base-page-dialog>
</template> -->

<template>
  <div class="container">
    <layout-breadcrumb class="my-8"></layout-breadcrumb>

    <base-title class="mb-12"> اسم المشروع </base-title>

    <div class="grid grid-cols-4 gap-8">
      <div class="col-span-3">
        <div class="card">
          <base-card-title>معلومات المشروع</base-card-title>

          <div class="text-slate-700 text-base leading-loose mt-4">
            معلومات كثيرة تصف المشروع وتشرحه معلومات كثيرة تصف المشروع وتشرحه
            معلومات كثيرة تصف المشروع وتشرحه معلومات كثيرة تصف المشروع وتشرحه
            معلومات كثيرة تصف المشروع وتشرحه
          </div>
        </div>

        <div class="card mt-8">
          <base-card-title class="mb-4">صور المشروع</base-card-title>

          <div class="h-[150px]">
            <img
              src="./../../../../public/test.png"
              alt="test"
              class="rounded-lg h-full block object-cover mx-auto"
            />
          </div>

          <div>
            <Swiper
              :slides-per-view="7"
              space-between="10"
              :loop="false"
              class="px-8"
            >
              <SwiperSlide v-for="i of 10" class="mt-4">
                <div class="relative">
                  <img
                    src="./../../../../public/test.png"
                    alt="gallery-image"
                    class="object-contain h-full w-full relative block"
                  />
                </div>
              </SwiperSlide>
  
              <SwiperSlide class="mt-4">
                <div class="relative">
                  <img
                    src="./../../../../public/test.png"
                    alt="gallery-image"
                    class="object-contain h-full w-full relative block"
                  />
                </div>
              </SwiperSlide>
  
              <SwiperSlide class="mt-4">
                <div class="relative">
                  <img
                    src="./../../../../public/test.png"
                    alt="gallery-image"
                    class="object-contain h-full w-full relative block"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div class="card mt-8">
          <base-card-title class="mb-4">ملفات المشروع</base-card-title>

          <div class="max-h-[400px] overflow-auto">
              <!-- <base-file-item></base-file-item>
              <base-file-item></base-file-item>
              <base-file-item></base-file-item>
              <base-file-item></base-file-item> -->
          </div>
        </div>
      </div>

      <div>
        <div class="card">
          <base-card-title class="mb-8">بطاقة المشروع</base-card-title>

            <div class="flex gap-2 items-center mb-4">
              <div>عدد المشاهدات</div>
              <base-chip color="secondary">50 مشاهدة</base-chip>
          </div>

          <div class="flex gap-2 items-center mb-4">
              <div>عدد الإعجابات</div>
              <base-chip color="success">5 إعجاب</base-chip>
          </div>

          <div class="flex gap-2 items-center mb-4">
              <div>تاريخ الإضافة</div>
              <base-chip color="primary">1/2/2015</base-chip>
          </div>

          <div class="flex gap-2 items-center mb-4">
              <div>تاريخ الإنجاز</div>
              <base-chip color="gray">1/6/2008</base-chip>
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
          <base-card-title class="mb-8">رابط المشروع</base-card-title>

          <div class="flex justify-between bg-slate-100 rounded-lg p-4">
            <div>https://google.com</div>

            <base-btn icon="mdi:link" btn-class="btn-link btn-xs btn-primary"></base-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
