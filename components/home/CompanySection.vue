<template>
  <div class="grid grid-cols-3 bg-white my-0 pt-24 pb-12">
    <div class="relative drop-shadow-sm">
      <div
        class="absolute -top-12 right-12 w-48 h-48 bg-slate-50 rounded-full"
      ></div>
      <img
        src="/imges/home/company.svg"
        width="60%"
        class="mx-auto drop-shadow-xl"
        alt="about"
      />
    </div>

    <div class="col-span-2">
      <div class="text-primary text-4xl font-semibold">قسم الشركات</div>

      <div
        class="max-w-[75%] text-lg leading-relaxed font-semibold text-slate-500 mt-4"
      >
        يعتبر قسم الشركات وعروض الشركات خطوتك الأولى نحو عالم التوظيف بما يوفره
        لك من مزايا عديدة للأفراد او للشركات الباحثة عن مختلف أنواع الموظفين
      </div>

      <div class="grid grid-cols-2 mt-8">

          <div class="mt-4">
            <div class="text-dark font-semibold text-2xl mb-2">للشركات:</div>
    
            <div
              v-for="point in companyPoints"
              class="flex items-center text-primary"
            >
              <Icon name="mdi:circle-small" size="2rem" />
              <div class="text-lg">{{ point }}</div>
            </div>
          </div>
    
          <div class="mt-4">
            <div class="text-dark font-semibold text-2xl mb-2">للموظفين:</div>
    
            <div
              v-for="point in employeePoints"
              class="flex items-center text-primary"
            >
              <Icon name="mdi:circle-small" size="2rem" />
              <div class="text-lg">{{ point }}</div>
            </div>
          </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const employeePoints = ref([
  'إمكانية البحث عن مختلف أنواع العروض الموجودة',
  'التقدم على الوظيفة المناسبة',
  'قبول دعوات التوظيف من مختلف الشركات'
])

const companyPoints = ref([
  'إضافة عروض توظيف بتفاصيل واضحة',
  'وضع قيود للتقدم لهذه الطلبات للمساعدة في الحصول على النتائج المرجوة بشكل مباشر',
  'إمكانية إرسال دعوات توظيف لذوي الخبرة والكفاءة'
])
</script>
