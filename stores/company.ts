import { defineStore } from "pinia";
import type { Company } from "~/types";

import api from '~/composables/api'
import { initCompany } from "~/composables/init";

export const useCompanyStore = defineStore('company', () => {
    
    const company = ref<Company>(initCompany())

    const companies = ref<Company[]>([])

    const create = async () => {
        await api('company/store')
    }

    return {
        company,
        create
    }
})