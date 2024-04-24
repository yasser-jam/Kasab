<template>
    <div class="container mt-12">
        <div class="text-4xl font-semibold text-center">أنواع الحسابات</div>

        <div class="text-gray-400 text-xl text-center mt-4">رجاء قم باختيار نوع الحساب الذي تود إنشاءه</div>

        <div class="flex justify-center gap-12 mt-12">

            <account-type-card type="company"></account-type-card>

            <account-type-card type="freelancer"></account-type-card>

            <account-type-card type="project-owner"></account-type-card>

        </div>
    </div>
</template>