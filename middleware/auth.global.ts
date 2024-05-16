export default defineNuxtRouteMiddleware((to, from) => {

    if (to.path.includes('auth')) return

    // get token from cookie
    const token = useCookie('access_token')

    if (!token.value) {
        return navigateTo('/auth/login')
    }
  })