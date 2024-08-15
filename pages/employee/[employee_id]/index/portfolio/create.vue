<template>
  <base-page-dialog :width="1200">
    <template #title> إضافة عمل للمعرض </template>

    <template #default>
      <Form @submit="submit" v-slot="{ errors }">
        <div class="grid grid-cols-2 gap-2">
          <div class="col-span-2">
            <Field
              v-model="portfolio.title"
              name="title"
              rules="required"
              v-slot="{ field }"
            >
              <base-label>العنوان</base-label>
              <base-input v-bind="field" :errors="errors.title" />
            </Field>
          </div>

          <div>
            <Field
              v-model="portfolio.url"
              name="url"
              rules="required"
              v-slot="{ field }"
            >
              <base-label>الرابط</base-label>
              <base-input v-bind="field" :errors="errors.url" />
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
              v-model="portfolio.descreption"
              name="description"
              rules="required"
              v-slot="{ field }"
            >
              <base-label>الوصف</base-label>
              <base-textarea v-bind="field" :errors="errors.description" />
            </Field>
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
              <base-img-item v-for="img in portfolio.image_ids" :file="img"></base-img-item>
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
              <base-file-item v-for="file in portfolio.file_ids" :file></base-file-item>
            </div>
          </div>
        </div>
      </Form>
    </template>

    <template #actions>
      <div class="flex justify-end relative gap-2">
        <base-btn color="gray" :to="`employee/${employeeId}/portfolio`"
          >إلغاء</base-btn
        >

        <base-btn type="submit">إضافة</base-btn>
      </div>
    </template>
  </base-page-dialog>
</template>

<script setup lang="ts">
const portfolioStore = usePortfolioStore()

const { portfolio } = storeToRefs(portfolioStore)

const loading = ref<boolean>(false)

const route = useRoute()

const employeeId = route.params.employee_id

const file = ref()
const image = ref()

const addFile = (id: number) => {
  portfolio.value.file_ids?.push(id)

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
  } finally {
    loading.value = false
  }
}
</script>
