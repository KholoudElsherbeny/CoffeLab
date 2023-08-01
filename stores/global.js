export const useGlobalStore = defineStore('global', {
  state: () => ({
    profile: null,
  }),

  getters: {
    getProfile: (state) => state.profile,
  },
  actions: {
    async fetchProfile() {
      if (process.client) {

        const { data } = await useAPILazyFetch(`/${useCookie('token').value}verify`, {
          method: 'GET',
        })
        watch(data, (data) => {
          this.profile = data.data
        })
      } else{
        this.profile = null
      }

    },
  },
})

