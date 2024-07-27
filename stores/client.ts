import api from '~/composables/api'

export const useClientStore = defineStore('client', () => {
  const client = ref<Client>(initClient())

  const clients = ref<Client[]>([])

  const clientOffers = ref<ClientOffer[]>([])

  const create = async () => {
    const res = await api('client/store', {
      method: 'POST',
      body: client.value
    })

    return res?.data.id
  }

  const update = async () => {
    await api('client', {
      method: 'PUT',
      body: client.value
    })
  }

  const get = async (id: number): Promise<Client> => {
    const res = await api(`client/${id}`)

    client.value = res?.data

    return client.value
  }

  const myOffers = async (): Promise<ClientOffer[]> => {
    const res = await api(`client-offer/client/client-filter`, {
      method: 'POST',
      body: {}
    })

    clientOffers.value = res?.data

    return clientOffers.value
  }

  return {
    client,
    clientOffers,

    create,
    update,
    get,
    myOffers
  }
})
