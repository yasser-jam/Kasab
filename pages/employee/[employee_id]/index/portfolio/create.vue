<template>
  <base-page-dialog :width="1200">
    <template #title> إضافة عمل للمعرض </template>

    <template #default>
      <Form @submit="submit" v-slot="{ errors }">
        <div class="grid grid-cols-2 gap-2 max-h-[500px] overflow-auto">
          <div class="col-span-2">
            <Field
              v-model="portfolio.title"
              name="title"
              rules="required"
              v-slot="{ field }"
            >
              <base-label>العنوان</base-label>
              <base-input
                v-bind="field"
                :errors="errors.title"
                placeholder="أدخل العنوان"
              />
            </Field>
          </div>

          <div>
            <Field
              v-model="portfolio.url"
              name="url"
              rules="required|url"
              v-slot="{ field }"
            >
              <base-label>الرابط</base-label>
              <base-input
                v-bind="field"
                :errors="errors.url"
                placeholder="أدخل الرابط"
              />
            </Field>
          </div>

          <div>
            <Field
              v-model="portfolio.date"
              name="date"
              rules="required"
              v-slot="{ field }"
            >
              <base-label>تاريخ الإنجاز</base-label>
              <base-input v-bind="field" type="date" :errors="errors.date" />
            </Field>
          </div>

          <div class="col-span-2">
            <Field
              v-model="portfolio.description"
              name="description"
              rules="required|min:20"
              v-slot="{ field }"
            >
              <base-label>الوصف</base-label>
              <base-textarea
                v-bind="field"
                :errors="errors.description"
                placeholder="أدخل الوصف"
              />
            </Field>
          </div>

          <div class="col-span-2">
            <Field
              v-model="portfolio.section"
              name="section"
              rules="required"
              v-slot="{ field }"
            >
              <base-label>معلومات إضافية</base-label>
              <base-textarea
                v-bind="field"
                :errors="errors.section"
                placeholder="أدخل معلومات إضافية"
              />
            </Field>
          </div>

          <div class="col-span-2">
            <base-label>المهارات المستخدمة</base-label>

            <system-skill-select v-model="portfolio.skill_ids" />
          </div>

          <div class="col-span-2">
            <base-label>صور المشروع</base-label>

            <base-image-uploader
              width-full
              v-model="image"
              url=""
              @update:model-value="addImage"
            />
            <div class="flex flex-col max-h-[200px] overflow-auto">
              <base-img-item
                v-for="img in portfolio.image_ids"
                :file="img"
              ></base-img-item>
            </div>
          </div>

          <div class="col-span-2 mt-2">
            <base-label>فايلات المشروع</base-label>

            <base-file-uploader
              width-full
              v-model="file"
              @update:model-value="addFile"
            />
            <div class="flex flex-col max-h-[200px] overflow-auto">
              <base-file-item
                v-for="file in portfolio.file_ids"
                :file
              ></base-file-item>
            </div>
          </div>
        </div>

        <div class="flex justify-end relative gap-2 mt-4">
          <base-btn color="gray" :to="`employee/${employeeId}/portfolio`"
            >إلغاء</base-btn
          >

          <base-btn type="submit">إضافة</base-btn>
        </div>
      </Form>
    </template>
  </base-page-dialog>
</template>

<script setup lang="ts">
const portfolioStore = usePortfolioStore()

const { portfolio } = storeToRefs(portfolioStore)

const loading = ref<boolean>(false)

const route = useRoute()

const employeeId = route.params.employee_id

// reset
portfolioStore.reset()

const file = ref()
const image = ref()

const addFile = (f: any) => {
  portfolio.value.file_ids?.push(f.id)

  file.value = null
}

const addImage = (id: number) => {
  portfolio.value.image_ids?.push(id)

  image.value = null
}

const submit = async () => {
  loading.value = true

  try {
    await portfolioStore.create()

    navigateTo(`/employee/${employeeId}/portfolio`)
  } finally {
    loading.value = false
  }
}
</script>
