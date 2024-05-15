<template>
    <div class="flex gap-4">
        <base-input v-model="contact" placeholder="test@gmail.com"></base-input>
        <base-btn btn-class="btn-outline btn-primary" icon="mdi:plus" @click="addContact"></base-btn>
    </div>

    <div class="max-h-[200px] overflow-auto">
        <div v-for="contact in contacts" class="flex gap-4 my-4">
            <base-input :model-value="contact" @update:model-value="$emit('')"></base-input>
            <base-btn btn-class="btn-outline btn-error" icon="mdi:close" @click="removeContact(contact)"></base-btn>
        </div>

    </div>
</template>

<script setup lang="ts">

const contact = ref<string>('')

const props = defineProps<{
    modelValue: string[]
}>()

const contacts = ref<string[]>(props.modelValue)

const addContact = () => {
    if (contact.value) contacts.value.push(contact.value)

    // reset contact
    contact.value = ''
}

const removeContact = (phone: string) => {
    contacts.value = contacts.value.filter(ph => ph != phone)
}

</script>