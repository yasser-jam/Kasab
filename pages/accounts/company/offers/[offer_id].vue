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

        <div class="flex justify-between">
          <div>
            <base-label>التأمينات الصحية</base-label>

            <base-checkbox></base-checkbox>
          </div>

          <div>
            <base-label>المواصلات مؤمنة</base-label>

            <base-checkbox></base-checkbox>
          </div>

          <div>
            <base-label>معفى من الخدمة العسكرية</base-label>

            <base-checkbox></base-checkbox>
          </div>
        </div>

        <div>
          <base-label>تفاصيل العرض</base-label>

          <base-textarea
            placeholder="طبيعة العمل، المهام المطلوبة"
          ></base-textarea>
        </div>

        <div class="flex justify-between">
          <base-label>النوع</base-label>
          <div>
            <base-label>ذكر</base-label>

            <base-checkbox></base-checkbox>
          </div>

          <div>
            <base-label>أنثى</base-label>

            <base-checkbox></base-checkbox>
          </div>

          <div>
            <base-label>لا يهم</base-label>

            <base-checkbox></base-checkbox>
          </div>
        </div>

        <div>
            <base-label>المهارات المطلوبة</base-label>
        
            <base-select></base-select>
        </div>

      </div>
    </div>
  </div>
</template>
