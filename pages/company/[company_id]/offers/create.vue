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

        <div class="card bg-white p-4 mb-8">
          <div class="text-xl text-slate-800 font-semibold mb-4">
            المعلومات الأساسية
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2">
              <base-label>المسمى الوظيفي</base-label>

              <system-job-select
                v-model="offer.job_role_id"
              ></system-job-select>
            </div>

            <div>
              <base-label>نوع العرض</base-label>

              <company-category-select
                v-model="offer.industry_name"
              ></company-category-select>
            </div>

            <div>
              <base-label>نوع الموظف</base-label>
              <system-gender-select
                v-model="offer.gender"
              ></system-gender-select>
            </div>

            <div>
              <base-label>مكان الدوام</base-label>

              <offer-location-select v-model="offer.location_type" />
            </div>

            <div>
              <base-label>نوع الدوام</base-label>

              <offer-attendence-select v-model="offer.attendence_type" />
            </div>

            <div class="col-span-2">
              <base-label>تفاصيل العرض</base-label>

              <base-textarea
                v-model="offer.description"
                placeholder="مسؤوليات الوظيفة، مزايا الوظيفة، بيئة العمل..."
              ></base-textarea>
            </div>

            <div class="col-span-2">
              <base-switch-input
                v-model="offer.military_service"
                title="الخدمة العسكرية"
                subtitle="هل يوجد خدمة عسكرية خلال العامين القادمين"
              ></base-switch-input>
            </div>

            <div class="col-span-2">
              <base-switch-input
                v-model="offer.military_service"
                title="الخدمة العسكرية مطلوبة"
                subtitle="لن يتم استقبال الطلبات التي لا تحقق شرط الخدمة العسكرية"
                color="warning"
              ></base-switch-input>
            </div>
          </div>
        </div>

        <div class="card bg-white p-4">
          <div class="text-xl text-slate-800 font-semibold mb-4">
            خدمات إضافية
          </div>

          <div class="col-span-2 mt-4">
            <base-switch-input
              v-model="offer.health_insurance"
              title="التأمين الصحي"
              subtitle="هل تشمل الوظيفة تأمينات صحية"
            ></base-switch-input>
          </div>

          <div class="col-span-2">
            <base-switch-input
              v-model="offer.transportation"
              title="تأمين المواصلات"
              subtitle="هل تشمل الوظيفة بدل عن المواصلات"
              color="info"
            ></base-switch-input>
          </div>
        </div>
      </div>

      <div>
        <div class="card bg-white h-fit p-4">
          <div class="text-xl text-slate-800 font-semibold mb-4">السعر</div>

          <div class="flex items-center gap-4">
            <base-input placeholder="الحد الأدنى"></base-input>

            <Icon name="mdi:arrow-left" class="text-primary" size="4rem" />

            <base-input placeholder="الحد الأعلى"></base-input>
          </div>

          <base-switch-input
            title="السعر مطلوب"
            subtitle="لن يتم استقبال الطلبات التي لا تحقق شرط السعر"
            color="warning"
          ></base-switch-input>
        </div>

        <div class="card bg-white h-fit p-4 mt-8">
          <div class="text-xl text-slate-800 font-semibold mb-4">العمر</div>

          <div class="flex items-center gap-4">
            <base-input placeholder="الحد الأدنى"></base-input>

            <Icon name="mdi:arrow-left" class="text-primary" size="4rem" />

            <base-input placeholder="الحد الأعلى"></base-input>
          </div>

          <base-switch-input
            title="العمر مطلوب"
            subtitle="لن يتم استقبال الطلبات التي لا تحقق شرط العمر"
            color="warning"
          ></base-switch-input>
        </div>

        <div class="card mt-8">
          <div class="text-xl text-slate-800 font-semibold mb-4">
            المهارات المطلوبة للعرض
          </div>

          <base-label>المهارات المطلوبة</base-label>

          <base-select :items="[]"></base-select>

          <base-label>المهارات المطلوبة</base-label>
          <div class="text-gray-300 text-xs">
            لن يتم استقبال العروض التي لا يمتلك أصحابها هذه المهارات
          </div>

          <base-select :items="[]"></base-select>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const offerStore = useOfferStore()

const { offer } = storeToRefs(offerStore)

const loading = ref<boolean>(false)

const route = useRoute()

const save = async () => {
  loading.value = true

  try {
    const id = await offerStore.create()

    navigateTo(`/company/${route.params.company_id}/offers`)
  } finally {
    loading.value = false
  }
}
</script>
