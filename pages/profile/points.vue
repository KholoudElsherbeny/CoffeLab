<template>
    <div class="points_wrapper mx-auto  bg-lightGray rounded-[20px] p-[20px] pt-[25px]  lg:max-w-[600px] ">
        <h4 class="text-secondary font-semibold text-[20px]">
            {{$t("TITLES.points")}}
        </h4>
        <div class="points_banner flex justify-center items-center h-[160px]">
            <h5 class="text-white font-bold text-[35px] text-center">
                120 <br> {{$t("TITLES.points")}}
            </h5>
        </div>
        <h5 class="font-bold text-[15px] text-secondary">
            {{$t("TITLES.newPoints")}}
        </h5>
        <div class="bg-white p-[20px] border-mediumGray border-[1px] my-[20px] w-[100%] rounded-[10px]"
              v-for="order in orders.slice(0,2)"
              :key="order.id">
          <div class="flex justify-between items-center">
              <span class="font-bold text-[15px] text-secondary">
                {{order.count}}  {{$t("TITLES.points")}}
              </span>
              <span class="font-bold text-[15px] text-primary">
                {{order.price}} 
                <span class="text-secondary">
                    {{order.currency}}
                </span>
              </span>
          </div>
        </div>
        <h5 class="font-bold text-[15px] text-secondary">
            {{$t("TITLES.pointsUsed")}}
        </h5>
        <div class="bg-white p-[20px] border-mediumGray border-[1px] my-[20px] w-[100%] rounded-[10px]"
              v-for="order in orders.slice(2,3)"
              :key="order.id">
          <div class="flex justify-between items-center">
              <span class="font-bold text-[15px] text-secondary">
                {{order.count}}  {{$t("TITLES.points")}}
              </span>
              <span class="font-bold text-[15px] text-primary">
                {{order.price}} 
                <span class="text-secondary">
                    {{order.currency}}
                </span>
              </span>
          </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
  layout: "profile",
  middleware: "guest",
});
const orders = reactive([
    {
        id:1,
        currency:"EGP",
        price:"380.00",
        number:42,
        count:4,
        status:'New Order'
    },
    {
        id:2,
        number:42,
        count:4,
        currency:"EGP",
        price:"438.00",
        status:'New Order'
    },
    {
        id:3,
        number:42,
        count:4,
        currency:"EGP",
        price:"838.00",
        status:'New Order'
        },
]);

</script>
<style lang="scss" scoped>
.points_wrapper{
    .points_banner{
        background: url('@/assets/images/points-bg.png');
        @apply my-[25px] bg-no-repeat bg-cover rounded-[10px];
    }
}
</style>