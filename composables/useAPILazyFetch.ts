
// import { useLazyFetch } from "#app"
// type useLazyFetchType = typeof useLazyFetch
// export const useAPILazyFetch: useLazyFetchType = (path, options = {}) => {
//     const config = useRuntimeConfig()
//     const i18n = useI18n()
//     if (process.client) {
//         // const i18n = useI18n()
//         options.baseURL = config.public.baseURL
//         options.headers = {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             lang: i18n.locale.value,
//             'Accept-Language': i18n.locale.value,
//         }
//         const token = useCookie("token").value || null;
//         if (token) {
//             options.headers['Authorization'] = `Bearer ${token}`
//         }
//     }
//     // modify options as needed
//     return useLazyFetch(path, options)
// }

import { useLazyFetch } from "#app"
type useLazyFetchType = typeof useLazyFetch
export const useAPILazyFetch:useLazyFetchType = (path, options = {}) => {
  const config = useRuntimeConfig()
  if (process.client) {
    options.baseURL = config.public.baseURL
    options.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    const token = useCookie("token").value || null;
    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`
    }
  }
  // modify options as needed
  return useLazyFetch(path, options)
}