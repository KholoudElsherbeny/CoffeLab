<template>
  <div>
    <Header /> 
    <div class="app_wrapper profile_page bg-white " id="app_wrapper">
        <div class="container flex justify-between relative items-start gap-x-[1%]  my-[40px] md:mt-[50px]">
            <div class="lg:w-[32.5%] w-[100%] bg-lightGray rounded-[20px] p-[20px] lg:block hidden" v-if="profile">
              <div class="flex justify-between items-center mb-[20px] gap-x-[15px]">
                <div class="flex justify-start items-center gap-x-[15px]">
                  <img :src="profile.image" width="90" height="90" style="rounded-[8px]" alt="" />
                  <h6 class="font-semibold text-secondary text-[18px]">
                    {{profile.fullname}}<br>
                    <span class="font-normal text-secondary text-[14px]">{{profile.phone}}</span>
                    </h6>
                </div>
                <nuxt-link :to="localePath('/profile/account')">
                  <img src="@/assets/images/edit2.png" width="25" height="25" alt=""/>
                </nuxt-link>
              </div>
              <ul class="account_list_links">
                <li class="mt-[20px]">
                  <nuxt-link :to="localePath('/profile/orders')">
                      <div>
                          <img src="@/assets/images/bag2.png" width="" height="" alt="" />
                          <span>{{$t("TITLES.orders")}}</span>
                      </div>
                      <img src="@/assets/images/angleRight.png" width="" height="" alt="" />
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/profile/points')">
                      <div>
                          <img src="@/assets/images/points.png" width="" height="" alt="" />
                          <span>{{$t("TITLES.points")}}</span>
                      </div>
                      <img src="@/assets/images/angleRight.png" width="" height="" alt="" />
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/profile/account')">
                      <div>
                          <img src="@/assets/images/useredit.png" width="" height="" alt="" />
                          <span>{{$t("TITLES.profile")}}</span>
                      </div>
                      <img src="@/assets/images/angleRight.png" width="" height="" alt="" />
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/profile/offers')">
                      <div>
                          <img src="@/assets/images/gift.png" width="" height="" alt="" />
                          <span>{{$t("TITLES.offersAndDiscounts")}}</span>
                      </div>
                      <img src="@/assets/images/angleRight.png" width="" height="" alt="" />
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/profile/addresses')">
                      <div>
                            <img src="@/assets/images/location_blue.png" width="" height="" alt="" />
                            <span>{{$t("TITLES.addresses")}}</span>
                      </div>
                      <img src="@/assets/images/angleRight.png" width="" height="" alt="" />
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/profile/notifications')">
                      <div>
                          <img src="@/assets/images/notificationbing.png" width="" height="" alt="" />
                          <span>{{$t("TITLES.notificationOnOf")}}</span>
                      </div>
                      <button class="card flex justify-content-center">
                          <InputSwitch v-model="checked" />
                      </button>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/about-us')">
                      <div>
                          <img src="@/assets/images/information.png" width="" height="" alt="" />
                          <span>{{$t("TITLES.aboutUs")}}</span>
                      </div>
                    <img src="@/assets/images/angleRight.png" width="" height="" alt="" />
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/terms-and-conditions')">
                      <div>
                          <img src="@/assets/images/clipboardtext.png" width="" height="" alt="" />
                          <span>{{$t("TITLES.tremsAndConditions")}}</span>
                      </div>
                      <img src="@/assets/images/angleRight.png" width="" height="" alt="" />
                  </nuxt-link>
                </li>
                <li >
                  <button class="flex justify-between items-center w-full" @click="visible=true">
                      <div class="flex justify-between items-center gap-x-[15px]">
                          <img src="@/assets/images/logincurve.png" width="" height="" alt="" />
                          <span>{{$t("TITLES.logout")}}</span>
                      </div>
                      <img src="@/assets/images/angleRed.png" width="" height="" alt="" />
                  </button>
                </li>
              </ul>
            </div>
            <button class="absolute top-[-40px] right-[20px] lg:hidden block" @click="openSmallMenu=true">
              <img src="@/assets/images/menu2.png" />
            </button>
            <div class="lg:w-[67.5%] w-[100%]">
                <slot  :transition="{
                          name: 'bounce',
                          mode: 'out-in'
                        }" />
            </div>
        </div>
    </div>
    <client-only>
      <teleport to='body' >
        <div class="profile_menu_in_small_screen lg:hidden z-[5000] block fixed bg-[#0005] left-[-100%] bottom-0 top-0  w-full"  :class="{'open_profile_menu':openSmallMenu}">
          <button class="absolute right-[20px] top-[20px]" @click="openSmallMenu=false">
            <img src="@/assets/images/closeMenu.png"/>
          </button>
          <div class=" w-[350px] bg-lightGray h-[100%]  p-[20px]" >
                  <div class="flex justify-between items-center mb-[20px] gap-x-[15px]">
                    <div class="flex justify-start items-center gap-x-[15px]">
                      <img src="@/assets/dammyImages/dammyuser.png" width="90" height="90" style="rounded-[8px]" alt="" />
                      <h6 class="font-semibold text-secondary text-[18px]">
                        Alaa Abd El-Rahman<br>
                        <span class="font-normal text-secondary text-[14px]">+20 01066808044</span>
                        </h6>
                    </div>
                    <nuxt-link :to="localePath('/profile/account')"   @click="openSmallMenu=false">
                      <img src="@/assets/images/edit2.png" width="25" height="25" alt=""/>
                    </nuxt-link>
                  </div>
                  <ul class="account_list_links">
                    <li class="mt-[20px]"   @click="openSmallMenu=false">
                      <nuxt-link :to="localePath('/profile/orders')">
                          <div>
                              <img src="@/assets/images/bag2.png" width="" height="" alt="" />
                              <span>{{$t("TITLES.orders")}}</span>
                          </div>
                          <img src="@/assets/images/angleRight.png" width="" height="" alt="" />
                      </nuxt-link>
                    </li>
                    <li   @click="openSmallMenu=false">
                      <nuxt-link :to="localePath('/profile/points')">
                          <div>
                              <img src="@/assets/images/points.png" width="" height="" alt="" />
                              <span>{{$t("TITLES.points")}}</span>
                          </div>
                          <img src="@/assets/images/angleRight.png" width="" height="" alt="" />
                      </nuxt-link>
                    </li>
                    <li   @click="openSmallMenu=false">
                      <nuxt-link :to="localePath('/profile/account')">
                          <div>
                              <img src="@/assets/images/useredit.png" width="" height="" alt="" />
                              <span>{{$t("TITLES.profile")}}</span>
                          </div>
                          <img src="@/assets/images/angleRight.png" width="" height="" alt="" />
                      </nuxt-link>
                    </li>
                    <li   @click="openSmallMenu=false">
                      <nuxt-link :to="localePath('/profile/offers')">
                          <div>
                              <img src="@/assets/images/gift.png" width="" height="" alt="" />
                              <span>{{$t("TITLES.offersAndDiscounts")}}</span>
                          </div>
                          <img src="@/assets/images/angleRight.png" width="" height="" alt="" />
                      </nuxt-link>
                    </li>
                    <li   @click="openSmallMenu=false">
                      <nuxt-link :to="localePath('/profile/addresses')">
                          <div>
                                <img src="@/assets/images/location_blue.png" width="" height="" alt="" />
                                <span>{{$t("TITLES.addresses")}}</span>
                          </div>
                          <img src="@/assets/images/angleRight.png" width="" height="" alt="" />
                      </nuxt-link>
                    </li>
                    <li   @click="openSmallMenu=false">
                      <nuxt-link :to="localePath('/profile/notifications')">
                          <div>
                              <img src="@/assets/images/notificationbing.png" width="" height="" alt="" />
                              <span>{{$t("TITLES.notificationOnOf")}}</span>
                          </div>
                          <button class="card flex justify-content-center">
                              <InputSwitch v-model="checked" />
                          </button>
                      </nuxt-link>
                    </li>
                    <li   @click="openSmallMenu=false">
                      <nuxt-link :to="localePath('/about-us')">
                          <div>
                              <img src="@/assets/images/information.png" width="" height="" alt="" />
                              <span>{{$t("TITLES.aboutUs")}}</span>
                          </div>
                        <img src="@/assets/images/angleRight.png" width="" height="" alt="" />
                      </nuxt-link>
                    </li>
                    <li   @click="openSmallMenu=false">
                      <nuxt-link :to="localePath('/terms-and-conditions')">
                          <div>
                              <img src="@/assets/images/clipboardtext.png" width="" height="" alt="" />
                              <span>{{$t("TITLES.tremsAndConditions")}}</span>
                          </div>
                          <img src="@/assets/images/angleRight.png" width="" height="" alt="" />
                      </nuxt-link>
                    </li>
                    <li  @click="openSmallMenu=false">
                      <button class="flex justify-between items-center w-full" @click="visible=true">
                          <div class="flex justify-between items-center gap-x-[15px]">
                              <img src="@/assets/images/logincurve.png" width="" height="" alt="" />
                              <span>{{$t("TITLES.logout")}}</span>
                          </div>
                          <img src="@/assets/images/angleRed.png" width="" height="" alt="" />
                      </button>
                    </li>
                  </ul>
            </div>
        </div>
      </teleport>
    </client-only>
    <Dialog v-model:visible="visible" :header="false" :closable="false" class="p-dialog-center" :style="{ width: '450px' }" position="center" :modal="true" :draggable="false">
      <div class="flex justify-center relative">
          <button @click="visible = false" class="absolute top-[0px] right-[20px]">
            <img src="@/assets/images/closesquare.png" alt="logo" width="" height=""/>
          </button>
      </div>
    <div class="otp_pop_up ">
      <h5 class="text-secondary text-[19px] font-semibold inline-block w-fit">
        {{$t("TITLES.AreYouSure")}}
      </h5>
      <div class="flex justify-between items-start my-[30px]">
          <button class="base_button w-[200px] text-center" @click="visible = false">
            {{$t("BUTTONS.KeepMeIn")}}
          </button>
          <nuxt-link :to="localePath('/auth/login')">
            <button class="close_button w-[200px] text-center " @click="logout">
              {{$t("BUTTONS.Logout")}}
            </button>
          </nuxt-link>

      </div>
    </div>
     <!-- <template #footer>
        <Button label="No" icon="pi pi-times" @click="visible = false" text />
        <Button label="Yes" icon="pi pi-check"  autofocus />
    </template> -->
    </Dialog>
    <Footer />
  </div>
