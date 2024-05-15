<template>
    <div class="flex gap-4">
        <!-- <input v-model="phoneInput"/> -->
        <base-input v-model="phoneInput" placeholder="09xxxxxxxx"></base-input>
        <base-btn btn-class="btn-outline btn-primary" icon="mdi:plus" @click="addPhone"></base-btn>
    </div>

    <div class="max-h-[200px] overflow-auto">
        <div v-for="phone in phones" class="flex gap-4 my-4">
            <base-input :model-value="phone" @update:model-value="$emit('')"></base-input>
            <base-btn btn-class="btn-outline btn-error" icon="mdi:close" @click="removePhone(phone)"></base-btn>
        </div>

    </div>
</template>

<script setup lang="ts">

const phoneInput = ref<string>('')

const props = defineProps<{
    modelValue: string[]
}>()

const phones = ref<string[]>(props.modelValue)

const addPhone = () => {
    if (phoneInput.value) phones.value.push(phoneInput.value)

    // reset phoneInput
    phoneInput.value = ''
}

const removePhone = (phone: string) => {
    phones.value = phones.value.filter(ph => ph != phone)
}

</script>