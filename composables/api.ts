export default (url: string, options?: any) => {
  const toasterStore = useToasterStore()

  // const baseUrl = "https://freelancer-l1w8.onrender.com/api";
  const baseUrl = 'https://67ae-93-190-140-122.ngrok-free.app/api'

  const token = useCookie('access_token')

  return $fetch(`${baseUrl}/${url}`, {
    headers: {
      Authorization: `Bearer ${token.value}`
      // Include other necessary headers
    },

    ...options
  }).catch((error: any) => {
    console.log(error.statusCode)
    switch (error.statusCode) {
      case 422:
        toasterStore.showErrorToaster('خطأ في المعلومات المدخلة')
        break
      case 500:
        toasterStore.showErrorToaster('حدث خطأ من الخادم')
        break
      default:
        toasterStore.showErrorToaster('حدث خطأ من الخادم')
    }
  })
}
