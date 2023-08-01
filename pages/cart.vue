<template>
    <div class="cart_page_wrapper">
        <div class="container mx-auto">
            <div class="flex  justify-between items-center">
                    <h2 class="main_page_title ">
                        {{$t("TITLES.shoppingCart")}}
                    </h2>
                    <nuxt-link :to="localePath('/')" class="font-light text-[15px] opacity-80">
                            {{$t("BUTTONS.continueShopping")}}
                    </nuxt-link>
            </div>
            <div class="flex  justify-between items-start flex-wrap my-[30px] gap-y-[15px]">
                <div class="cart_items lg:w-[69%] w-[100%]">
                    <DataTable :value="orders" tableClass="bg-lightGray rounded-2xl	 " tableStyle="min-width: 100%;border-radius:15px !important;">
                        <Column  field="product.name" :header="`${$t('TITLES.itemSummary')}(${items_count})`">
                            <template #body="slotProps">
                                <div class="flex items-center gap-x-[10px]">
                                    <img :src="slotProps.data.product.image" :alt="slotProps.data.product.image" width="80" height="50" class="w-6rem shadow-2 rounded-[4px]" />
                                    <span class="text-secondary text-[14px] font-normal">{{slotProps.data.product.name}}</span>
                                </div>
                            </template>
                        </Column>
                        <Column field="product.price" :header="$t('TITLES.price')" class="text-primary text-[16px] font-semibold">
                            <template #body="slotProps">
                                {{ slotProps.data.product.price }} EGP
                            </template>
                        </Column>
                        <Column field="qty" :header="$t('TITLES.qty')" >
                            <template #body="{ data }">
                                        <button class="inline-block mx-auto" @click="changeQuantity(1)" >
                                            <img  class="block mx-auto" src="@/assets/images/addbutton.png" width="20" alt="trash icon"/>
                                        </button>
                                        <span class="inline-block mx-[8px] text-secondary text-[20px] font-bold">
                                            {{data.qty}}
                                        </span>
                                        <button class="inline-block mx-auto" @click="changeQuantity(-1)" >
                                            <img  class="block mx-auto" src="@/assets/images/removebutton.png" width="20" alt="trash icon"/>
                                        </button>
                            </template>
                        </Column>
                        <Column field="product.sizes.item" :header="$t('TITLES.size')" bodyClass="text-secondary text-[17px] font-normal">
                            <template #body="slotProps">
                                {{ slotProps.data.product.sizes }} 
                            </template>
                        </Column>
                        <Column field="id" dataType="boolean" bodyClass="text-center" :header="$t('TITLES.remove')">
                                <template #body="{ data }">
                                    <button class="block mx-auto">
                                        <img v-if="data.id" class="block mx-auto" src="@/assets/images/trash.png" alt="trash icon"/>
                                    </button>
                                </template>
                        </Column>
                    </DataTable>   
                </div>
                <GeneralOrderSummary :cardData="orders" 
                                    class=" lg:w-[29%] w-[100%]"
                                    :buttonText="$t('BUTTONS.continueToShipping')"
                                    route="/shipping" />
            </div>
            <!-- <GeneralProductsSection :products='mydata'
                            :section-title='$t("TITLES.discounts")'
                            route="vjhbfh"/> -->
        </div>
    </div>
</template>
<script setup>
const branch = useCookie('yourBranch').value;
const items_count=ref(2);
const orders = ref(null);
const { data: res } = await useAPILazyFetch(`client/${branch}/new_carts`, {
  method: "GET",
});
watch(res, (res) => {
  if (res) {
    orders.value = res.data;
  }
});

// orders 
const mydata = ref(null);
const { data: resdata } = await useAPILazyFetch(`${branch}/products`, {
  method: "GET",
});
watch(resdata, (resdata) => {
  if (resdata) {
    mydata.value = resdata.data;
    // console.log(mydata.data.deliver_price);
  }
});
const data = reactive({
  size: null,
  items: [],
  quantity: 1,
  totalOrder: 50.00,
  fav: false
});
function changeQuantity(e) {
  if (e == -1 && data.quantity == 1) return;
  data.quantity += e;
}

</script>

<style lang="scss">
.cart_page_wrapper{
    background: #fff;
    padding-block: 45px;
    .main_page_title{
        margin-bottom: 0
    }
    .cart_items{
        @apply bg-lightGray;
    }
    .p-datatable .p-column-header-content {
        text-align: center !important;
        justify-content: center !important;
        @apply text-secondary text-[16px] font-semibold;
    }
    .p-datatable-table {
    border-spacing: 0px;
    width: 100%;
    overflow: hidden;
    border-radius: 15px;
    }
    .p-datatable-thead tr th:first-of-type{
        display: flex;
        text-align: left !important;
        justify-content: flex-start !important;
        @apply text-secondary text-[16px] font-semibold;
    }
    .p-datatable .p-datatable-tbody > tr > td {
        text-align: center !important;
        border: 1px solid #4D28141A;
        border-width: 1px 0 0px 0;
    }
    .p-datatable .p-datatable-tbody > tr,
    .p-datatable .p-datatable-thead > tr > th {
        background: #0000 !important;
    }
}
</style>