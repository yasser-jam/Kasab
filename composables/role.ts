export const getRole = () => {
    const authStore = useAuthStore()

    const { user } = storeToRefs(authStore)

    return user.value.role
}