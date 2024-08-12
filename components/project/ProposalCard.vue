<template>
    <div>
        <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 rounded-full bg-gray-200"></div>
    
            <div class="">
                <div class="flex gap-2 items-center mb-2">
                    <nuxt-link class="text-lg font-semibold" to="/employee/2">
                        <!-- {{ proposal.freelancer?.user?.first_name + '' + proposal.freelancer?.user?.first_name }} -->
                        ياسر جمال الدين
                    </nuxt-link>
    
                    <base-rating></base-rating>
                </div>
    
                <div class="flex gap-2 items-center text-gray-500 font-semibold text-sm">
                    <div class="flex items-center">
                        <Icon class="me-2" name="mdi:briefcase-outline" />
                        مطور واجهات
                        <!-- <div>{{ proposal }}</div> -->
                    </div>
    
                    <div class="flex items-center">
                        <Icon class="me-2" name="mdi:clock-outline" />
                        <div>منذ ثلاث دقائق</div>
                    </div>
                </div>
            </div>
    
            
        </div>

        <div class="text-slate-700 text-base leading-relaxed">
            {{ proposal.message }}
        </div>

    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    proposal: Proposal
}>()

console.log(props.proposal);
</script>