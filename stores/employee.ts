import { defineStore } from "pinia";

import api from '~/composables/api'
import { initEmployee } from "~/composables/init";

export const useEmployeeStore = defineStore('employee', () => {
    
    const employee = ref<Employee>(initEmployee())

    const employees = ref<Employee[]>([])

    const create = async () : Promise<Employee> => {
        const res = await api('freelancer/store', {
            method: 'POST',
            body: employee.value
        })

        employee.value = res?.data

        return employee.value
    }

    const get = async (id: number) => {
        
        const res = await api(`freelancer/${id}`)

        employee.value = res?.data

        return employee.value
    }

    return {
        employee,
        create,
        get
    }
})