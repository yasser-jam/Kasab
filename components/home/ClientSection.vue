<template>
    <div class="grid grid-cols-3 bg-white my-0 pt-24 pb-12">
  
      <div class="col-span-2">
        <div class="text-primary text-4xl font-semibold">قسم العمل الحر</div>
  
        <div
          class="max-w-[75%] text-lg leading-relaxed font-semibold text-slate-500 mt-4"
        >
        يشكل قسم العمل الحر بوابتك نحو سوق عمل إلكتروني يتيح لك العديد من المزايا الرائعة والمناسبة
        </div>
  
        <div class="grid grid-cols-2 mt-8">
  
            <div class="mt-4">
              <div class="text-dark font-semibold text-2xl mb-2">للعملاء:</div>
      
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

      <div class="relative drop-shadow-sm">
        <div
          class="absolute -top-12 right-12 w-48 h-48 bg-slate-50 rounded-full"
        ></div>
        <img
          src="/imges/home/client.svg"
          width="60%"
          class="mx-auto drop-shadow-xl"
          alt="about"
        />
      </div>
 

    </div>
  </template>
  
  <script setup>
  const employeePoints = ref([
    'إمكانية البحث عن مختلف أنواع العروض الموجودة',
    'التقدم على العرض المناسبة',
  ])
  
  const companyPoints = ref([
    'إضافة عروض عمل حر بتفاصيل واضحة',
    'وضع قيود للتقدم لهذه الطلبات للمساعدة في الحصول على النتائج المرجوة بشكل مباشر',
  ])
  </script>
  