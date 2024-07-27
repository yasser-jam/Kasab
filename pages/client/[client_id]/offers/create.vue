<template>
  <div class="container mb-96">
    <div class="flex justify-between my-8">
      <layout-breadcrumb></layout-breadcrumb>

      <div class="flex gap-2">
        <base-btn
          type="cancel"
          color="gray"
          @click="$router.push(`/company/${route.params.company_id}/offers`)"
          >إلغاء</base-btn
        >
        <base-btn @click="save" :loading>حفظ</base-btn>
      </div>
    </div>

    <div class="flex justify-between items-center mb-8">
      <base-title>إضافة عرض جديد</base-title>
    </div>

    <div class="grid grid-cols-3 gap-8">
      <div class="col-span-2">
        <div class="card mb-8">
          <div class="text-xl text-slate-800 font-semibold mb-4">
            المعلومات الأساسية
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2">
              <base-label>اسم العرض</base-label>

              <base-input placeholder="مصمم مواقع ووردبريس"></base-input>
            </div>

            <div>
              <base-label>نوع العرض (العام)</base-label>

              <system-category-select
                v-model="offer.category_id"
                @update:model-value="offer.sub_category_id = 0"
              />
            </div>

            <div>
              <base-label>نوع العرض (التفصيلي)</base-label>

              <system-sub-category-select
                v-model="offer.sub_category_id"
                :category-id="offer.category_id"
                :disabled="!Boolean(offer.category_id)"
                :items="categories.find(cat => cat.id == offer.category_id)?.sub_categories"
              ></system-sub-category-select>
            </div>

            <div class="col-span-2">
              <base-label>تفاصيل العرض</base-label>

              <base-textarea
                v-model="offer.description"
                placeholder="مسؤوليات الوظيفة، مزايا الوظيفة، بيئة العمل..."
              ></base-textarea>
            </div>
          </div>
        </div>

        <div class="card mb-8">
          <div class="text-xl text-slate-800 font-semibold mb-4">
            ملفات المشروع
          </div>

          <base-file-uploader width-full @update:model-value="addFile($event)"></base-file-uploader>

          <div class="flex flex-col gap-1">
            <base-file-item v-for="file in files" :file downloadable />
          </div>
        </div>
      </div>

      <div>
        <div class="card h-fit p-4">
          <div class="text-xl text-slate-800 font-semibold mb-4">
            معلومات العرض
          </div>

          <base-label>السعر</base-label>

          <div class="flex items-center gap-4">
            <base-input
              v-model.number="offer.min_price"
              type="number"
              placeholder="الحد الأدنى"
            ></base-input>

            <Icon name="mdi:arrow-left" class="text-primary" size="4rem" />

            <base-input
              v-model.number="offer.max_price"
              type="number"
              placeholder="الحد الأعلى"
            ></base-input>
          </div>

          <base-label> الأيام </base-label>

          <base-input
            v-model="offer.days"
            type="number"
            placeholder="20 يوم"
          ></base-input>
        </div>

        <div class="card mt-8">
          <div class="text-xl text-slate-800 font-semibold mb-4">
            المهارات المطلوبة للعرض
          </div>

          <base-label>المهارات المطلوبة</base-label>

          <system-skill-select v-model="offer.skill_ids" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const offerStore = useClientOfferStore()
const categoryStore = useCategoryStore()

const { offer } = storeToRefs(offerStore)
const { categories } = storeToRefs(categoryStore)

const loading = ref<boolean>(false)

const route = useRoute()

const files = ref<any[]>([])

const addFile = (file: any) => {
  files.value.push(file)

  offer.value.file_ids.push(file.id)
}

const save = async () => {
  loading.value = true

  try {
    await offerStore.create()

    navigateTo(`/client/${route.params.client_id}/offers`)
  } finally {
    loading.value = false
  }
}
</script>
