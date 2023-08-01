<template>
    <!-- <div class="offers_wrapper  bg-lightGray rounded-[20px]  "> -->
        <div class="single_offer w-full mx-auto  lg:h-[600px] rounded-[20px] lg:max-w-[760px]  flex justify-end items-start flex-col pb-[80px]" v-if="offer">
            <img  :src="offer.image" width="" height="" alt="" />
            <div class="">
                  <h6 class="text-white text-[22px] font-bold mb-[5px]">{{offer.title}}</h6>
                  <p class="text-white text-[16px] font-normal mb-[10px]">{{offer.subtitle}}</p>
                  <p class="text-white text-[14px] font-light mb-[10px]">{{offer.description}}</p>
            </div>
        </div>
    <!-- </div> -->
</template>
<script setup>
definePageMeta({
  layout: "profile",
  middleware: "guest",
});
const currentItems=ref('offers')
const offer=reactive(
  {
    id:1,
    title:"50% OFF Turkish coffee",
    subtitle:"buy a Turkish coffee and get 50%",
    description:"Coffee Lab follows very precise procedures to ensure that your order reaches you as you requested, but in the event that another order arrives by mistake, ",
    image:new URL(`~/assets/images/offer1.png`, import.meta.url).href,
  })
</script>
<style lang="scss" >
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
</style>