<template>
  <div class="login_page">
      <h3>{{$t("TITLES.welcome")}}</h3>
      <VeeForm
        as="div"
        @submit="onSubmit"
        :validation-schema="schema">
        <form class="form_content" @submit.prevent="onSubmit">
          <div class="input_wrapper w-96">
            <label for="phone_number">{{$t("forms.labels.phoneNumber")}}</label>
            <input 
              id="phone_number"
              name="phone"
              type="number"
              v-model="register_Form.phone"
            />
          </div>
          <button
            :disabled="loading || !register_Form.phone"
            class="base_button mt-6 w-96">
              {{$t("BUTTONS.login")}}
          </button>
        </form>
      </VeeForm>
      <Dialog v-model:visible="visible" :header="false" :closable="false" class="p-dialog-center w-96 max-h-max"  position="center" :modal="true" :draggable="false">
        <div class="flex justify-center relative ">
            <button @click="visible = false" class="absolute top-[20px] right-[20px]">
              <img src="@/assets/images/close_icon.png" alt="logo" width="15" height=""/>
            </button>
            <img src="@/assets/images/small_logo.png" alt="logo" width="" height=""/>
        </div>
        <div class="otp_pop_up ">
          <h2 class="mx-5 my-5">
            <span class="text-2xl capitalize font-bold leading-8 block text-secondary">
              {{$t("TITLES.confirmationCode")}}
            </span>
          </h2>
          <p class="max-w-[70%]  mx-5">
            <span class="text-base text-secondary">
              {{$t("descriptions.verifiyPhone")}}
            </span>
            <span class="font-bold text-secondary" v-if="register_Form.phone">{{
              "+" + " " + register_Form.phone
            }}</span>
          </p>
          <div class="register_form my-5">
            <VeeForm as="div" @submit="onSubmitcode">
              <form>
                <div
                  class="input_wrapper otp_inputs justify-between max-w-[80%] mx-auto"
                  :class="!validationcode.valid && validationcode ? 'error' : 'success'"
                >
                  <v-otp-input
                    ref="otpInput"
                    input-classes="otp-input"
                    separator=" "
                    v-model="verify_code"
                    :num-inputs="4"
                    :should-auto-focus="true"
                    input-type="letter-numeric"
                    @on-change="handleOnChange"
                    @on-complete="handleOnComplete"
                  />
                  <p class="text-red-500 text-sm mb-0"></p>
                </div>
                <p class="mb-0 mx-4 text-grayDark text-base">
                  {{ $t("descriptions.receivethecode") }}
                  <button
                  :disabled="seconds != 0 || minutes != 0"
                  class="text-secondary font-medium"
                >
                  {{ $t("BUTTONS.resend") }}
                </button>
                <bdi class="mx-5">00:{{ seconds < 10 ? "0" : "" }}{{ seconds }}</bdi>
                </p>
                <button
                type="submit"
                :disabled="!validationcode.valid || verifyBtn"
                class="base_button max-w-full mx-24 mt-4"
              >
                {{ $t("BUTTONS.Continue") }}
              </button>
            </form>
            </VeeForm>
          </div>
        </div>
      </Dialog>
  </div>
</template>

<script setup>
import VOtpInput from "vue3-otp-input";
import { ref } from "vue";
import { useToast } from "vue-toastification";
import * as yup from "yup";
import { configure } from "vee-validate";
import { useGlobalStore } from "~/stores/global";
const store = useGlobalStore();
const loading = ref(false)
const verifyBtn = ref(false)
const i18n = useI18n();
const router = useRouter();
const config = useRuntimeConfig();
const toast = useToast();
const localePath = useLocalePath();
definePageMeta({
  layout: "auth",
  middleware: "guest",
});
useHead({
  title: i18n.t("nav.login"),
});
configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});

const register_Form = reactive({
  phone: null,
});
const schema = yup.object({
  phone: yup.number().required(),
});
async function onSubmit() {
  loading.value = true
  const frmData = new FormData();
  frmData.append("username", register_Form.phone);
  frmData.append("user_type", 'client');
  try {
    await $fetch(`${config.public.baseURL}send_code`, {
      method: "POST",
      body: frmData,
      headers: {
        Accept: "application/json",
        lang: i18n.locale.value,
        "Accept-Language": i18n.locale.value,
      },
    });
    visible.value = true
    countDown();
    loading.value = false
  } catch (err) {

    loading.value = false
    toast.error(err.response._data.message);
  }
}
const visible = ref(false);
const verify_code = ref("");
const validationcode = reactive({
  valid: false,
  touched: false,
});
function handleOnComplete(event) {
  validationcode.touched = false;
  validationcode.valid = true;
  verify_code.value = event;
}
function handleOnChange() {
  validationcode.touched = true;
  validationcode.valid = false;
}
const seconds = ref(59);
const minutes = ref(0);
const emit = defineEmits(["change-step"]);
function countDown() {
  let secondsInterval = setInterval(() => {
    seconds.value--;
    if (seconds.value <= 0) {
      clearTimeout(secondsInterval);
      if (minutes.value == 0) return;
    }
  }, 1000);
}
async function onSubmitcode() {
  verifyBtn.value = true
  const frmData = new FormData();
  frmData.append("code", verify_code.value);
  frmData.append("username", register_Form.phone);
  try {
    const res = await $fetch(`${config.public.baseURL}check_code`, {
      method: "POST",
      body: frmData,
    });
    verifyBtn.value = false
    validationcode.touched = false;
    validationcode.valid = true;
    login()
    } catch (err) {
      verifyBtn.value = false
      verify_code.value =''
    toast.error(err.response._data.message);
  }
}
async function login() {
  verifyBtn.value = true
  const frmData = new FormData();
  frmData.append("code", verify_code.value);
  frmData.append("username", register_Form.phone);
  frmData.append("device_token", "dnjf");
  frmData.append("type", 'ios');
  try {
    const res = await $fetch(`${config.public.baseURL}verify`, {
      method: "POST",
      body: frmData,
    });
    useCookie('token').value= res.data.token
    store.fetchProfile(res.data.token);
    verify_code.value = ''
    router.push(localePath(`/auth/city`));
    } catch (err) {
      verifyBtn.value = false
      verify_code.value =''
      toast.error(err.response._data.message);
  }
}
</script>
<style lang="scss" >

.form_content{
  margin-block-start: 30px;
}

</style>