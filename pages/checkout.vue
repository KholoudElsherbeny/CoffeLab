<template>
    <div class="checkout_page_wrapper">
        <div class="container mx-auto">
            <div class="flex  justify-between items-start flex-wrap  mt-[25px]">
                <div  class="checkout_steps w-[100%] lg:w-[69%] flex  justify-between items-start flex-wrap">
                    <div class=" p-[0px] w-[100%] lg:w-[59%]">
                        <h5 class="">
                            {{$t("TITLES.addressDetails")}}
                        </h5>
                        <div class=" flex justify-start items-center gap-x-[15px] pt-[13px] px-[20px]">
                            <img src="@/assets/images/location_blue.png" width="" height="" alt="icon"/>
                            <span class="text-grayDark text-[15px]">Al-Jamhuriya Street , Mansoura , Egypt</span>
                        </div>
                    </div>
                    <div class="w-[100%] lg:w-[39%]">
                        <h5 >
                            {{$t("TITLES.paymentMethod")}}
                        </h5>
                        <div class=" flex justify-start items-center gap-x-[15px] pt-[13px] px-[20px]">
                            <img src="@/assets/images/payment-method.png" width="" height="" alt="icon"/>
                            <span class="text-grayDark text-[15px]">Cash</span>
                        </div>
                    </div>
                    <div class="w-[100%] products_wrapper ">
                        <div class="flex justify-between items-center">
                            <h5 class="">
                                {{$t("TITLES.orderDetails")}}
                            </h5>
                            <h5  class="">
                                Order number 32
                            </h5>
                        </div>
                        <div class="status_bar_wrapper p-[20px] flex justify-start items-center gap-x-[10px] gap-y-[10px] flex-wrap">
                            <div class="flex justify-start items-center gap-x-[7px]">
                                <span class="checked active_span" >
                                </span>
                                <span  class="text-secondary text-[14px]">
                                    {{$t("TITLES.newOrder")}}
                                </span>
                            </div>
                            <div class="flex justify-start items-center gap-x-[10px]">
                                <span class="checked active_span" >
                                </span>
                                <span  class="text-secondary text-[16px]">
                                    {{$t("TITLES.inTheKitchen")}}
                                </span>
                            </div>
                            <div class="flex justify-start items-center">
                                <span class="checked active_span" >
                                </span>
                                <span  class="text-secondary text-[16px] p-x-[10px]">
                                    {{$t("TITLES.inTheRoad")}}
                                </span>
                            </div>
                            <div class="flex justify-start items-center gap-x-[10px]">
                                <span class="checked active_span" >
                                </span>
                                <span  class="text-secondary text-[16px]">
                                    {{$t("TITLES.completed")}}
                                </span>
                            </div>
                        </div>
                        <div class="product_wrapper flex flex-wrap justify-between items-center mb-[20px] px-[20px] " 
                                    v-for="product in products.slice(0,3)" :key="product.id">
                            <div class="flex justify-start items-center gap-x-[15px]">
                                <img :src="product.image" :alt="product.title" width="80" height="80" class="rounded-[4px]" />
                                <span class="text-secondary text-[15px]">
                                    {{product.title}}
                                </span>
                            </div>
                            <span class="text-primary text-[16px] font-bold">
                                {{product.price}} {{product.currency}}
                            </span>
                        </div>
                    </div>
                </div>
                <GeneralOrderSummary :cardData="order_summary" 
                                    class=" lg:w-[29%] w-[100%]"
                                    :buttonText="$t('BUTTONS.sendOrder')"
                                    route="/" />
            </div>
            <GeneralProductsSection :products='products'
                            :section-title='$t("TITLES.youMayAlsoLike")'/>
        </div>
    </div>
</template>
<script setup>
const order_summary = reactive({
        id:2,
        currency:"EGP",
        items:3,
        total_price:700,
        order_price:500,
        delivery_price:200,

});
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
.checkout_page_wrapper{
    background: #fff;
    padding-block: 30px;
    .checkout_steps{
        >div{
            @apply bg-lightGray rounded-[20px] py-[20px] mb-[25px];
            h5{
                border-bottom: 1px solid ;
                @apply font-semibold text-[20px] px-[20px] pb-[20px] text-secondary border-mediumGray;
                span{
                    @apply text-grayDark text-[18px];
                }
            }
        }
        .status_bar_wrapper{
            >div{
                @apply relative flex md:pe-[80px] pe-[40px];
                &::before{
                    content:'';
                    @apply bg-primary h-[0.8px] absolute md:w-[80px] w-[40px];
                    right: -5px;
                    top: 50%;
                    transform: translatey(-50%);
                }
            }
            >div:last-of-type{
                padding-inline-end: 0px;
                &::before{
                    width: 0;
                }
            }
            .checked{
                border: 1px solid ;
                width: 25px;
                height: 25px;
                border-radius: 50%;
                box-sizing:border-box;
                @apply border-primary block relative ;
            }
            .active_span{
                &::before{
                    content:'';
                    @apply bg-primary w-[20px]  h-[20px] rounded-[50%] absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50% ,-50%);
                }
            }
        }
        .products_wrapper{
            h5{
                border-bottom: none;
            }
            .product_wrapper{
                border-bottom: 1px solid ;
                @apply  pb-[20px] border-mediumGray; 
            }
            .product_wrapper:last-of-type{
                border-bottom: 0;
                padding-block-end: 0;
                margin-block-end: 0;
            }
        }
    }
}
</style>