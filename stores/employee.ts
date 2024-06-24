import { defineStore } from "pinia";

import api from '~/composables/api'
import { initEmployee } from "~/composables/init";

export const useEmployeeStore = defineStore('employee', () => {
    
    const employee = ref<Employee>(initEmployee())

    const employees = ref<Employee[]>([])

    const create = async () => {
        await api('employee/store', {
            method: 'POST',
            body: employee.value
        })
    }

    const get = async (id: number) => {
        const res = await api(`employee/show/${id}`)

        employee.value = res?.data
    }

    return {
        employee,
        create,
        get
    }
})