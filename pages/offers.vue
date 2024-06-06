<template>
  <div class="container mx-auto">
    
    <layout-breadcrumb class="mt-12"></layout-breadcrumb>

    
    <div class="mt-6 mb-8">
      <h1 class="text-5xl font-bold mb-6">عروض الشركات</h1>
      <div class="text-xl font-semibold text-gray-400">
        تصفح العروض بمختلف أقسامها، يمكنك البحث عن العرض المناسب ومعرفة مزيد من
        التفاصيل عنه
      </div>
    </div>

    <div class="grid grid-cols-8 gap-8">
      <div class="col-span-2">
        <offer-filter></offer-filter>

        <offer-stat class="mt-4"></offer-stat>
      </div>

      <div class="col-span-6 flex flex-col gap-8">
        <offer-card></offer-card>
        <offer-card></offer-card>
        <offer-card></offer-card>
        <offer-card></offer-card>
        <offer-card></offer-card>
      </div>
    </div>
  </div>
</template>
