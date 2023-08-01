<template>
    <div class="our_menu_wrapper my-24">
        <div class="container mx-auto">
            <h2 class="main_page_title">
                {{$t("TITLES.categoryOfMenu")}}
            </h2>
            <div class="flex justify-between flex-wrap items-start gap-x-[2%] gap-y-[20px]">
                <GeneralCategoryCard class="lg:w-[49%] " 
                                        v-for="category in mydata" 
                                        :key="category.id"
                                        :link="`/our-menu/${category.id}`"
                                        :hirstyle="true"
                                        :card-data="category" />
            </div>
        </div>
    </div>
</template>
<script setup>
const branch = useCookie('yourBranch').value;
const mydata = ref(null);
const { data: res } = await useAPILazyFetch(`${branch}/categories`, {
  method: "GET",
});
watch(res, (res) => {
  if (res) {
    mydata.value = res.data;
  }
});
</script>

<style lang="scss">
.our_menu_wrapper{
    background: #fff;
    padding-block: 70px;
    color: #000;
}
.product_title{
    @apply text-primary
}
</style>