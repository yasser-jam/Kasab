import type { ClientOffer } from "~/types"

export const useClientOfferStore = defineStore('client_offer', () => {
    const offer = ref<ClientOffer>(initClientOffer())

    const offers = ref<ClientOffer[]>([])

    const create = async () => {
        await api('client-offer/client/store', {
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