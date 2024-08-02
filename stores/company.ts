import { defineStore } from 'pinia'
import type { Company, Offer, OffersFilters } from '~/types'

import api from '~/composables/api'
import { initCompany } from '~/composables/init'

export const useCompanyStore = defineStore('company', () => {
  const company = ref<Company>(initCompany())

  const companyOffersFilters = ref<OffersFilters>(initCompanyOffersFilter())
  const companyOffers = ref<Offer[]>([])

  const companies = ref<Company[]>([])

  const companyData = computed(() => ({
    ...company.value,
    gallery_images: company.value.gallery_images_ids?.map((img) => img.id)
  }))

  const create = async () => {
    const res = await api('company/store', {
      method: 'POST',
      body: companyData.value
    })

    return res.data.id
  }

  const get = async (id: number): Promise<Company> => {
    const res = await api(`company/${id}`)

    company.value = res?.data

    return company.value
  }

  const list = async () : Promise<Company[]> => {
    const res = await api('company')

    companies.value = res?.data

    return companies.value
  }

  const update = async (id: number): Promise<Company> => {
    const res = await api(`company`, {
      method: 'PUT',
      body: companyData.value
    })

    return res.data.id
  }

  const myOffers = async (): Promise<Offer[]> => {
    const res = await api('company/job_offer/my-job-offers', {
      method: 'POST',
      body: companyOffersFilters.value
    })

    companyOffers.value = res?.data

    return companyOffers.value
  }

  return {
    company,
    create,
    update,
    get,
    list,

    companyOffersFilters,
    companyOffers,
    myOffers,
    companies
  }
})
