<template>
    <div class="card shadow-lg bg-slate-50 rounded-lg relative z-50">


        <div class="flex flex-col items-center justify-center gap-4">
            <div class="rounded-full p-6" :class="true && 'bg-primary'">
                <Icon name="mdi:file" size="2rem" color="white" />
            </div>

            <div class="text-primary text-3xl font-semibold">اسم المنتج</div>
            <div class="text-gray-500">20/3/2003</div>
        
        </div>

        <div class="text-slate-500 mt-6">
            هذا الشرح الطويل هو وصف مهم ومفيد جدا للمنتج، ينبغي الاطلاع قبل الشراء
        </div>

        <div class="flex items-center gap-4 border-2 border-primary border-dashed bg-slate-50 mt-8 p-4 rounded-lg">            
            <div class="bg-primary rounded-full w-4 h-4 p-2">
                <Icon name="mdi:account-tie" size="2rem" color="white" />
            </div>
            
            <div class="text-primary text-xl">
                ياسر جمال الدين
            </div>
        </div>

        <base-btn icon="mdi:cart" class="mx-auto mt-4">شراء</base-btn>
        
    </div>
</template>