<template>
    <div class="container">
        <div class="grid grid-cols-3 bg-slate-50 gap-12 py-8">
            <div class="flex flex-col gap-4 justify-center items-center">
                <!-- logo -->
                 <div class="bg-gray-400 w-32 h-32 rounded-lg"></div>
    
                 <div class="text-2xl font-semibold text-primary">منصة سُبُل</div>
            </div>
    
            <div class="flex flex-col ms-24 gap-4">
    
                <base-title class="mb-4">الروابط</base-title>
    
                <nuxt-link to="/">الرئيسية</nuxt-link>
                <nuxt-link to="/offers">عروض الشركات</nuxt-link>
                <nuxt-link to="/">عروض العملاء</nuxt-link>
                <nuxt-link to="/">قائمة الموظفين</nuxt-link>
                <nuxt-link to="/">قائمة الشركات</nuxt-link>
            </div>
    
            <div class="flex flex-col">
                <base-title class="mb-4">راسلنا الآن</base-title>
                <base-textarea placeholder="اكتب رسالتك هنا"></base-textarea>
    
                <base-btn class="text-center mt-4" icon="mdi:send">إرسال</base-btn>
            </div>
        </div>
    </div>

    <div class="flex items-center justify-center bg-slate-100 text-primary py-2">
        جميع الحقوق محفوظة <Icon name="mdi:copyright" class="text-primary ms-2 me-1" /> 2024
    </div>
</template>