<template>
    <div ref="card" class="card !shadow-xl p-4 w-72">
        <base-label>رسالة التقدم للعرض</base-label>

        <base-textarea v-model="model" placeholder="اكتب رسالة التقديم"></base-textarea>

        <base-btn class="mt-4" btn-class="btn-sm btn-block btn-secondary" @click="emit('save')">إرسال</base-btn>
    </div>
</template>

<script setup lang=ts>
import { onClickOutside } from '@vueuse/core';

const card = ref(null)

const emit = defineEmits(['close', 'save'])

const model = defineModel()

onClickOutside(card, () => emit('close'))
</script>