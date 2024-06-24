<template>
  <div class="container">
    <div class="flex justify-between my-8">
      <layout-breadcrumb></layout-breadcrumb>

      <base-btn icon="mdi:pencil" to="/accounts/company/general-info"
        >تعديل البيانات</base-btn
      >
    </div>

    <div class="grid grid-cols-12 gap-8 my-8">
      <div class="col-span-9">
        <div
          class="grid grid-cols-12 items-center h-44 p-4 rounded-lg profile-bg"
          style="
            background-image: url('https://res.cloudinary.com/dyefbd6jy/image/upload/v1718994040/phpfBOmlL_oyd8vy.png');
          "
        >
          <div class="col-span-2">
            <img src="https://res.cloudinary.com/dyefbd6jy/image/upload/v1718994040/phpfBOmlL_oyd8vy.png" alt="profile-image" class="w-32 h-32 rounded-full">
          </div>

          <div class="col-span-10 ms-8">
            <div class="flex justify-between">
              <div class="text-3xl font-bold text-white mb-2">اسم الشركة</div>

              <base-chip color="gray">شركة خدمية</base-chip>
            </div>
            <div
              class="flex items-center gap-4 text-base font-bold text-white mt-2"
            >
              <div class="flex items-center">
                <Icon name="mdi:phone" size="1.5rem" class="text-mt me-2" />
                <div class="tracking-wider">0993544811</div>
              </div>
  
              <span>/</span>
  
              <div class="flex items-center mt-1">
                <Icon name="mdi:map-marker" size="1.5rem" class="text-mt me-2" />
                <div class="tracking-wider">الجبة</div>
              </div>
            </div>
          </div>

        </div>

        <div class="col-span-12 card rounded-lg mt-8 p-4">
          <div class="text-xl font-semibold mb-8">وصف الشركة</div>

          <div class="text-lg bg-slate-50 font-semibold p-4">
            وصف الشركة وهو العديد من الأمور المتعلقة لالشرنمة من جمعي النواحي
            وصف الشركة وهو العديد من الأمور المتعلقة لالشرنمة من جمعي النواحي
            وصف الشركة وهو العديد من الأمور المتعلقة لالشرنمة من جمعي النواحي
            وصف الشركة وهو العديد من الأمور المتعلقة لالشرنمة من جمعي النواحي
          </div>
        </div>

        <div class="card mt-8">
          <div class="text-xl font-semibold mb-8">العنوان التفصيلي</div>

          <div class="text-lg bg-slate-50 font-semibold p-4">
            حي الزهور - شارع 29 أيار - البناء الخامس
          </div>
        </div>

        <div class="card mt-8">
          <div class="text-xl font-semibold mb-8">معرض الصور</div>

          <!-- <company-gallery-slider></company-gallery-slider> -->
        </div>
      </div>

      <div class="col-span-3">
        <div class="card">
          <div class="text-xl font-semibold mb-8">معلومات إضافية</div>
          <div class="flex items-center justify-between">
            <base-label>عدد الموظفين</base-label>
            <base-chip>10 - 50 موظفاً</base-chip>
          </div>

          <div class="flex items-center justify-between mt-8">
            <base-label>عدد العروض الكلي</base-label>
            <base-chip>10 عروض</base-chip>
          </div>

          <div class="flex items-center justify-between mt-8">
            <base-label>عدد العروض المكتملة</base-label>
            <base-chip>5 عروض</base-chip>
          </div>

          <div class="flex items-center justify-between mt-8">
            <base-label>عدد العروض المتاحة</base-label>
            <base-chip>5 عروض</base-chip>
          </div>
        </div>

        <div class="card mt-8">
          <div class="text-xl font-semibold mb-8">روابط التواصل</div>

          <div class="flex flex-col gap-4">
            <nuxt-link
              dir="ltr"
              to="/"
              class="bg-slate-200 text-lg font-semibold px-4 py-2"
              >https://facebook.com</nuxt-link
            >
            <nuxt-link
              dir="ltr"
              to="/"
              class="bg-slate-200 text-lg font-semibold px-4 py-2"
              >https://facebook.com</nuxt-link
            >
            <nuxt-link
              dir="ltr"
              to="/"
              class="bg-slate-200 text-lg font-semibold px-4 py-2"
              >https://facebook.com</nuxt-link
            >
          </div>
        </div>

        <div class="card mt-8">
          <div class="text-xl font-semibold mb-8">أرقام الهواتف</div>

          <div class="flex flex-col gap-4">
            <div
              dir="ltr"
              to="/"
              class="bg-slate-200 text-lg font-semibold px-4 py-2"
            >
              011276767
            </div>
          </div>
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

<style scoped>
.profile-bg {
  background-color: rgba(0, 0, 0, .6);
  background-blend-mode: color;
}
</style>