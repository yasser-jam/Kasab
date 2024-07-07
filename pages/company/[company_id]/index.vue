<template>
  <div v-if="pending">loading...</div>

  <div v-else class="container">
    <div class="flex justify-between my-8">
      <layout-breadcrumb></layout-breadcrumb>

      <div class="flex gap-2">
        <base-btn icon="mdi:pencil" to="/accounts/company/general-info"
          >تعديل البيانات</base-btn
        >

        <base-btn icon="mdi:eye" color="secondary" to="/company/1/offers"
          >مشاهدة العروض</base-btn
        >
      </div>
    </div>

    <div class="grid grid-cols-12 gap-8 my-8">
      <div class="col-span-9">
        <div
          class="grid grid-cols-12 items-center h-44 p-4 rounded-lg profile-bg bg-no-repeat bg-center"
          :style="`background-image: url(${company.background_image_url})`"
        >
          <div class="col-span-2">
            <img
              :src="company.profile_image_url"
              alt="profile-image"
              class="w-32 h-32 rounded-full"
            />
          </div>

          <div class="col-span-10 ms-8">
            <div class="flex justify-between">
              <div class="text-3xl font-bold text-white mb-2">
                {{ company.name }}
              </div>

              <base-chip color="gray"
                >شركة {{ company.industry_name }}</base-chip
              >
            </div>
            <div
              class="flex items-center gap-4 text-base font-bold text-white mt-2"
            >
              <div class="flex items-center mt-1">
                <Icon
                  name="mdi:map-marker"
                  size="1.5rem"
                  class="text-mt me-2"
                />
                <div class="tracking-wider">{{ company.region }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 card rounded-lg mt-8 p-4">
          <div class="text-xl font-semibold mb-8">وصف الشركة</div>

          <div class="text-lg bg-slate-50 font-semibold p-4">
            {{ company.description }}
          </div>
        </div>

        <div class="card mt-8">
          <div class="text-xl font-semibold mb-8">العنوان التفصيلي</div>

          <div class="text-lg bg-slate-50 font-semibold p-4">
            {{ company.street_address }}
          </div>
        </div>

        <div class="card mt-8">
          <div class="text-xl font-semibold mb-8">معرض الصور</div>

          <!-- <company-gallery-slider></company-gallery-slider> -->
        </div>
      </div>

      <div class="col-span-3">
        <div class="card">
          <div class="text-xl font-semibold mb-8">معلومات إضافية</div>
          <div class="flex items-center justify-between">
            <base-label>عدد الموظفين</base-label>
            <base-chip>{{ company.size }}</base-chip>
          </div>

          <div class="flex items-center justify-between mt-8">
            <base-label>عدد العروض الكلي</base-label>
            <base-chip>غير محدد</base-chip>
          </div>

          <div class="flex items-center justify-between mt-8">
            <base-label>عدد العروض المكتملة</base-label>
            <base-chip>غير محدد</base-chip>
          </div>

          <div class="flex items-center justify-between mt-8">
            <base-label>عدد العروض المتاحة</base-label>
            <base-chip>غير محدد</base-chip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const companyStore = useCompanyStore()

const { company } = storeToRefs(companyStore)

const route = useRoute()

const companyId = Number(route.params.company_id)

const { pending } = useLazyAsyncData(() => companyStore.get(companyId))
</script>

<style scoped>
.profile-bg {
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: color;
}
</style>
