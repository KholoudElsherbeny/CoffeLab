<template>
  <div class="login_page">
    <h3 class="text-2xl">{{$t("TITLES.ChooseFromOurBranches")}}</h3>
    <div class="justify-center w-full gap-4 max-h-[400px] flex flex-col overflow-y-auto scroll items-center ">
      <div class="city_card relative " v-for="branch in branches" :key="branch.id">
        <input 
            :name="branch.id"
            type="radio"
            :id="branch.id"
            :value="branch.id"
            v-model="yourBranch"
        />
        <label :for="branch.id">
          <span class="flex font-semibold gap-4" >
            <img width="" height="" src="@/assets/images/location.png"/>
            {{branch.city.name}}
          </span>
          <span class="cycile_span">
          </span>
        </label>
        <p>
          {{branch.location}}
        </p>
      </div>
      <!-- <nuxt-link :to="localePath('/')" class="base_button w-full" @click="goToBranch">
        {{$t("BUTTONS.enterApp")}}
      </nuxt-link> -->
    </div>
    <nuxt-link :to="localePath('/')" class="base_button w-full mt-4" @click="goToBranch">
      {{$t("BUTTONS.enterApp")}}
    </nuxt-link>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~/stores/global";
const store = useGlobalStore();
// const config = useRuntimeConfig();
// const baseURL = config.public.baseURL;
const localePath = useLocalePath();
const i18n = useI18n();
definePageMeta({
  layout: "auth",
  middleware: "guest",
});
useHead({
  title: i18n.t("nav.login"),
});
const branches = ref(null);
const { data: res } = await useAPILazyFetch("branches", {
  method: "GET",
});
watch(res, (res) => {
  if (res) {
    branches.value = res.data;
    // useCookie('yourBranch').value= res.data.token
    // store.fetchProfile(res.data.token);
  }
});
const yourBranch = useCookie(
  'yourBranch',
  {
    default: () => (null),
    watch: true
  }
)
if (yourBranch.value && yourBranch.value !== null) {
  yourBranch.value; // userInfo cookie not update with this change
}

</script>
<style lang="scss" scoped>
.login_page{
  h3{
    font-size: 28px;
  }
}
.city_card{
  border:1px solid ;
  padding:20px 20px 10px;
  @apply border-grayDark;
  width: 100%;
  border-radius: 10px;
  label{
    @apply text-secondary flex justify-between items-center;
    font-size: 15px;
    span.cycile_span{
      position: relative;
      border:1px solid ;
      @apply  border-grayDark flex justify-between items-center;
      width:18px;
      height: 18px;
      padding: 2px;
      border-radius: 50%;
      transition:0.2s all linear;
      &::before{
        content:'';
        transition:0.2s all linear;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  p{
    @apply text-secondary font-normal w-full mt-[10px];
    font-size: 14px;
  }
  input[type="radio"]{
    display: none;
    &:checked + label span {
      @apply  border-primary;
      &::before{
          @apply bg-primary;
        }
    }
  }
  // input[]{}
}
</style>

