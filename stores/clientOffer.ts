import type { ClientOffer } from "~/types"

export const useClientOfferStore = defineStore('client_offer', () => {
    const offer = ref<ClientOffer>(initClientOffer())

    const offers = ref<ClientOffer[]>([])

    const create = async () => {
        await api('company/job_offer/store', {
            method: 'POST',
            body: offer.value
        })
    }
    
    return {
        offer,
        offers,
        create,
    }
})