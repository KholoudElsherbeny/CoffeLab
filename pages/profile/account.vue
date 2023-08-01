<template>
    <div class="points_wrapper mx-auto  bg-lightGray rounded-[20px] p-[30px]   lg:max-w-[600px] ">
        <h4 class="text-secondary font-semibold text-[20px]">
            {{$t("TITLES.editProfile")}}
        </h4>
        <form  @submit.prevent="sendMessage">
            <div class="flex justify-center items-center border-2 w-[50%] my-4 mx-32">
              <label for="upload-avatar" v-if="avatarUrl">
                <img :src="avatarUrl " class="w-[100%]"  alt="Profile" />
              </label>
              <label for="upload-avatar" v-else>
                <img src="@/assets/dammyImages/placeholder.png" class="w-[100%]"  alt="Profile" />
              </label>
              <input id="upload-avatar" type="file" accept="image/*" style="display: none;" @change="handleFileUpload" />
            </div>
            <div class="p-float-label bg-white  border-mediumGray border-[1px] my-[35px] w-[100%] rounded-[10px]">
                <InputText id="value" class="w-full" type="text"  v-model="form.full_name" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
                <label for="value">{{$t("forms.labels.name")}}</label>
            </div>
            <div class="p-float-label bg-white  border-mediumGray border-[1px] my-[35px] w-[100%] rounded-[10px]">
                <InputText id="value" class="w-full"  type="text" v-model="form.phone"  :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
                <label for="value">{{$t("forms.labels.phoneNumber")}}</label>
            </div>
            <input type="submit"
            class="base_button w-full block mb-[30px] mt-[30px]" :value="$t('BUTTONS.save')"/>
        </form>
    </div>
</template>
<script setup>
definePageMeta({
  layout: "profile",
  middleware: "guest",
});
import { useToast } from "vue-toastification";
import { ref } from 'vue';
const config = useRuntimeConfig();
const baseURL = config.public.baseURL;
const i18n = useI18n();
const toast = useToast();
const token = useCookie("token").value;
const headers = {
  Accept: "application/json",
  lang: i18n.locale.value,
  "Accept-Language": i18n.locale.value,
};
if (token) {
  headers.Authorization = `Bearer ${token}`;
}
const form = ref({
  full_name: null,
  phone: null,
  image: null
});
const avatarUrl = ref('');
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    avatarUrl.value = reader.result;
  };
  reader.readAsDataURL(file);

  form.value.image = file;
};

const sendMessage = async () => {
  try {
    const frmData = new FormData();
    if (form.value.full_name) {
      frmData.append("fullname", form.value.full_name);
    }
    if (form.value.phone) {
      frmData.append("phone", form.value.phone);
    }
    if (form.value.image) {
      frmData.append("image", form.value.image);
    }
    const { data } = await $fetch(`${baseURL}profile`, {
      method: "post",
      headers: headers,
      body: frmData,
    });
    toast.success("تم ارسال التعديلات", {
        position: "top-right",
      });
    form.value = {
      full_name: null,
      phone: null,
      image: null
    };
    console.log(data);
  } catch (err) {
    toast.error(err.response._data.message);
  }
};  
</script>
<style lang="scss" scoped>
.points_wrapper{
    .points_banner{
        background: url('@/assets/images/points-bg.png');
        @apply my-[25px] bg-no-repeat bg-contain rounded-[10px];
    }
}
#upload-avatar{
  @apply bg-primary border-2
}
</style>