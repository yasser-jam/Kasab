<template>
    <div class="flex items-center justify-between border-2 border-dashed border-primary bg-slate-50 rounded-lg p-3 mt-2">
        <div class="flex flex-col gap-2">
            <div class="text-primary text-lg font-semibold">
                <slot name="title" />
                {{ title }}
            </div>

            <div v-if="!mini" class="text-sm text-gray-500">
                <slot name="subtitle" />
                {{ subtitle }}
            </div>
        </div>

        <input type="checkbox" class="toggle toggle-primary" checked="checked" @update:model-value="$emit('update:model-value', $event)" />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title?: string
    subtitle?: string
    mini?: boolean
}>()

</script>