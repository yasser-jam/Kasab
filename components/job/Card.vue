<template>
  <div class="rounded-lg">
    <div class="w-full bg-slate-500 rounded-t-lg">
      <Swiper
        :slides-per-view="1"
        class="bg-gray-100 px-8"
      >
        <SwiperSlide v-for="img in 10" class="">
          <img src="https://placehold.co/1100x400" alt="portfolio" class="rounded-t-lg">
        </SwiperSlide>
      </Swiper>


    </div>

    <div class="card">
      <div class="text-3xl font-semibold">اسم العمل</div>

      <div class="text-base text-gray-500 mt-1">12/2/4002</div>

      <div class="text-gray-500 mt-6">
        نص اختباري لشرح المشروع بالتفصيل الممل نص اختباري لشرح المشروع بالتفصيل
        الممل نص اختباري لشرح المشروع بالتفصيل الممل نص اختباري لشرح المشروع
        بالتفصيل الممل نص اختباري لشرح المشروع بالتفصيل الممل
      </div>

      <div class="flex justify-center gap-4 mt-6">
          <base-btn btn-class="btn-outline" icon="mdi:information-outline" :to="`/employee/${$route.params.employee_id}/portfolio/1`">التفاصيل</base-btn>

          <base-btn btn-class="btn-" icon="mdi:link">رابط المشروع</base-btn>
      </div>
    </div>
  </div>
</template>
