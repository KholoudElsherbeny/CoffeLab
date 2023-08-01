<template>
    <div class="order_summary_wrapper"   v-if="cardData">
        <h5>{{$t("TITLES.orderSummary")}}</h5>
        
        <div class="key_value_wrapper">
            <span class="key">
                {{$t("TITLES.products")}}
            </span>
            <span class="key font-semibold">
                {{cardData.qty}} {{$t("TITLES.product")}}
            </span>
        </div>
        <div class="key_value_wrapper">
            <span class="key">
                {{$t("TITLES.orderPrice")}}
            </span>
            <span class="value">
                {{cardData.product_price}} EGP
            </span>
        </div>
        <div class="key_value_wrapper">
            <span class="key">
                {{$t("TITLES.deliveryPrice")}}
            </span>
            <span class="value">
                {{cardData.deliver_price}} EGP
            </span>
        </div>
        <hr/>
        <div class="key_value_wrapper">
            <span class="key">
                {{$t("TITLES.totalPrice")}}
            </span>
            <span class="value">
                {{cardData.product_total_price}} EGP
            </span>
        </div>
        <nuxt-link v-if="route" :to="localePath(route)" class="block w-full base_button">
            {{buttonText}}
        </nuxt-link>
        <!-- <button class="go_to_shipping">
            {{$t("BUTTONS.continueToShipping")}}
        </button>
        <button class="go_to_shipping">
            {{$t("BUTTONS.continueToPay")}}
        </button> -->
    </div>
</template>
<script setup>
const props = defineProps({
    cardData: { required: true },
    buttonText: { 
        required: true,
        type:String,
    },
    route: { 
        required: true,
        type:String,
    },
    cardData: { required: true },
});
</script>
<style lang="scss" scoped>
.order_summary_wrapper{
    background:#F9F9F9;
    display: block;
    position: relative;
    border-radius: 15px;
    padding: 20px;
    h5{
        @apply font-semibold text-[16px];

    }
    .key_value_wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-block: 20px;
        .key{
            @apply  text-[14px];
        }
        .value{
            @apply font-semibold text-[14px] text-primary;
        }
    }
    .discount_container{
        position: absolute;
        right: 40px;
        top: -9px;
        z-index: 2;
        img{
            object-fit: contain;
            width: 38px;
        }
        span{
            position: absolute;
            z-index: 2;
            font-size: 12px;
            font-weight: 600;
            color: #fff;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }
    .image_wrapper{
        max-width: 300px;
        height: 400px;
        border-radius: 20px;
        overflow: hidden;
        img{
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
            transition: all 0.4s linear;
        }
        &:hover{
            img{
                transform: scale(1.2);
            }
        }
    }
    .product_title{
        @apply  text-secondary font-medium;
        margin-block: 10px 0px;
        font-size: 18px
    }
    .price_wrapper{
        @apply  text-primary font-bold;
        font-size: 22px;
    }
    .currency_wrapper{
        font-size: 22px;
        @apply  text-secondary font-bold;
    }
    .include_vat{
        font-size: 14px;
        @apply  text-secondary font-normal;
    }
}
</style>