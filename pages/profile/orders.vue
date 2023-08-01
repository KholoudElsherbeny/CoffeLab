<template>
    <div class="orders_wrapper bg-lightGray rounded-[20px] p-[20px] pt-[25px] flex justify-between items-start gap-x-[2%] gap-y-[20px] flex-wrap">
        <div class="bg-white p-[20px] lg:w-[49%] sm:w-[100%] rounded-[10px]"
              v-for="order in orders"
              :key="order.id">
          <div class="flex justify-between items-center mb-[15px]">
              <h4 class="text-[16px] font-semibold text-secondary">
                {{$t("TITLES.order")}} {{order.id}}
              </h4>
              <span class="stauts text-[14px] text-secondary">
                {{order.trans_order_status}}
              </span>
          </div>
          <div class="flex justify-between items-center">
              <span class="text-[14px] text-secondary font-extralight">
                {{order.order_products_count}}  {{$t("TITLES.products")}}
              </span>
              <span class="font-semibold text-[16px] text-primary">
                {{order.total_price}} EGP
              </span>
          </div>
        </div>
    </div>
</template>
<script setup>
const branch = useCookie('yourBranch').value;

definePageMeta({
  layout: "profile",
  middleware: "guest",
});
const orders = ref(null);
const { data: res } = await useAPILazyFetch(`client/${branch}/new_carts`, {
  method: "GET",
});
watch(res, (res) => {
  if (res) {
    orders.value = res.data;
  }
});
</script>
<style lang="scss" scoped>
.orders_wrapper{
    span.stauts{
      @apply relative ;
      &::before{
        content:'';
        @apply h-[12px] w-[12px] bg-primary rounded-[50%] absolute;
        left: -16px;
        top: 50%;
        transform: translatey(-50%);
      }
    }
}
</style>