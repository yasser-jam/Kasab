export default (url: string, options?: any) => {
  const baseUrl = "http://192.168.0.134:8000/api";

  const token = useCookie('access_token')

  return $fetch(`${baseUrl}/${url}`, {
    headers: {
      'Authorization': `Bearer ${token.value}`
      // Include other necessary headers
    },

    ...options,
  }) as any;
};
