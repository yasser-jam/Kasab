export default (url: string, options?: any) => {
  const toasterStore = useToasterStore()

  // const baseUrl = "https://freelancer-l1w8.onrender.com/api";
  const baseUrl = 'http://192.168.137.163:8000/api'

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
