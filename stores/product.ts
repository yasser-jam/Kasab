export const useProductStore = defineStore('product', () => {
    
    const product = ref<Product>(initProduct())
    const products = ref<Product[]>([])
    
    const reset = () => product.value = initProduct()

    const create = async () : Promise<void> => {
        await api('products', {
            method: 'POST',
            body: {
                ...product.value
            }
        })
    }


    const list = async () : Promise<Product[]> => {
        const res = await api(`product`)

        products.value = res?.data

        return products.value
    }

    const get = async (id: number) : Promise<Product> => {
        const res = await api(`product/${id}`)

        product.value = res?.data

        return product.value
    }

    return {
        product,
        products,

        list,
        reset,
        get,
        create
    }
})