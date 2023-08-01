<template>
  <footer id="footer" class="pt-11" >
    <div class="container mx-auto relative z-30">
      <div class="flex flex-wrap justify-between">
        <div class="logo_side pe-11 lg:w-[15%] ">
          <div class="logo">
            <nuxt-link class="text-primary" :to="localePath('/')">
              <img src="~/assets/images/logo/logo.svg" alt="logo"
            /></nuxt-link>
          </div>
        </div>
        <ul class="w-[25%] md:block hidden">
          <h4>{{$t("TITLES.companyInfo")}}</h4>
          <li>
            <nuxt-link :to="localePath('/about-us')">
              {{$t("nav.about")}}
            </nuxt-link>
            </li>
          <li>
            <nuxt-link to="">
              {{$t("nav.FAQs")}}
            </nuxt-link>
            </li>
          <li>
            <nuxt-link to="">
              {{$t("nav.termsOfService")}}
            </nuxt-link>
            </li>
        </ul>
        <ul class="w-[25%] md:block hidden">
          <h4>{{$t("TITLES.helpSupport")}}</h4>
          <li>
            <nuxt-link :to="localePath('/how-to-shop')">
              {{$t("nav.howToShop")}}
            </nuxt-link>
            </li>
          <li>
            <nuxt-link :to="localePath('/contact-us')">
              {{$t("nav.contact")}}
            </nuxt-link>
            </li>
          <li>
            <nuxt-link to="">
              {{$t("nav.returnsPolicy")}}
            </nuxt-link>
            </li>
        </ul>
        <ul class="w-[25%] md:block z-4">
          <h4>{{$t("TITLES.downloadApp")}}</h4>
          <li>
            <a href="">
              <img src="@/assets/images/appstore.png"/>
            </a>
          </li>
          <li>
            <a href="">
              <img src="@/assets/images/google.png"/>
            </a>
          </li>
        </ul>
      </div>
        <p class="copyrights">
          {{ $t("TITLES.copyRights") }}
          <bdi> {{ year }} &copy; </bdi> 
          {{ $t("TITLES.AllRightsReserved") }}
        </p>
    </div>
    <img class="image_layer z-20" src="@/assets/images/footerGrop.png"/>
  </footer>
</template>

<script setup>
const props = defineProps({
  mainSettings: { required: true },
});

const btnLoading = ref(false);

const data = reactive({
  name: "",
  email: "",
  phone: "",

  message: "",
});

const year = computed(() => new Date().getFullYear());
// function submit() {
//   btnLoading.value = true;

//   const frmData = new FormData();
//   frmData.append("name", data.name);
//   frmData.append("email", data.email);
//   frmData.append("phone", data.phone);
//   frmData.append("company", data.company);
//   frmData.append("message", data.message);

//   axios
//     .post("add-contact-us", frmData)
//     .then((res) => {
//       btnLoading.value = false;
//       toaster.success(res.data.msg);
//       data.name = "";
//       data.email = "";
//       data.phone = "";
//       data.message = "";
//       data.company = null;
//       window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//       });
//     })
//     .catch((err) => {
//       btnLoading.value = false;
//       toaster.error(err.response.data.message);
//     });

//   return {
//     submit,
//     uploadImage,
//     frmData,
//     preview,
//     btnLoading,
//   };
// }
</script>

<style lang="scss">
footer {
  padding-block: 30px;
  @apply max-h-max ;
  background: #F9F9F9;
  position: relative;
  .copyrights{
    text-align: center;
    @apply text-secondary ;
    font-size: 15px;
    margin-block-start: 15px;
  }
  .image_layer{
    position: absolute;
    display: inline-block;
    object-fit: contain;
    width: 160px;
    right: 0;
    bottom: 0;
    }
  ul{
    h4{
      font-size: 20px;
    @apply text-secondary text-[15px] md:text-[20px];
      font-weight: 700
    }
    li{
    @apply text-secondary ;
    font-size: 16px;
    margin-block-start: 20px;
    a{
      display: inline-block;
      transition: 0.3s all linear;
      &:hover{
        @apply text-primary ;
        transform: translateX(15px);
      }
    }
      .router-link-active ,
      .router-link-exact-active{
          @apply text-primary;
      }
    }
  }
  .links {
    li {
      &:not(:last-child) {
        @apply mb-3;
      }
      a {
        @apply hover:text-primary;
        color: #fff;
      }
    }
  }
}
</style>
