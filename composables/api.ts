export default (url: string, options?: any) => {
    
    const baseUrl = 'https://freelancer-l1w8.onrender.com/api/'
    
    return $fetch(`https://freelancer-l1w8.onrender.com/api/${url}`, {
        ...options
    })
}