</template>

<script setup>
const i18n = useI18n();
import { ref } from 'vue';
const visible=ref(false);
const checked = ref(false);
const openSmallMenu = ref(false);
const profile = ref(null);
useHead({
  titleTemplate: `%s  ${i18n.t("appName")} `,
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Starter App Desc Will Go Here",
    },
  ],
});
const logout = async () => {
  try {
    const data = await useAPILazyFetch("logout", {
      method: "post",
    });
    console.log(data);
    console.log("succes");
    // useCookie('token').value = null;
  } catch (err) {
    console.log(err);
  }
};
const { data: res } = await useAPILazyFetch("profile", {
  method: "GET",
});
watch(res, (res) => {
  if (res) {
    profile.value = res.data;
  }
});


</script>

<style lang="scss">
.profile_page{
    .account_list_links{
      li{
            border-block-end:1px solid ;
            @apply flex justify-between items-center pb-[20px] mb-[20px] border-mediumGray;
          a{
              @apply flex justify-between items-center gap-x-[15px] w-full opacity-[60%];
              transition: 0.4s all linear;
              >div{
                @apply flex justify-between items-center gap-x-[15px];
              }
              &:hover{
                opacity: 1;
              }
          }
          a.router-link-active,
          a.router-link-exact-active{
            opacity: 1;
          }
      }
      li:last-of-type{
          border-block-end:0px solid ;
          margin-block-end: 0px;
          padding-block-end: 10px;
          button{
            opacity: 60%;
            transition:0.4s all linear;
            &:hover{
              opacity: 1;
            }
          }
      }
    }
}
.profile_menu_in_small_screen{
    transition:  0.3s linear all;
  .account_list_links{
      li{
            border-block-end:1px solid ;
            @apply flex justify-between items-center pb-[20px] mb-[20px] border-mediumGray;
          a{
              @apply flex justify-between items-center gap-x-[15px] w-full opacity-[60%];
              transition: 0.4s all linear;
              >div{
                @apply flex justify-between items-center gap-x-[15px];
              }
              &:hover{
                opacity: 1;
              }
          }
          a.router-link-active,
          a.router-link-exact-active{
            opacity: 1;
          }
      }
      li:last-of-type{
          border-block-end:0px solid ;
          margin-block-end: 0px;
          padding-block-end: 10px;
          button{
            opacity: 60%;
            transition:0.4s all linear;
            &:hover{
              opacity: 1;
            }
          }
      }
    }
}
.open_profile_menu{
    transition:  0.3s linear all;
    @apply left-[0px];
}
.p-dialog .p-dialog-content {
    padding: 0 1.5rem 0rem 1.5rem;
}
.p-dialog .p-dialog-header {
    padding: 10px;
}
.p-dialog .p-dialog-footer {
    padding: 0 1.5rem 0rem 1.5rem;
}
</style>
