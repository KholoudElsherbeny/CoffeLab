<template>
    <div class="our_menu_wrapper">
        <div class="container mx-auto">
            <h2 class="main_page_title">
                {{$t("TITLES.ourMenu")}}
            </h2>
            <div>
                <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <GeneralProductCard     v-for="product in myproduct" 
                                            :key="product.id" 
                                            :card-data="product"
                                            
                                            />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const branch = useCookie('yourBranch').value;
const myproduct = ref(null);
const { data: res } = await useAPILazyFetch(`${branch}/products`, {
  method: "GET",
});
watch(res, (res) => {
  if (res) {
    myproduct.value = res.data;
  }
});

</script>

<style lang="scss">
.our_menu_wrapper{
    background: #fff;
    padding-block: 70px;
}
</style>