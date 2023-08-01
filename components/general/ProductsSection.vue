<template>
    <div class="product_section_wrapper " v-if="products.length">
        <div class="container mx-auto">
            <div class="product_section_header flex flex-row justify-between">
                <h2 class="main_title">
                    {{sectionTitle}}
                </h2>
                <nuxt-link  v-if="route" 
                                :to="localePath(route)" 
                                class="main_link">
                                {{$t('BUTTONS.showAll')}}
                    </nuxt-link>
            </div>
            <div class="flex  items-start flex-wrap gap-y-[20px] justify-center md:justify-between">
                <div    v-for="product in products" 
                        :key="product.id" 
                        class="lg:w-[24%] md:w-[49.5%] w-[100%] ">
                        <GeneralProductCard     
                                                :card-data="product"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    products: { required: true },
    sectionTitle: { required: false },
    route: { required: false },
});
</script>
<style lang="scss" scoped>
.product_section_wrapper{
    padding-block: 50px;
    // min-height: 650px;
    background: #fff;
}
.product_section_header{
    margin-block-end: 15px;
    align-items: center;
    .main_title{
        @apply font-semibold text-secondary;
        font-size: 20px;
    }
    .main_link{
        @apply font-normal text-primary;
        font-size: 16px;
    }
}
</style>