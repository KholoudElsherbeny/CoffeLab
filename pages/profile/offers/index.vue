<template>
    <div class="offers_wrapper mx-auto  bg-lightGray rounded-[20px] p-[20px] pt-[25px]  max-w-[760px] w-[100%]  ">
        <h4 class="text-secondary font-semibold text-[20px]">
            {{$t("TITLES.offersAndDiscounts")}} 
        </h4>
        <div class="links_list flex md:justify-between items-center gap-x-[30px]">
          <button  :class="{'active' : currentItems == 'offers'}" @click="currentItems = 'offers'">
            {{$t("TITLES.offers")}}
          </button>
          <button :class="{'active' : currentItems == 'discounts'}" @click="currentItems = 'discounts'">
            {{$t("TITLES.discounts")}}
          </button>
        </div>
        <transition >
          <div v-if="currentItems == 'offers'" class="flex md:justify-between justify-center items-start flex-wrap my-[30px] gap-y-[50px]">
            <nuxt-link 
                        :to="`offers/${offer.id}`"
                        class="single_offer w-[240px] h-[290px] rounded-[15px] flex justify-end items-start flex-col" 
                        v-for="offer in offers" :key="offer" >
                <img :src="offer.image" width="" height="" alt="" />
                <div class="">
                  <h6 class="text-white text-[16px] font-semibold mb-[5px]">{{offer.title}}</h6>
                  <p class="text-white text-[11px] font-normal mb-[10px]">{{offer.description}}</p>
                </div>
            </nuxt-link>
          </div>
          <div v-else>
            <div class="flex justify-between items-start flex-wrap my-[30px] gap-y-[20px]">
                    <div    class="lg:w-[32%] md:w-[49%]  w-[100%]" 
                            v-for="product in products" 
                            :key="product.id" >
                        <GeneralProductCard :card-data="product"
                                            :button="$t('BUTTONS.readMore')"
                                            :route="$t('BUTTONS.readMore')"/>
                    </div>
            </div>
          </div>
        </transition>
    </div>
</template>
<script setup>
definePageMeta({
  layout: "profile",
  middleware: "guest",
});
const currentItems=ref('offers')
const offers=reactive([
  {
    id:1,
    title:'50% OFF Turkish coffee',
    image:new URL(`~/assets/images/offfer1.png`, import.meta.url).href,
    description:'buy a Turkish coffee and get 50%'
  },
  {
    id:2,
    title:'50% OFF Turkish coffee',
    image:new URL(`~/assets/images/offer2.png`, import.meta.url).href,
    description:'buy a Turkish coffee and get 50%'
  },
  {
    id:3,
    title:'50% OFF Turkish coffee',
    image:new URL(`~/assets/images/offfer1.png`, import.meta.url).href,
    description:'buy a Turkish coffee and get 50%'
  },
])
const products = reactive([
    {
        id:1,
        image:new URL(`@/assets/dammyImages/product1.png`, import.meta.url).href,
        title:'Goji Berry Acai Herbal Tea',
        currency:"EGP",
        before_price:"45.00",
        price:"38.00",
        include_vat:true,
        discount:'10%',
    },
    {
        id:2,
        image:new URL(`~/assets/dammyImages/product2.png`, import.meta.url).href,
        title:'Goji Berry Acai Herbal Tea',
        currency:"EGP",
        before_price:"45.00",
        price:"38.00",
        include_vat:true,
        discount:'10%',
    },
    {
        id:3,
        image:new URL(`@/assets/dammyImages/product3.png`, import.meta.url).href,
        title:'Goji Berry Acai Herbal Tea',
        currency:"EGP",
        before_price:"45.00",
        price:"38.00",
        include_vat:true,
        discount:'10%',
    }
]);
</script>
<style lang="scss" >
.offers_wrapper{
    .links_list{
        button{
          transition: 0.2s all linear;
          border-block-end:2px solid  #0000;
          @apply text-secondary text-[18px] w-[48%]  py-[20px] my-[40px] max-w-[280px] text-center inline-block ;
        }
        button.active{
          @apply text-primary border-primary font-semibold;
        }
    }
    .single_offer{
        @apply relative px-[20px];
        img{
          @apply absolute inset-0 ;
          z-index: 1;
        }
        div{
          z-index: 3;
          margin-block-end: 20px;
        }
    }
    .points_banner{
        background: url('@/assets/images/points-bg.png');
        @apply my-[25px] bg-no-repeat bg-contain rounded-[10px];
    }
    .product_card_wrapper{
        .discount_container{
          right: 20px;
          top: -8px;
          img{
            width: 30px;
          }
          span{
            @apply text-[10px] font-thin;
          }
        }
        .product_title{
            @apply text-[17px] font-semibold;
        }
        .image_wrapper{
            height: 260px !important;
        }
        >div{
          span.price_wrapper,
          span.currency_wrapper{
              @apply text-[17px] font-semibold;
          }
        }
    } 
}
</style>