<template>
  <div class="login_page">
    <h3 class="">{{$t("TITLES.chooseACity")}}</h3>
    <div class="flex flex-col justify-center w-full gap-[15px] scroll items-center ">
      <div class="city_card relative" v-for="city in yourcity" :key="city.id">
        <input
            :name="city.id"
            type="radio"
            :id="city.id"
            :value="city.id"
            v-model="yourCity"
        />
        <label :for="city.id">
          {{city.name}}
          <span>

          </span>
        </label>
      </div>
      <nuxt-link :to="localePath('/auth/branch')" class="base_button w-full" @click="goToBranch">
        {{$t("BUTTONS.apply")}}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const baseURL = config.public.baseURL;
const localePath = useLocalePath();
const i18n = useI18n();
definePageMeta({
  layout: "auth",
  middleware: "guest",
});
useHead({
  title: i18n.t("nav.login"),
});

let yourcity = null;
const getCity = async () => {
  const { data } = await $fetch(`${baseURL}cities`);
  yourcity = data;
};
await getCity();
const yourCity = useCookie(
  'yourCity',
  {
    default: () => (null),
    watch: true
  }
)
if (yourCity.value && yourCity.value !== null) {
  yourCity.value; // userInfo cookie not update with this change
}
</script>
<style lang="scss" scoped>
.city_card{
  border:1px solid ;
  @apply border-grayDark;
  width: 100%;
  border-radius: 10px;
  line-height: 54px;
  label{
    @apply font-normal text-secondary flex justify-between items-center;
    font-size: 16px;
    padding-inline: 20px;
    span{
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

