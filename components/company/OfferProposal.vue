<template>
    <div class="card">
        <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gray-200"></div>
    
            <div class="">
                <div class="flex gap-2 items-center mb-2">
                    <nuxt-link class="text-lg font-semibold" to="/employee/2">
                        اسم المستقل
                    </nuxt-link>
    
                    <base-rating></base-rating>
                </div>
    
                <div class="flex gap-2 items-center text-gray-500 font-semibold text-sm">
                    <div class="flex items-center">
                        <Icon class="me-2" name="mdi:briefcase-outline" />
                        <div>مطور واجهات أمامية</div>
                    </div>
    
                    <div class="flex items-center">
                        <Icon class="me-2" name="mdi:clock-outline" />
                        <div>منذ ثلاث دقائق</div>
                    </div>
                </div>
            </div>
    
            
        </div>

    </div>
</template>