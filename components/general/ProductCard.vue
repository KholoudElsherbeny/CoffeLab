<template>
    <nuxt-link  :to="localePath(`/products/${cardData.id}`)" class="product_card_wrapper ">
        <div v-if="cardData.discount"  class="discount_container">
            <img src="@/assets/images/discountContainer.svg"
                    alt="icon"
                    width=""
                    height=""
                    />
            <span>
                {{cardData.discount}}
            </span>
        </div>
        <div class="image_wrapper">
            <img    :src="cardData.image"
                    :alt="cardData.title"
                    width=""
                    height=""/>
        </div>
        <h3 class="product_title">{{cardData.name}}</h3>
        <div class=" flex items-center justify-between">
                <div class="flex gap-2 items-center">
                    <span class="price_wrapper">{{cardData.price}}</span>
                    <span class="currency_wrapper">EGP</span>
                    <span class="include_vat" v-if="!cardData.include_vat">{{$t("TITLES.excludingVat")}}</span>
                </div>
                <span class="before_price_wrapper" v-if="cardData.before_price">
                    {{cardData.before_price}}
                </span>
        </div>
    </nuxt-link>
</template>
<script setup>

const props = defineProps({
    cardData: { required: true },
});
</script>
<style lang="scss" scoped>
.product_card_wrapper{
    @apply relative block w-fit max-w-[300px] mx-auto;
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
    .before_price_wrapper{
        font-size: 13px;
        @apply font-normal line-through text-grayDark;
    }
}
</style>