<template>
    <div class="general_offers_wrapper container mx-auto rounded-[20px] p-[20px] pt-[25px]  lg:w-full ">
        <h4 class="text-secondary font-bold text-[26px]">
            {{$t("TITLES.offers")}} 
        </h4>
        <ul class="flex justify-start items-start flex-wrap gap-[25px] my-[15px] ">
          <li v-for=" city in cities" 
              :key="city.id"
              class="bg-lightGray py-[10px] px-[25px] rounded-[8px]">
              <button class="font-normal text-secondary text-[18px]">
                {{city.title}}
              </button>
          </li>
        </ul>
        <div class="flex justify-between  flex-wrap items-start gap-y-[30px] my-[30px]">
          <div  class="single_offer lg:w-[24%] w-[48.5%] min-w-[280px] mx-auto min-h-[350px] rounded-[15px] flex justify-end items-start flex-col" 
                v-for="offer in offers" :key="offer" >
              <img :src="offer.image" width="" height="" alt="" />
              <div class="">
                <h6 class="text-white text-[16px] font-semibold mb-[5px]">{{offer.title}}</h6>
                <p class="text-white text-[11px] font-normal mb-[10px]">{{offer.description}}</p>
              </div>
          </div>
        </div>
    </div>
</template>
<script setup>
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
  {
    id:4,
    title:'50% OFF Turkish coffee',
    image:new URL(`~/assets/images/offfer1.png`, import.meta.url).href,
    description:'buy a Turkish coffee and get 50%'
  },
])
const cities = reactive([
    {
        id:1,
        title:'Mansoura',
    },
    {
        id:2,
        title:'Nasr City',
    },
    {
        id:3,
        title:'Maddi',
    },
    {
        id:4,
        title:'Madinaty',
    },
    {
        id:5,
        title:'Port said',
    },
    {
        id:6,
        title:'Port said',
    }
]);
</script>
<style lang="scss" >
.general_offers_wrapper{
    .single_offer{
        @apply relative px-[20px];
        img{
          @apply absolute inset-0  w-full h-full;
          z-index: 1;
        }
        div{
          z-index: 3;
          margin-block-end: 20px;
        }
    }
}
</style>