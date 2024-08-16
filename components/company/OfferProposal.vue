<template>
    <div class="card">
        <div class="flex items-center gap-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
                <Icon name="mdi:account"  size="2rem"/>
            </div>
    
            <div class="">
                <div class="flex gap-2 items-center mb-2">
                    <nuxt-link class="text-lg font-semibold" :to="`/employee/2`">
                        {{ `${proposal.freelancer.user.first_name} ${proposal.freelancer.user.last_name}` }}
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
                        <div>{{ dayjs(proposal.created_at).format('DD-MM-YYYY') }}</div>
                    </div>
                </div>

            </div>
            
            <div class="ms-auto flex items-center gap-2">
                <base-btn icon="mdi:close" color="error" :loading class="ms-auto" @click="$emit('reject')">رفض</base-btn>
                <base-btn icon="mdi:check" class="ms-auto" @click="$emit('accept')">قبول</base-btn>
            </div>
            
        </div>
        <div class="text-base mt-8">{{ proposal.message }}</div>

    </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

defineProps<{
    proposal: any
    loading?: boolean
}>()
</script>