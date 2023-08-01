<template>
    <div class="cart_page_wrapper">
        <div class="container mx-auto">
            <div class="flex  justify-between items-center">
                    <h2 class="main_title">
                        {{$t("TITLES.shoppingCart")}}
                    </h2>
                    <nuxt-link :to="localePath('/')">
                            {{$t("BUTTONS.continueShopping")}}
                    </nuxt-link>
            </div>
            <div class="flex  justify-between items-start flex-wrap  mt-[25px]">
                <div  class="checkout_steps w-[100%] lg:w-[69%] ">
                    <div class="user_info">
                        <h5 >
                            <span>
                                0.1
                            </span> 
                            {{$t("TITLES.information")}}
                        </h5>
                        <div class="flex justify-between items-center flex-wrap gap-y-[20px]">
                            <div class="w-[50%] sm:w-[100%] flex gap-x-[15px] items-center">
                                <label for="username">{{$t('forms.labels.name')}}</label>
                                <InputText id="username" v-model="data.name" type="text" />
                            </div>
                            <div class="w-[50%] sm:w-[100%] flex gap-x-[15px] items-center">
                                <label for="phone">{{$t('forms.labels.phoneNumber')}}</label>
                                <InputText id="phone" v-model="data.phone" type="number" />
                            </div>
                        </div>
                    </div>
                    <div >
                        <h5 >
                            <span>
                                0.2
                            </span> 
                            {{$t("TITLES.delivery")}}
                        </h5>
                        <div class="flex justify-between items-center flex-wrap gap-y-[20px]">
                            <div class="md:w-[55%] w-[100%] ">
                                    <div class="flex label_wrapper justify-between items-center  w-full mb-[15px]" v-for="(address,index) in addresses" :key="index">
                                        <input
                                            :name="address.id"
                                            type="radio"
                                            :id="address.id"
                                            :value="address.id"
                                            v-model="data.address"
                                        />
                                        <label :for="address.id" class="flex  gap-x-[15px]">
                                            <img src="@/assets/images/location.png" width="21" class="h-[20px]" height="" alt=""/>
                                            <span class="include_vat">{{address.title }}</span>
                                        </label>
                                        <div class="flex items-center gap-x-[8px]">
                                            <button >
                                                <img src="@/assets/images/edit.png" width="19" height="" alt=""/>
                                            </button>
                                            <button >
                                                <img src="@/assets/images/trash.png" width="19" height="" alt=""/>
                                            </button>
                                        </div>
                                    </div>
                            </div>
                            <div class="md:w-[45%] w-[100%] flex gap-x-[15px] md:justify-end justify-center items-center">
                                <button class="base_button"> 
                                    <img src=""/>
                                    {{$t("BUTTONS.addNewAddress")}}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div >
                        <h5 >
                            <span>
                                0.3
                            </span> 
                            {{$t("TITLES.paymentMethod")}}
                        </h5>
                        <div class="flex justify-start items-center gap-[20px] flex-wrap">
                            <div class="payment_method label_wrapper" v-for="(method,index) in paymentMethods" :key="index">
                                <input
                                    :name="method.key"
                                    type="radio"
                                    :id="method.key"
                                    :value="method.key"
                                    v-model="data.payment_method"
                                />
                                <label :for="method.key">
                                    <img :src="method.icon"/>
                                    <span class="include_vat">{{method.title }}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div >
                        <h5>
                            <span>
                                0.4
                            </span> 
                            {{$t("TITLES.promoCode")}}
                        </h5>
                        <InputText id="username" v-model="data.promo_code" type="text" />
                    </div>
                </div>
                <GeneralOrderSummary :cardData="orders" 
                                    class=" lg:w-[29%] w-[100%]"
                                    :buttonText="$t('BUTTONS.continueToPay')"
                                    route="/checkout" />
            </div>
            <GeneralProductsSection :products='products'
                            :section-title='$t("TITLES.youMayAlsoLike")'/>
        </div>
    </div>
</template>
<script setup>
const branch = useCookie('yourBranch').value;
const orders = ref(null);
const { data: res } = await useAPILazyFetch(`client/${branch}/new_carts`, {
  method: "GET",
});
watch(res, (res) => {
  if (res) {
    orders.value = res.data;
  }
});
const addresses=reactive([
    {
        id:1,
        title:'Al-Jamhuriya Street , Mansoura , Egypt',
    },
    {
        id:2,
        title:'Elmaady , Cairo, Egypt',
    },
    {
        id:3,
        title:'Nasr city, Cairo, Egypt',
    }
])

