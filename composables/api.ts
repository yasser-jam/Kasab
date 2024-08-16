export default (url: string, options?: any) => {
  // const baseUrl = "https://freelancer-l1w8.onrender.com/api";
  const baseUrl = "http://192.168.84.45:8000/api";

  const token = useCookie('access_token')

  return $fetch(`${baseUrl}/${url}`, {
    headers: {
      'Authorization': `Bearer ${token.value}`
      // Include other necessary headers
    },

    ...options,
  }) as any;
};
