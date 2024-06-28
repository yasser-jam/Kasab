import { defineStore } from "pinia";

import api from '~/composables/api'
import { initEmployee } from "~/composables/init";

export const useEmployeeStore = defineStore('employee', () => {
    
    const employee = ref<Employee>(initEmployee())

    const employees = ref<Employee[]>([])

    const employeeData = computed(() => ({
        ...employee.value,
        // @ts-ignore
        job_role_id: employee.value.job_role_id.id
    }))

    const create = async () => {
        await api('employee/store', {
            method: 'POST',
            body: employeeData.value
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