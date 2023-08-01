<template>
    <div class="contact_us_wrapper">
        <div class="container mx-auto flex justify-between  flex-wrap  gap-y-[30px]" >
            <div class="lg:w-[50%] w-[100%]">
                <img    src="@/assets/images/contact.png"
                        width="" height="" style="object-fit:contain;rounded-[20px]"  alt=""/>
            </div>
            <div  class="lg:w-[42%] w-[100%] flex justify-start  items-start flex-col gap-[20px] points_wrapper  bg-lightGray rounded-[20px] p-[30px] ">
                    <h4 class="text-secondary font-semibold text-[20px]">
                        {{$t("nav.contact")}}
                    </h4>
                    <form class="w-full"  @submit.prevent="sendMessage">
                        <div class="p-float-label bg-white  border-mediumGray border-[1px] my-[35px] w-[100%] rounded-[10px]">
                            <InputText id="value" class="w-full" v-model="form.full_name" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
                            <label for="value">{{$t("forms.labels.name")}}</label>
                        </div>
                        <div class="p-float-label bg-white  border-mediumGray border-[1px] my-[35px] w-[100%] rounded-[10px]">
                            <InputText id="value" class="w-full" v-model="form.phone" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
                            <label for="value">{{$t("forms.labels.phoneNumber")}}</label>
                        </div>
                        <div class="p-float-label text_area_wrapper  ">
                            <Textarea v-model="form.content" rows="5" cols="" autoResize  class="w-full border-none h-full"/>
                            <label>{{$t("forms.labels.yourMessage")}}</label>
                        </div>
                        <input type="submit" class="base_button rounded-[15px] w-full block mb-[30px] mt-[30px]" :value="$t('BUTTONS.save')"/>
                    </form>
            </div> 
            <div class="w-full">
                <GeneralCustomMap />
            </div>
        </div>
    </div>
</template>
<script setup>
import { useToast } from "vue-toastification";
const config = useRuntimeConfig();
const baseURL = config.public.baseURL;
const i18n = useI18n();
const toast = useToast();
const token = useCookie("token");
const headers = {
  Accept: "application/json",
  lang: i18n.locale.value,
  "Accept-Language": i18n.locale.value,
};
if (token.value) {
  headers.Authorization = `Bearer ${token.value}`;
}
const form = ref({
  full_name: null,
  phone: null,
  content: null,
});
const sendMessage = async () => {
  try {
    const frmData = new FormData();
    if (form.value.full_name) {
      frmData.append("fullname", form.value.full_name);
    }
    if (form.value.phone) {
      frmData.append("phone", form.value.phone);
    }
    if (form.value.content) {
      frmData.append("content", form.value.content);
    }
    const { data } = await $fetch(`${baseURL}contact`, {
      method: "post",
      headers: headers,
      body: frmData,
    });
    toast.success("Successfully", {
        position: "top-right",
      });
    form.value = {
        fullname: null,
        phone: null,
        content: null,
    };
    console.log(data);
  } catch (err) {
    toast.error(err.response._data.message);
  }
};   
</script>

<style lang="scss">
.contact_us_wrapper{
    @apply lg:py-[70px] py-[20px] bg-white;
}
</style>