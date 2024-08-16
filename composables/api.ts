export default (url: string, options?: any) => {
  // const baseUrl = "https://freelancer-l1w8.onrender.com/api";
  const baseUrl = "https://1812-185-177-126-102.ngrok-free.app/api";

  const token = useCookie('access_token')

  return $fetch(`${baseUrl}/${url}`, {
    headers: {
      'Authorization': `Bearer ${token.value}`
      // Include other necessary headers
    },

    ...options,
  }) as any;
};
