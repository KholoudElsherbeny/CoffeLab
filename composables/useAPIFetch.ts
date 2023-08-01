// import { useFetch } from "#app"
// type useFetchType = typeof useFetch
// export const useAPIFetch: useFetchType = (path, options = {}) => {
//     const config = useRuntimeConfig()
//     if (process.client) {
//       options.baseURL = config.public.baseURL
//       options.headers = {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       }
//       const token = useCookie("token").value || null;
//       if (token) {
//         options.headers['Authorization'] = `Bearer ${token}`
//       }
//     }
//     // modify options as needed
//     return useFetch(path, options)
// }
import { useFetch } from "#app"
type useFetchType = typeof useFetch
export const useAPIFetch: useFetchType = (path, options = {}) => {
    const config = useRuntimeConfig()
    const i18n = useI18n()
    if (process.client) {
        options.baseURL = config.public.baseURL
        options.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            lang: i18n.locale.value,
            'Accept-Language': i18n.locale.value,
        }

    }
    // modify options as needed


    return useFetch(path, options)
}