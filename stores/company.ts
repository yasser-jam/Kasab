import { defineStore } from "pinia";
import type { Company } from "~/types";

import api from '~/composables/api'
import { initCompany } from "~/composables/init";

export const useCompanyStore = defineStore('company', () => {
    
    const company = ref<Company>(initCompany())

    const companies = ref<Company[]>([])

    const create = async () => {
        await api('company/store', {
            method: 'POST',
            body: company.value
        })
    }

    const get = async (id: number) => {
        const res = await api(`company/show/${id}`)

        company.value = res?.data
    }

    return {
        company,
        create,
        get
    }
})