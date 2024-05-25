<template>
  <div class="container">
    <div class="flex justify-between my-8">
      <layout-breadcrumb></layout-breadcrumb>

      <div class="flex gap-2">
        <base-btn type="cancel" color="gray">إلغاء</base-btn>
        <base-btn>حفظ</base-btn>
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

          <base-input type="number" placeholder="1000"></base-input>
        </div>

        <div>
          <base-label>المرتب (الحد الأعلى)</base-label>

          <base-input type="number" placeholder="1000000"></base-input>
        </div>

        <div>
          <base-label>السن (الحد الأدنى)</base-label>

          <base-input type="number" placeholder="22"></base-input>
        </div>

        <div>
          <base-label>السن (الحد الأعلى)</base-label>

          <base-input type="number" placeholder="45"></base-input>
        </div>

        <div>
          <base-label>النوع</base-label>

          <div class="flex gap-4">
            <base-radio label="ذكر"></base-radio>
            <base-radio label="أنثى"></base-radio>
            <base-radio label="لا يهم"></base-radio>
          </div>
        </div>

        <div>
          <base-label>معلومات إضافية</base-label>

          <div class="flex gap-4">
            <base-checkbox label="تأمين صحي"></base-checkbox>
            <base-checkbox label="مواصلات مؤمنة"></base-checkbox>
          </div>
        </div>

        <div class="col-span-2">
          <base-label>المهارات المطلوبة</base-label>

          <base-select></base-select>
        </div>

        <div class="col-span-2">
          <base-label>تفاصيل العرض</base-label>

          <base-textarea
            placeholder="طبيعة العمل، المهام المطلوبة"
          ></base-textarea>
        </div>
      </div>
    </div>
  </div>
</template>
