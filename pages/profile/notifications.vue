<template>
    <div class="points_wrapper mx-auto  w-full bg-lightGray rounded-[20px] p-[20px] pt-[25px]  max-w-[600px] ">
        <h4 class="text-secondary font-semibold text-[20px]">
            {{$t("TITLES.notification")}}
        </h4>
        <div class="flex justify-between items-start gap-x-[50px] bg-white p-[18px] my-[20px] w-[100%] rounded-[10px]"
              v-for="notification in notifications"
              :key="notification.id">
              <span class="font-extralight text-[15px] text-secondary w-[380px]">
                  {{notification.title}}
              </span>
              <span class="font-extralight flex justify-end items-start text-[13px] text-grayDark ">
                  {{notification.date}} 
                  <img src="@/assets/images/calendar.png" width="" style="margin-inline-start:8px;display:inline-block " height="" alt=""/>
              </span>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
  layout: "profile",
  middleware: "guest",
});
const notifications = reactive([
    {
        id:1,
        title:"Your order number 51420 is in preparation stage and New item added, let's try it now",
        date:"03:13 PM",
    },
    {
        id:2,
        title:"Your order number 51420 is in preparation stage and New item added, let's try it now",
        date:"03:13 PM",
    },
    {
        id:3,
        title:"Your order number 51420 is in preparation stage and New item added, let's try it now",
        date:"03:13 PM",
    },
    {
        id:4,
        title:"Your order number 51420 is in preparation stage and New item added, let's try it now",
        date:"03:13 PM",
    },
]);

</script>
<style lang="scss" scoped>
.points_wrapper{
    .points_banner{
        background: url('@/assets/images/points-bg.png');
        @apply my-[25px] bg-no-repeat bg-contain rounded-[10px];
    }
}
</style>