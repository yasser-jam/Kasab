<template>
  <div class="container">
    <div class="flex justify-between my-8">
      <layout-breadcrumb :meta></layout-breadcrumb>

      <div class="flex gap-2">
        <base-btn
          color="gray"
          @click="$router.push(`/company/${route.params.company_id}/offers`)"
          >إلغاء</base-btn
        >
        <button class="btn btn-primary" as="base-btn" @click="save">حفظ</button>
        <!-- <base-btn @click="save">حفظ</base-btn> -->
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

              <company-industry-select
              v-model="offer.industry_name"
              ></company-industry-select>
            </div>

            <div>
              <base-label>نوع الموظف</base-label>
              <system-gender-select
                v-model="offer.gender"
              ></system-gender-select>
            </div>

            <base-switch-input
            v-model="offer.gender_required"
            title="النوع مطلوب"
            subtitle="لن يتم استقبال الطلبات التي لا تحقق شرط النوع"
            color="warning"
            class="col-span-2"
          ></base-switch-input>

            <div>
              <base-label>مكان الدوام</base-label>

              <offer-location-select v-model="offer.location_type" />
            </div>

            <div>
              <base-label>نوع الدوام</base-label>

              <offer-attendence-select v-model="offer.attendance_type" />
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
                v-model="offer.military_service_required"
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
            <base-input
              v-model.number="offer.min_salary"
              type="number"
              placeholder="الحد الأدنى"
            ></base-input>

            <Icon name="mdi:arrow-left" class="text-primary" size="4rem" />

            <base-input
              v-model.number="offer.max_salary"
              type="number"
              placeholder="الحد الأعلى"
            ></base-input>
          </div>
        </div>

        <div class="card bg-white h-fit p-4 mt-8">
          <div class="text-xl text-slate-800 font-semibold mb-4">العمر</div>

          <div class="flex items-center gap-4">
            <base-input
              v-model.number="offer.min_age"
              type="number"
              placeholder="الحد الأدنى"
            ></base-input>

            <Icon name="mdi:arrow-left" class="text-primary" size="4rem" />

            <base-input
              v-model.number="offer.max_age"
              type="number"
              placeholder="الحد الأعلى"
            ></base-input>
          </div>

          <base-switch-input
            v-model="offer.age_required"
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

          <system-skill-select v-model="offer.skills" @update:model-value="optimizeRequired" />

          <base-label class="mt-3">المهارات المطلوبة</base-label>
          <div class="text-gray-400 text-sm mb-2">
            لن يتم استقبال العروض التي لا يمتلك أصحابها هذه المهارات
          </div>

          <base-select
          v-model="requiredSkills"
            :items="reqSkillsItems"
            map-options
            item-title="name"
            item-value="id"
            multiple
          ></base-select>

        </div>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
const offerStore = useOfferStore()
const skillStore = useSkillStore()

const { offer } = storeToRefs(offerStore)
const { skills } = storeToRefs(skillStore)

const loading = ref<boolean>(false)

const route = useRoute()

const requiredSkills = ref([])

offerStore.reset()

// all selected items options
const reqSkillsItems = computed(() => {
  const items: any[] = []

  skills.value.filter((skill) => {
    const selected = offer.value.skills.find((el) => el == (skill.id as any))

    if (selected) items.push(skill)
  })

  return items
})


// map over selected skills and decide if this select is required or not
const computedSkills = computed(() => {
  return reqSkillsItems.value.map(skill => ({
    id: skill.id,
    required: requiredSkills.value.findIndex((selected: any) => selected == skill.id) > -1
  }))
})

// remove from required skills when unselect from offer.skills
const optimizeRequired = () => {
  requiredSkills.value = requiredSkills.value.filter(s => offer.value.skills.find(skill => skill == s))
}

const save = async () => {
  loading.value = true

  try {
    
    // update offer skills to computedSkills in offer store
    offer.value.skills = computedSkills.value as any

    await offerStore.createO()
    navigateTo(`/company/${route.params.company_id}/offers`)
  } finally {
    loading.value = false
  }
}
const meta = ref([
  {
    title: 'إنشاء عرض جديد',
    link: `/company/${route.params.company_id}/offers/create`,
    active: true
  }
])

</script>
