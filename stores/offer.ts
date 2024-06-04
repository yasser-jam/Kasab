export const useOfferStore = defineStore('offer', () => {
    const offer = ref<Offer>(initOffer())

    const offers = ref<Offer[]>([])

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