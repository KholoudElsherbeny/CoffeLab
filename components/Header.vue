<template>
  <header id="header" class="fixed left-0 top-0 z-50 bg-white w-full">
    <div class="container mx-auto">
      <nav
      class="flex items-center justify-between"
      >
      <div class="logo">
        <nuxt-link class="text-primary" :to="localePath('/')">
          <img
            src="~/assets/images/logo/logo.svg"
            class="md:max-w-[140px] max-w-[100px]"
            alt="logo"
        /></nuxt-link>
      </div>
      <div class="main_links lg:block hidden">
        <ul>
          <li>
            <nuxt-link :to="localePath('/')">
              {{ $t("nav.home") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/categories')">
              {{ $t("nav.ourMenu") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/offers')">
              {{ $t("nav.offers") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/about-us')">
              {{ $t("nav.about") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/contact-us')">
              {{ $t("nav.contact") }}
            </nuxt-link>
          </li>
        </ul>
      </div>
        <div class="lg:block hidden">
          <div  v-if="isLoggedIn" >
            <ul>
              <li>
                <nuxt-link
                  :to="localePath('/cart')"
                  v-badge.danger="data.quantity"
                  class="cart_wrapper p-overlay-badge"
                  style="font-size: 14px"
                >
                  <img src="@/assets/images/Vector.png" />
                </nuxt-link>
              </li>
              <li>
                <button @click="visible = true">
                  <img src="@/assets/images/scanbarcode.png" width="25" />
                </button>
              </li>
              <li>
                <nuxt-link :to="localePath('/profile/account')">
                  <img src="@/assets/images/profilecircle.png" />
                </nuxt-link>
              </li>
              <li>
                <img src="@/assets/images/flag.png" />
              </li>
              <li>
                <button type="submit" class="base_button" @click="logout">
                  {{ $t("BUTTONS.Logout") }}
                </button>
              </li>
            </ul>
          </div>
          <div  v-if="!isLoggedIn">
            <nuxt-link :to="localePath('/auth/login')" class="base_button">
              {{ $t("BUTTONS.signUp") }}
            </nuxt-link>
          </div>
        </div>
        <button class="lg:hidden block" @click="openSmallMenu = true">
          <img src="@/assets/images/menu.png" />
        </button>
      </nav>
    </div>
    <Dialog
      v-model:visible="visible"
      :header="false"
      :closable="false"
      class="p-dialog-center"
      :style="{ width: '500px' }"
      position="center"
      :modal="true"
      :draggable="false"
    >
      <div class="flex justify-center relative">
        <button @click="visible = false" class="absolute top-[0px] right-[20px]">
          <img src="@/assets/images/closesquare.png" alt="logo" width="" height="" />
        </button>
      </div>
      <div class="otp_pop_up">
        <h5 class="text-secondary text-[19px] font-semibold mx-auto inline-block w-fit">
          {{ $t("TITLES.ScanQRCode") }}
        </h5>
        <div class="flex justify-center items-start my-[30px]">
          <img src="@/assets/images/code.png" width="" height="" alt="code" />
        </div>
      </div>
      <template #footer>
        <Button label="No" icon="pi pi-times" @click="visible = false" text />
        <Button label="Yes" icon="pi pi-check" autofocus />
      </template>
    </Dialog>
    <div class="links_list_in_small_screen" :class="{ open_small_menu: openSmallMenu }">
      <button class="absolute right-[20px] top-[20px]" @click="openSmallMenu = false">
        <img src="@/assets/images/closeMenu.png" />
      </button>
      <div>
        <ul>
          <li>
            <nuxt-link :to="localePath('/')">
              {{ $t("nav.home") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/categories')">
              {{ $t("nav.ourMenu") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/offers')">
              {{ $t("nav.offers") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/about-us')">
              {{ $t("nav.about") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/contact-us')">
              {{ $t("nav.contact") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="">
              {{ $t("nav.FAQs") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="">
              {{ $t("nav.termsOfService") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/how-to-shop')">
              {{ $t("nav.howToShop") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="">
              {{ $t("nav.returnsPolicy") }}
            </nuxt-link>
          </li>
        </ul>
        <div >
          <div  v-if="isLoggedIn" >
            <ul class="buttons_wrapper">
              <li>
                <nuxt-link
                  :to="localePath('/cart')"
                  v-badge.danger="data.quantity"
                  class="cart_wrapper p-overlay-badge"
                  style="font-size: 14px"
                >
                  <img src="@/assets/images/Vector.png" />
                </nuxt-link>
              </li>
              <li>
                <button @click="visible = true">
                  <img src="@/assets/images/scanbarcode.png" width="25" />
                </button>
              </li>
              <li>
                <nuxt-link :to="localePath('/profile/account')">
                  <img src="@/assets/images/profilecircle.png" />
                </nuxt-link>
              </li>
              <li>
                <img src="@/assets/images/flag.png" />
              </li>
              <li>
                <button type="submit" class="base_button" @click="logout">
                  {{ $t("BUTTONS.Logout") }}
                </button>
              </li>
            </ul>
          </div>
          <div  v-if="!isLoggedIn" class="my-5">
            <nuxt-link :to="localePath('/auth/login')" class="base_button">
              {{ $t("BUTTONS.signUp") }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useGlobalStore } from "~/stores/global";
const router = useRouter();
const toast = useToast();
const visible = ref(false);
const localePath = useLocalePath();
const openSmallMenu = ref(false);
const store = useGlobalStore();
const isLoggedIn = !!useCookie("token").value;

const logout = async () => {
  try {
    const data = await useAPILazyFetch("logout", {
      method: "post",
    });
    console.log(data);
    console.log("succes");
    useCookie('token').value = null;
    useCookie('yourBranch').value = null;
    useCookie('yourCity').value = null;
    router.push(localePath(`/auth/login`));
  } catch (err) {
    console.log(err);
  }
};
const data = reactive({
  size: null,
  items: [],
  quantity: 1,
  totalOrder: 50.0,
  fav: false,
});
</script>

<style lang="scss">
#header {
  box-shadow: 0px 2px 25px rgba(80, 80, 80, 0.1);
  @apply md:py-[12px] sm:py-[12px];
  ul {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    column-gap: 40px;
    li {
      position: relative;
      a {
        display: inline-block;
        transition: 0.4s all linear;
        &:hover {
          transform: scale(1.08);
          @apply text-primary;
        }
      }
      .router-link-active,
      .router-link-exact-active {
        transform: scale(1.08);
        @apply text-primary;
      }
    }
    .cart_wrapper {
      position: relative;
      .p-badge {
        // max-width: 16px ;
        // height: 16px;
      }
      .badge_wrapper {
        width: 20px;
        position: absolute;
        left: -13px;
        top: -5px;
      }
    }
  }
  .links_list_in_small_screen {
    transition: 0.5s all linear;
    @apply lg:left-[-100%] fixed top-[0] bottom-[0] left-[-100%]  w-[100%]  bg-[#0005];
    > div {
      @apply bg-primary max-w-[500px] w-full h-[100%] p-[25px];
      ul {
        @apply flex flex-col justify-start items-start gap-y-[20px];
        li {
          @apply block text-white;
          a {
            transition: 0.4s all linear;
            &:hover {
              transform: translatex(20px) scale(1);
              @apply text-secondary font-medium;
            }
          }
          .router-link-active,
          .router-link-exact-active {
            transform: translatex(20px) scale(1);
            @apply text-secondary font-medium;
          }
        }
      }
    }
    ul.buttons_wrapper {
      @apply flex justify-start items-end flex-row mt-[25px];
      li {
        display: inline-block;
        a {
          &:hover {
            transform: translatex(0px) scale(1);
            @apply text-secondary font-medium;
          }
        }
        .router-link-active,
        .router-link-exact-active {
          transform: translatex(0px) scale(1);
          @apply text-secondary font-medium;
        }
      }
    }
  }
  .open_small_menu {
    transition: 0.5s all linear;
    @apply left-[0];
    .base_button{
      @apply bg-white text-primary
    }
  }
}
</style>
