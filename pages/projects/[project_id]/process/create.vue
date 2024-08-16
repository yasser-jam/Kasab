<template>
  <base-page-dialog :width="600">
    <template #title> إضافة مرحلة عمل </template>

    <template #default>
      <Form @submit="submit" v-slot="{ errors }">
        <div class="grid grid-cols-2 gap-2 max-h-[500px] overflow-auto">

          <div>
            <Field
              v-model="milestone.price"
              name="money"
              rules="required"
              v-slot="{ field }"
            >
              <base-label>تكلفة المرحلة</base-label>
              <base-input
                v-bind="field"
                :errors="errors.money"
                placeholder="أدخل السعر"
              />
            </Field>
          </div>

          <div>
            <Field
              v-model="milestone.deadline"
              name="date"
              rules="required"
              v-slot="{ field }"
            >
              <base-label>تاريخ انتهاء المرحلة</base-label>
              <base-input v-bind="field" type="date" :errors="errors.date" />
            </Field>
          </div>

          <div class="col-span-2">
            <Field
              v-model="milestone.description"
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
        </div>

        <div class="flex justify-end relative gap-2 mt-4">
          <base-btn color="gray" :to="`projects/${projectId}/process`"
            >إلغاء</base-btn
          >

          <base-btn type="submit">إضافة</base-btn>
        </div>
      </Form>
    </template>
  </base-page-dialog>
</template>

<script setup lang="ts">
const offerStore = useClientOfferStore()

const { offer, milestone } = storeToRefs(offerStore)

const route = useRoute()
const router = useRouter()

const loading = ref<boolean>(false)

const projectId = route.params.project_id

// reset
offerStore.resetMilestone()

const submit = async () => {
  loading.value = true

  try {
    await offerStore.createMilestone(Number(offer.value.project.id))

    router.back()
  } finally {
    loading.value = false
  }
}
</script>
