export const useAuthStore = defineStore('auth', () => {
    
    const token = useCookie('access_token')

    const credentials = ref<{ email: string, password: string }>({
        email: '',
        password: ''
    })

    const login = async () => {
        const res = await api('login', {
            method: 'POST',
            body: JSON.stringify(credentials.value)
        })

        token.value = res.access_token
    }

    
    return {
        credentials,
        login
    }
})