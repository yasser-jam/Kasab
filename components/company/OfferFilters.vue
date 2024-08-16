<!-- <template>
  <div class="card bg-white">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <base-label>موقع العمل</base-label>

        <offer-location-select />
      </div>

      <div>
        <base-label>نوع الدوام</base-label>

        <offer-attendence-select />
      </div>

      <div>
        <base-label>المسمى المهني</base-label>

        <system-job-select />
      </div>

      <div>
        <base-label>الحالة</base-label>

        <base-input />
      </div>
    </div>
  </div>
</template> -->

<template>
  <div class="card grid grid-cols-4 gap-4 shadow-md">

    <div class="col-span-2">
      <base-label>نوع الوظيفة</base-label>

      <company-industry-select v-model="filters.industry_name" />
    </div>

    <div class="col-span-2">
      <base-label>اسم الوظيفة</base-label>

      <system-job-select v-model="filters.job_role_id" />
    </div>

    <div>
      <base-label>الحالة</base-label>

      <system-status-select v-model="filters.status" />
    </div>

    <div>
      <base-label>موقع العمل</base-label>

      <offer-location-select v-model="filters.location_type" />
    </div>

    <div>
      <base-label>نوع الدوام</base-label>

      <offer-attendence-select v-model="filters.attendance_type" />
    </div>

    <div>
      <base-label>جنس الموظف</base-label>

      <system-gender-select full v-model="filters.gender" />
    </div>


    <!-- Todo: bind after create list companies api -->

    <!-- <div>
      <base-label>اسم الشركة</base-label>

      <system-company-select v-model="filters?.company_id" />
    </div> -->

    

    <div>
      <base-label>الحد الأدنى للسعر</base-label>

      <base-input type="number" v-model.number="filters.min_salary" placeholder="الحد الأدنى للسعر" />
    </div>

    <div>
      <base-label>الحد الأعلى للسعر</base-label>

      <base-input type="number" v-model.number="filters.max_salary" placeholder="الحد الأعلى للسعر" />
    </div>

    <div>
      <base-label>الحد الأدنى للعمر</base-label>

      <base-input type="number" v-model.number="filters.min_age" placeholder="الحد الأدنى للعمر" />
    </div>

    <div>
      <base-label>الحد الأعلى للعمر</base-label>

      <base-input type="number" v-model.number="filters.max_age" placeholder="الحد الأعلى للعمر" />
    </div>

    <base-switch-input
      v-model="filters.health_insurance"
      title="يوجد تأمينات صحية"
      color="success"
      class="col-span-2"
    />

    <base-switch-input
      v-model="filters.transportation"
      title="المواصلات مؤمنة"
      color="warning"
      class="col-span-2"
    />

    <base-switch-input
      v-model="filters.military_service"
      title="يوجد خدمة عسكرية"
      subtitle="مطلوب للخدمة العسكرية خلال العامين القادمين"
      color="primary"
      class="col-span-4"
    />

    <base-switch-input
      v-model="filters.i_can_apply_for_it"
      title="أستطيع التقدم للوظيفة"
      subtitle="أمتلك المؤهلات اللازمة للتقديم على هذه الوظيفة"
      color="info"
      class="col-span-4"
    />
  </div>
</template>

<script setup lang="ts">
const offerStore = useOfferStore()

const { filters } = storeToRefs(offerStore)

</script>