const paymentMethods=reactive([
    {
        key:'cash',
        icon:new URL(`@/assets/images/payment-method.png`, import.meta.url).href,
        title:'Cash',
    },
    {
        key:'master_card',
        icon:new URL(`@/assets/images/mastercard.png`, import.meta.url).href,
        title:'MasterCard',
    },
    {
        key:'visa',
        icon:new URL(`@/assets/images/visa.png`, import.meta.url).href,
        title:'Visa',
    },
    {
        key:'paypal',
        icon:new URL(`@/assets/images/paypal-logo.png`, import.meta.url).href,
        title:'PayPal',
    }
])

const data = reactive({
    name:null,
    phone:null,
    promo_code:null,
    payment_method:null,
    address:null

})
const products = reactive([
    {
        id:1,
        image:new URL(`@/assets/dammyImages/product1.png`, import.meta.url).href,
        title:'Goji Berry Acai Herbal Tea',
        currency:"EGP",
        price:"38.00",
        include_vat:true,
        discount:null,
    },
    {
        id:2,
        image:new URL(`~/assets/dammyImages/product2.png`, import.meta.url).href,
        title:'Goji Berry Acai Herbal Tea',
        currency:"EGP",
        price:"38.00",
        include_vat:true,
        discount:null,
    },
    {
        id:3,
        image:new URL(`@/assets/dammyImages/product3.png`, import.meta.url).href,
        title:'Goji Berry Acai Herbal Tea',
        currency:"EGP",
        price:"38.00",
        include_vat:true,
        discount:null,
        },
    {
        id:4,
        image:new URL(`@/assets/dammyImages/product4.png`, import.meta.url).href,
        title:'Goji Berry Acai Herbal Tea',
        currency:"EGP",
        price:"38.00",
        include_vat:true,
        discount:null,
        },
    {
        id:5,
        image:new URL(`@/assets/dammyImages/product1.png`, import.meta.url).href,
        title:'Goji Berry Acai Herbal Tea',
        currency:"EGP",
        price:"38.00",
        include_vat:true,
        discount:null,
        },
    {
        id:6,
        image:new URL(`@/assets/dammyImages/product3.png`, import.meta.url).href,
        title:'Goji Berry Acai Herbal Tea',
        currency:"EGP",
        price:"38.00",
        include_vat:false,
        discount:"10%",
        },
    {
        id:5,
        image:new URL(`@/assets/dammyImages/product4.png`, import.meta.url).href,
        title:'Goji Berry Acai Herbal Tea',
        currency:"EGP",
        price:"38.00",
        include_vat:true,
        discount:null,
        },
    {
        id:6,
        image:new URL(`@/assets/dammyImages/product2.png`, import.meta.url).href,
        title:'Goji Berry Acai Herbal Tea',
        currency:"EGP",
        price:"38.00",
        include_vat:false,
        discount:"10%",
        },
]);
</script>

<style lang="scss">
.cart_page_wrapper{
    background: #fff;
    // padding-block: 70px;
    .checkout_steps{
        >div{
            @apply bg-lightGray rounded-[20px] p-[20px] mb-[25px];
            h5{
                @apply font-semibold text-[20px] mb-[20px] text-secondary;
                span{
                    @apply text-grayDark text-[18px];
                }
            }
            label{
                @apply text-grayDark text-[15px];
            }
            .label_wrapper{
                min-width: 150px;
                input[type="radio"] ,input[type="checkbox"] {
                    display: none;
                    &:checked + label::before {
                        background-image: url('@/assets/images/checked_colored.png');
                        background-size: 20px;
                        background-position: center;
                        @apply border-primary;
                    }
                }
                label{
                    position: relative;
                    padding-inline-start: 40px;
                    &::before{
                        content: '';
                        position: absolute;
                        left: 5px;
                        top: 0;
                        width: 20px;
                        height: 20px;
                        transition: 0.4s background-image linear;
                        border-radius: 50%;
                        border:1px solid #462514;
                    }
                }
            }
            .payment_method{
                @apply bg-white rounded-[8px] ;
                label{
                    @apply flex items-center;
                    line-height: 50px;
                    padding-inline:  10px 40px;
                    img{
                        object-fit: contain;
                        height: unset;
                        max-width: 25px;
                        display: inline-block;
                        margin-inline-end: 8px;
                    }
                    &::before{
                        content: '';
                        position: absolute;
                        left: unset;
                        right: 10px;
                        top: 50%;
                        transform: translatey(-50% );
                        }
                }
            }
        }
        .user_info{

        }
    }
}
</style>