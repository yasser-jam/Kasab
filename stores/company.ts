import { defineStore } from "pinia";
import type { Company } from "~/types";

import api from '~/composables/api'
import { initCompany } from "~/composables/init";

export const useCompanyStore = defineStore('company', () => {
    
    const company = ref<Company>(initCompany())

    const companies = ref<Company[]>([])

    const create = async () => {
        const res = await api('company/store', {
            method: 'POST',
            body: company.value
        })

        return res.data.id
    }

    const get = async (id: number) : Promise<Company> => {
        const res = await api(`company/${id}`)

        company.value = res?.data

        return company.value
    }

    return {
        company,
        create,
        get
    }
})