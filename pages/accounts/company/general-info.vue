<template>
  <div class="container mb-96">
    <div class="flex justify-between my-8">
      <layout-breadcrumb></layout-breadcrumb>

      <div class="flex gap-2">
        <base-btn type="cancel" color="gray" @click="$router.push('/accounts')"
          >إلغاء</base-btn
        >
        <base-btn @click="save" :loading>حفظ</base-btn>
      </div>
    </div>

    <div class="flex justify-between items-center mb-8">
      <base-title>معلومات الشركة</base-title>
      <base-btn color="neutral" icon="mdi:tag" to="/accounts/company/offers"
        >عروضي</base-btn
      >
    </div>

    <div class="grid grid-cols-3 gap-8">
      <div class="col-span-2">
        <div class="card grid grid-cols-2 gap-4 bg-white p-4 grow">
          <div class="col-span-2 grid grid-cols-4">
            <div class="col-span-1">
              <base-image-uploader
                v-model="company.background_image_url"
                class="mt-1 w-fit"
              ></base-image-uploader>
            </div>

            <div class="col-span-3 grid grid-cols-2 gap-4">
              <div class="col-span-2">
                <base-label>اسم الشركة</base-label>

                <base-input
                  v-model="company.name"
                  placeholder="شركة المصممين"
                ></base-input>
              </div>

              <div>
                <base-label>المدينة</base-label>

                <system-city-select v-model="company.city"></system-city-select>
              </div>

              <div>
                <base-label>المنطقة</base-label>

                <base-input
                  v-model="company.region"
                  placeholder="الميدان"
                ></base-input>
              </div>
            </div>
          </div>

          <div class="col-span-2">
            <base-label>عنوان الشركة</base-label>

            <base-input
              v-model="company.street_address"
              placeholder="حي الزاهرة"
            ></base-input>
          </div>

          <div class="col-span-2">
            <base-label>تفاصيل الشركة</base-label>

            <base-textarea
              v-model="company.description"
              placeholder="شركة مهتمة بالتعاقد مع المصممين"
            ></base-textarea>
          </div>
        </div>

        <div class="card bg-white p-4 mt-8">
          <base-label class="mb-4">معرض الصور</base-label>

          <company-gallery-slider
            v-model="company.gallery_images"
          ></company-gallery-slider>
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

              <company-category-select
                v-model="company.industry_name"
              ></company-category-select>
            </div>

            <div>
              <base-label>حجم الشركة</base-label>
              <company-size-select v-model="company.size"></company-size-select>
            </div>
          </div>
        </div>

        <div class="card bg-white p-4 mt-8">
          <div class="text-xl text-slate-800 font-semibold mb-8">
            معلومات التواصل
          </div>

          <div class="grid gap-4 grow">
            <div>
              <base-label>روابط التواصل</base-label>

              <company-contact-input
                v-model="company.contact_links"
              ></company-contact-input>
            </div>

            <div>
              <base-label>أرقام التواصل</base-label>

              <company-phone-input
                v-model="company.company_phones"
              ></company-phone-input>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <NuxtPage />
</template>
<script setup lang="ts">
const companyStore = useCompanyStore()

const { company } = storeToRefs(companyStore)

const loading = ref<boolean>(false)

const save = async () => {
  loading.value = true

  try {
    await companyStore.create()
  } finally {
    loading.value = false
  }
}
</script>
