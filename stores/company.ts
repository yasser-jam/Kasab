import { defineStore } from "pinia";
import type { Company } from "~/types";

import api from '~/composables/api'
import { initCompany } from "~/composables/init";

export const useCompanyStore = defineStore('company', () => {
    
    const company = ref<Company>(initCompany())

    const companies = ref<Company[]>([])

    const companyData = computed(() => ({
        ...company.value,
        gallery_images: company.value.gallery_images_ids?.map(img => img.id)
    }))

    const create = async () => {
        const res = await api('company/store', {
            method: 'POST',
            body: companyData.value
        })

        return res.data.id
    }

    const get = async (id: number) : Promise<Company> => {
        const res = await api(`company/${id}`)

        company.value = res?.data

        return company.value
    }

    const update = async (id: number) : Promise<Company> => {
        const res = await api(`company`, {
            method: 'PUT',
            body: companyData.value
        })

        return res.data.id
    }

    return {
        company,
        create,
        update,
        get
    }
})