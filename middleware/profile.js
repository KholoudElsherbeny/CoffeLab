export default defineNuxtRouteMiddleware((to, from) => {
  if (!!useCookie('session-token').value) {
    return navigateTo("/profile/orders");
  }
})
