<template>
  <div class="home_wrapper" v-if="products">
    <div class="flex justify-between items-start flex-wrap lg:py-[80px]  lg:max-h-[800px]">
      <div class="home_main_text_wrapper lg:w-1/2 md-w-[100%]" 
            >
          <h2 v-html="$t('TITLES.EnjoyYourMorningCoffee')"
              class="text-secondary text-[44px] font-bold leading-[2]">
          </h2>
          <p class="max-w-[350px]">
            {{$t("TITLES.OnlyGREEK")}}
          </p>
          <nuxt-link :to="localePath('categories')" class="base_button">
            {{$t("BUTTONS.viewMenu")}}
          </nuxt-link>
      </div>
      <div class="lg:w-1/2 md-w-[100%] flex justify-end">
        <img src="@/assets/images/header.png" width="" class="object-contain m-0 lg:max-w-[900px] " height="" alt=""/>
      </div>
    </div>
    <div class="container mx-auto   relative lg:top-[-200px] lg:mb-[-200px] "> 
        <h2 class="main_page_title ">
            {{$t("TITLES.categoryOfMenu")}}
        </h2>
        <div class="flex justify-between items-center flex-wrap gap-y-[20px]">
          <GeneralCategoryCard v-for="category in categories" 
                              :key="category.id"
                              link="categories"
                              :card-data="category" />
        </div>
    </div>
    <GeneralProductsSection :products='products'
                            :section-title='$t("TITLES.new")'
                            route="vjhbfh"/>
    <GeneralProductsSection :products='products'
                            :section-title='$t("TITLES.mostRequested")'
                            route="vjhbfh"/>
    <div class="container banner_wrapper">
        <div class="w-[55%]">
          <h2 class="title">
            {{$t("TITLES.bannerTitle")}}
          </h2>
          <button>
            {{$t("BUTTONS.showOffers")}}
          </button>
        </div>
        <div class="w-[45%]">
          <img src="@/assets/images/discount.png"
                class="w-[100%] max-w-[600px]"
                alt="discount Image" width="" height=""/>
        </div>
    </div>
    <GeneralProductsSection :products='products'
                            :section-title='$t("TITLES.discounts")'
                            route="vjhbfh"/>
  </div>
</template>

<script setup>
const branch = useCookie('yourBranch').value;

const products = ref(null);
const { data: res } = await useAPILazyFetch(`${branch}/products`, {
  method: "GET",
});
watch(res, (res) => {
  if (res) {
    products.value = res.data;
  }
});
const categories = ref(null);
const { data: resdata} = await useAPILazyFetch(`${branch}/categories`, {
  method: "GET",
});

watch(resdata, (resdata) => {
  if (resdata) {
    categories.value = resdata.data;
  }
});
 
</script>

<style lang="scss" scoped>
.banner_wrapper{
    background: linear-gradient(97.41deg, #24ACE2 32.59%, rgba(0, 173, 241, 0.3) 100%);
    @apply  mx-auto rounded-[15px] lg:p-[40px] p-[20px] flex justify-between items-center;
    .title{
      @apply text-white lg:text-[60px] md:text-[35px] sm:text-[30px] max-w-[550px]  lg:mb-[40px] mb-[20px] ;
    }
    button{
      @apply bg-white rounded-[8px] font-medium lg:min-w-[250px] leading-[3]  min-w-[150px] text-primary text-center;
    }
    img{
      // max-width: 500px;
      max-height: 350px;
      display: block;
      // object-fit: contain;
      margin-inline-start: auto;
    }
}
.banner_wrapper_without_bg{
  background: #F9F9F9;
  
  button{
    border:2px solid ;
    @apply bg-primary text-white border-primary;
    transition: 0.4s all linear;
    &:hover{
      @apply bg-white text-primary;
    }
  }
  img{

  }
}
.home_main_text_wrapper{
  @apply lg:ps-[100px] ps-[12px]  lg:pt-[60px] flex justify-start items-start flex-col gap-[20px];
}
</style>
