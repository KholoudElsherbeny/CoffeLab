<template>
    <div class="our_menu_wrapper">
        <div class="container mx-auto">
            <h2 class="main_page_title">
                {{$t("TITLES.products")}}
            </h2>
            <div>
                <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <GeneralProductCard     v-for="product in mydata" 
                                            :key="product.id" 
                                            :card-data="product"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const branch = useCookie('yourBranch').value;
const mydata = ref(null);
const { data: res } = await useAPILazyFetch(`${branch}/products`, {
  method: "GET",
});
watch(res, (res) => {
  if (res) {
    mydata.value = res.data;
  }
});
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
.our_menu_wrapper{
    background: #fff;
    padding-block: 70px;
}
</style>