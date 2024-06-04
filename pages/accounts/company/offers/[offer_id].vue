<template>
  <div class="container">
    <div class="flex justify-between my-8">
      <layout-breadcrumb></layout-breadcrumb>

      <div class="flex gap-2">
        <base-btn type="cancel" color="gray">إلغاء</base-btn>
        <base-btn :loading @click="submit">حفظ</base-btn>
      </div>
    </div>

    <base-title class="mb-8">معلومات العرض</base-title>

    <div class="card bg-white p-4">
      <div class="grid grid-cols-2 gap-4 grow">
        <div class="col-span-2">
          <base-label>المسمى الوظيفي</base-label>

          <base-input placeholder="مهندس برمجيات"></base-input>
        </div>

        <div>
          <base-label>المرتب (الحد الأدنى)</base-label>

          <base-input v-model="offer.min_salary" type="number" placeholder="1000"></base-input>
        </div>

        <div>
          <base-label>المرتب (الحد الأعلى)</base-label>

          <base-input v-model="offer.max_salary" type="number" placeholder="1000000"></base-input>
        </div>

        <div>
          <base-label>السن (الحد الأدنى)</base-label>

          <base-input v-model="offer.min_age" type="number" placeholder="22"></base-input>
        </div>

        <div>
          <base-label>السن (الحد الأعلى)</base-label>

          <base-input v-model="offer.max_age" type="number" placeholder="45"></base-input>
        </div>

        <div>
          <base-label>النوع</base-label>

          <div class="flex gap-4">
            <base-radio v-model="offer.gender" value="male" label="ذكر"></base-radio>
            <base-radio v-model="offer.gender" value="female" label="أنثى"></base-radio>
            <base-radio v-model="offer.gender" :value="null" label="لا يهم"></base-radio>
          </div>
        </div>

        <div>
          <base-label>معلومات إضافية</base-label>

          <div class="flex gap-4">
            <base-checkbox v-model="offer.health_insurance" label="تأمين صحي"></base-checkbox>
            <base-checkbox v-model="offer.transportation" label="مواصلات مؤمنة"></base-checkbox>
          </div>
        </div>

        <div class="col-span-2">
          <base-label>المهارات المطلوبة</base-label>

          <base-select v-model="offer.skills" :items="[]"></base-select>
        </div>

        <div class="col-span-2">
          <base-label>تفاصيل العرض</base-label>

          <base-textarea
          v-model="offer.description"
          placeholder="طبيعة العمل، المهام المطلوبة"
          ></base-textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const offerStore = useOfferStore()

const { offer } = storeToRefs(offerStore)

const loading = ref<boolean>(false)

const submit = async () => {
  loading.value = true

  try {

    await offerStore.create()

  } finally {
    loading.value = false
  }
}

</script>