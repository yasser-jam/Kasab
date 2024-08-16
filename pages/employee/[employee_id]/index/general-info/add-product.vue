<template>
    <base-page-dialog :width="900">
      <template #title> إضافة منتج </template>
  
      <template #default>
        <Form @submit="submit" v-slot="{ errors }">
          <div class="grid grid-cols-3 gap-2 max-h-[500px] overflow-auto px-4">
            <div class="col-span-2">
              <Field
                v-model="product.name"
                name="name"
                rules="required"
                v-slot="{ field }"
              >
                <base-label>الاسم</base-label>
                <base-input
                  v-bind="field"
                  :errors="errors.name"
                  placeholder="أدخل العنوان"
                />
              </Field>
            </div>
  
            <div>
              <Field
                v-model="product.price"
                name="money"
                rules="required"
                v-slot="{ field }"
              >
                <base-label>السعر</base-label>
                <base-input
                  v-bind="field"
                  type="number"
                  :errors="errors.money"
                  placeholder="أدخل السعر"
                />
              </Field>
            </div>

            <div class="col-span-3">
              <Field
                v-model="product.description"
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
  

            <div class="col-span-3">
              <base-label>صورة العرض</base-label>
  
              <base-image-uploader
                width-full
                v-model="product.image_id"
                url=""
              />
            </div>

            <div class="col-span-3">
              <base-label>صور المشروع</base-label>
  
              <base-image-uploader
                width-full
                v-model="image"
                url=""
                @update:model-value="addImage"
              />
              <div class="flex flex-col max-h-[200px] overflow-auto">
                <base-img-item
                  v-for="img in product.image_ids"
                  :file="img"
                ></base-img-item>
              </div>
            </div>
  
            <div class="col-span-3 mt-2">
              <base-label>فايلات المشروع</base-label>
  
              <base-file-uploader
                width-full
                v-model="file"
                @update:model-value="addFile"
              />
              <div class="flex flex-col max-h-[200px] overflow-auto">
                <base-file-item
                  v-for="file in product.file_ids"
                  :file
                ></base-file-item>
              </div>
            </div>
          </div>
          
          <div class="flex justify-end relative gap-2 mt-4">
            <base-btn color="gray" :to="`employee/${employeeId}/general-info`"
              >إلغاء</base-btn
            >
  
            <base-btn type="submit">إضافة</base-btn>
          </div>
  
        </Form>
      </template>
    </base-page-dialog>
  </template>
  
  <script setup lang="ts">
  const productStore = useProductStore()
  
  const { product } = storeToRefs(productStore)
  
  const loading = ref<boolean>(false)
  
  const route = useRoute()
  
  const employeeId = route.params.employee_id
  
  // reset
  productStore.reset()
  
  const file = ref()
  const image = ref()
  
  const addFile = (f: any) => {
    product.value.file_ids?.push(f.id)
  
    file.value = null
  }
  
  const addImage = (id: number) => {
    product.value.image_ids?.push(id)
  
    image.value = null
  }
  
  const submit = async () => {
    loading.value = true
  
    try {
      await productStore.create()
  
      navigateTo(`/employee/${employeeId}/general-info`)
    } finally {
      loading.value = false
    }
  }
  </script>
  