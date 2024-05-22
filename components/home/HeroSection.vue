<template>
    <div class="bg-[url('~/assets/images/job.png')] bg-cover flex justify-center items-center relative overlay w-full h-[75vh]">
        <div class="flex flex-col items-center gap-6 text-white z-50">
            <div class="text-7xl font-semibold">كَسَب</div>
            <div class="text-2xl">أول منصة سورية لتوفير الوظائف</div>
        </div>
    </div>
</template>

<style scoped>
.overlay::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .7);

}
</style>