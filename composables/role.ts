export const getRole = () => {
    const authStore = useAuthStore()

    const { user } = storeToRefs(authStore)

    return user.value.role
}

export const isOwner = (roleId: number) => {
    const authStore = useAuthStore()

    const { user } = storeToRefs(authStore)

    return user.value.role_id == roleId
}