import type { ClientOffer, ClientOfferFilters, Milestone, Proposal } from '~/types'

export const useClientOfferStore = defineStore('client_offer', () => {
  
  const authStore = useAuthStore()
  
  const offer = ref<ClientOffer>(initClientOffer())

  
  const offers = ref<ClientOffer[]>([])

  const proposal = ref<Proposal>(initProposal())
  const proposals = ref<Proposal[]>([])

  const create = async () => {
    await api('client-offer/client/store', {
      method: 'POST',
      body: offer.value
    })
  }

  const { user } = storeToRefs(authStore)

  const filters = ref<ClientOfferFilters>(initClientOfferFilter())

  const isContributor = computed(() => user.value.role_id == offer.value.client?.id || user.value.role_id == 1) // Todo add freelancer id

  const list = async (): Promise<ClientOffer[]> => {
    const res = await api('client-offer/freelancer/freelancer-filter', {
      method: 'POST',
      body: {
        ...filters.value,
        min_days: filters.value.min_days || undefined,
        max_days: filters.value.max_days || undefined,
        min_price: filters.value.min_price || undefined,
        max_price: filters.value.max_price || undefined
      }
    })

    console.log(res?.data)
    offers.value = res?.data

    return offers.value
  }

  const get = async (id: number): Promise<ClientOffer> => {
    const res = await api(`client-offer/client/${id}`)

    offer.value = res?.data

    return offer.value
  }

  const propose = async (offerId: number) => {
    await api('client-offer/freelancer/proposal/store', {
      method: 'POST',
      body: {
        ...proposal.value,
        client_offer_id: offerId
      }
    })

    useToasterStore().showSuccessToaster('تم التقدم للعرض بنجاح')
  }

  const listProposals = async (
    projectId: number,
    orderByDate: boolean = true,
    orderByPrice: boolean = true
  ): Promise<Proposal[]> => {
    const res = await api('client-offer/client/proposals', {
      method: 'POST',
      body: {
        client_offer_id: projectId,
        orderByPrice,
        orderByDate: orderByDate
      }
    })

    proposals.value = res?.data

    return proposals.value
  }

  const acceptProposal = async (id: number) => {
    await api('client-offer/client/proposals/accept', {
      method: 'POST',
      body: {
        proposal_id: id
      }
    })

    useToasterStore().showSuccessToaster('تم قبول العرض بنجاح')


  }

  const rejectProposal = async (id: number) => {
    await api('client-offer/client/proposals/reject', {
      method: 'POST',
      body: {
        proposal_ids: [id]
      }
    })

    await listProposals(id)
  }

  const milestone = ref<Milestone>(initMilestone())

  const resetMilestone = () => milestone.value = initMilestone()

  const createMilestone = async (id: number) => {
    await api(`projects/${id}/milestones`)

    useToasterStore().showSuccessToaster('تم إنشاء المرحلة بنجاح')

  }


  const finish = async (id: number) => {
    await api(`projects/${id}/client-ok`)

    useToasterStore().showSuccessToaster('تم تسليم المشروع بنجاح')
}

  return {
    offer,
    offers,
    proposal,
    proposals,
    filters,
    finish,
    isContributor,
    list,
    create,
    get,
    propose,
    listProposals,
    acceptProposal,
    rejectProposal,


    milestone,
    resetMilestone,
    createMilestone,
  }
})
