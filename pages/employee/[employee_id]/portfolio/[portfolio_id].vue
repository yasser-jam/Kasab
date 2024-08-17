<template>
  <base-loader v-if="pending"></base-loader>
  <div v-else class="container">
    <layout-breadcrumb :meta class="my-8"></layout-breadcrumb>

    <base-title class="mb-12"> {{ portfolio.title }} </base-title>

    <div class="grid grid-cols-4 gap-8">
      <div class="col-span-3">
        <div class="card">
          <base-card-title>معلومات المشروع</base-card-title>

          <div class="text-slate-700 text-base leading-loose mt-4">
            {{ portfolio.description }}
          </div>
        </div>

        <div v-if="portfolio.images?.length" class="card mt-8">
          <base-card-title class="mb-4">صور المشروع</base-card-title>
          
          <div>
            <client-only>
              <Swiper
                :slides-per-view="3"
                space-between="10"
                :loop="false"
                class="px-8"
              >
                <SwiperSlide v-for="img in portfolio.images" class="mt-4">
                  <div class="relative">
                    <img
                      :src="img.url"
                      alt="gallery-image"
                      class="object-contain h-full w-full relative block"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </client-only>
          </div>
        </div>

        <div v-if="portfolio.files?.length" class="card mt-8">
          <base-card-title class="mb-4">ملفات المشروع</base-card-title>

          <div class="max-h-[400px] overflow-auto">
              <base-file-item v-for="file in portfolio.files" :file :downloadable="false"></base-file-item>
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
              <base-chip color="primary">{{ dayjs(portfolio.created_at).format('DD-MM-YYYY') }}</base-chip>
          </div>

          <div class="flex gap-2 items-center mb-4">
                <div>تاريخ الإنجاز</div>
              <base-chip color="gray">{{ dayjs(portfolio.date).format('DD-MM-YYYY') }}</base-chip>
          </div>
        </div>

        <div class="card mt-8">
          <base-card-title class="mb-8">المهارات المستخدمة</base-card-title>

          <div class="flex gap-4 flex-wrap">
            <base-chip v-for="skill in portfolio.skills" color="secondary">{{ skill.name }}</base-chip>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import dayjs from 'dayjs';

const portfolioStore = usePortfolioStore()

const route = useRoute()

const portfolioId = route.params.portfolio_id

const { portfolio } = storeToRefs(portfolioStore)

const { pending } = useLazyAsyncData(() => portfolioStore.get(Number(portfolioId)))

const meta = ref([
  {
    title: 'معلومات العمل',
    link: `/employee/${route.params.employee_id}/portfolio/${portfolioId}`,
    active: true
  }
])

</script>