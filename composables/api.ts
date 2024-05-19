export default (url: string, options?: any) => {
  const baseUrl = "https://freelancer-l1w8.onrender.com/api";

  const token = useCookie('access_token')

  return $fetch(`${baseUrl}/${url}`, {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token.value}`
      // Include other necessary headers
    },

    ...options,
  }) as any;
};
