<template>
  <div class="grid grid-cols-12 gap-8">
    <div class="col-span-9">
      <div class="card rounded-lg p-4">
        <div class="text-xl font-semibold mb-8">المسمى الوظيفي</div>

        <div class="text-lg bg-slate-50 font-semibold p-4">مطور فرونت اند</div>
      </div>

      <div class="card rounded-lg p-4">
        <div class="text-xl font-semibold mb-8">النبذة المختصرة</div>

        <div class="text-lg bg-slate-50 font-semibold p-4">
          وصف الشركة وهو العديد من الأمور المتعلقة لالشرنمة من جمعي النواحي وصف
          الشركة وهو العديد من الأمور المتعلقة لالشرنمة من جمعي النواحي
        </div>
      </div>

      <div class="card rounded-lg mt-8">
        <div class="text-xl font-semibold mb-8">الوصف العام</div>

        <div class="text-lg bg-slate-50 font-semibold p-4">
          حي الزهور - شارع 29 أيار - البناء الخامس حي الزهور - شارع 29 أيار -
          البناء الخامس حي الزهور - شارع 29 أيار - البناء الخامس حي الزهور -
          شارع 29 أيار - البناء الخامس حي الزهور - شارع 29 أيار - البناء الخامس
          وصف الشركة وهو العديد من الأمور المتعلقة لالشرنمة من جمعي النواحي
        </div>
      </div>
    </div>

    <div class="col-span-3">
      <div class="card">
        <div class="text-xl font-semibold mb-8">معلومات شخصية</div>

        <div class="flex items-center justify-between">
          <base-label>المدينة</base-label>
          <base-chip color="success">دمشق</base-chip>
        </div>

        <div class="flex items-center justify-between mt-8">
          <base-label>تاريخ الميلاد</base-label>
          <base-chip color="warning">1/1/2002</base-chip>
        </div>

        <div class="flex items-center justify-between mt-8">
          <base-label>النوع</base-label>

          <badge-gender></badge-gender>
        </div>
      </div>

      <div class="card mt-8">
        <div class="text-xl font-semibold mb-8">المهارات</div>

        <div class="flex flex-wrap items-center gap-4">
          <base-chip color="secondary">دمشق</base-chip>
          <base-chip color="secondary">دمشق</base-chip>
          <base-chip color="secondary">دمشق</base-chip>
          <base-chip color="secondary">دمشق</base-chip>
          <base-chip color="secondary">دمشق</base-chip>
          <base-chip color="secondary">دمشق</base-chip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const companyStore = useCompanyStore()

const { company } = storeToRefs(companyStore)

const route = useRoute()

const companyId = Number(route.params.company_id)

const { pending } = useLazyAsyncData(() => companyStore.get(companyId))
</script>
