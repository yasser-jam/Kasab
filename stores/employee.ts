import { defineStore } from "pinia";

import api from '~/composables/api'
import { initEmployee } from "~/composables/init";

export const useEmployeeStore = defineStore('employee', () => {
    
    const employee = ref<Employee>(initEmployee())

    const employees = ref<Employee[]>([])

    const create = async () => {
        await api('freelancer/store', {
            method: 'POST',
            body: employee.value
        })
    }

    const get = async (id: number) => {
        
console.log('here is test');
        console.log(id);
        const res = await api(`freelancer/show/${id}`)
        console.log('after ujpdate');
        console.log(res);

        employee.value = res?.data

        return employee.value
    }

    return {
        employee,
        create,
        get
    }
})