<template>
    <div class="our_menu_wrapper">
        <div class="container mx-auto">
            <h2 class="main_page_title">
                {{$t("TITLES.categoryOfMenu")}}
            </h2>
            <div class="flex justify-between flex-wrap items-start  gap-y-[20px]">
                <GeneralProductCard     v-for="product in myproduct" 
                :key="product.id" :card-data="product"
                                    :button="$t('BUTTONS.readMore')"
                                    :route="$t('BUTTONS.readMore')"/>
            </div>
        </div>
    </div>
</template>
<script setup>
const branch = useCookie('yourBranch').value;
const route = useRoute();
const myproduct = ref(null);
const { data: res } = await useAPILazyFetch(`${branch}/products/${route.params.id}`, {
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