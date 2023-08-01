<template>
    <div class="auth_layout min-h-[100vh] flex flex-wrap justify-center flex-column">
        <div class="w-full relative">
            <img src="@/assets/images/auth_top.png" class="auth_top" alt="auth" width="" height=""/>
            <img src="@/assets/images/auth_bottom.png" class="auth_bottom"  alt="auth" width="" height=""/>
            <div class="container  h-[100%] z-[50] relative">
                <section class="flex mt-[20px] flex-col justify-start items-center gap-[40px]  h-[100%]">
                <div class="logo">
                    <nuxt-link :to="localePath('/')">
                        <img src="~/assets/images/logo/logo.svg" alt="logo image" />
                    </nuxt-link>
                </div>
                <div class="core_content_wrapper flex justify-between items-start  flex-row bg-white">
                    <div class="image_wrapper lg:w-[49%] w-[100%] lg:block hidden">
                        <img src="@/assets/images/auth_bg.png" alt="auth" width="" height=""/>
                    </div>
                    <div class="form_wrapper lg:w-[49%] w-[100%] mx-auto">
                        <slot />
                    </div>
                </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
const i18n = useI18n();
useHead({
  titleTemplate: `${i18n.t("appName")} | %s`,
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Lawyer auth App Desc Will Go Here",
    },
  ],
});
</script>

<style lang="scss">
.auth_layout {
    overflow: hidden;
    .core_content_wrapper{
        box-shadow: 0px 0px 45px rgba(77, 40, 20, 0.08);
        border-radius: 20px;
        overflow: hidden;
        .image_wrapper{
            min-width: 530px;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
        }
        .form_wrapper{
            min-width: 450px;
        }
    }
    .auth_bottom,.auth_top{
        position: absolute;
        width:200px;
        height: 200px;
        object-fit: contain;
    }
    .auth_top{
        top: -15px;
        right: 0;
    }
    .auth_bottom{
        bottom: -15px;
        left: 0;
    }
}
</style>
