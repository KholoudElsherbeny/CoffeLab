<template>
    <div class="addresses_wrapper w-full mx-auto  bg-lightGray rounded-[20px] p-[20px] pt-[25px]  max-w-[600px] ">
        <h4 class="text-secondary font-semibold text-[20px] mb-[50px]">
            {{$t("TITLES.addresses")}}
        </h4>
        <div class="bg-white p-[15px] border-darkGray border-[1px] my-[20px] w-[100%] rounded-[10px]"
              v-for="dataAddress in addresses"
              :key="dataAddress.id">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-x-[10px] gap-[15px] flex-wrap">
                  <span class="font-normal text-[14px] text-secondary w-full">
                      {{$t("TITLES.address")}}
                  </span>
                  <img src="@/assets/images/location.png" width="21" class="h-[20px]" height="" alt=""/>
                  <span class="font-semibold text-[15px] text-secondary">
                    {{dataAddress.location}}  {{$t("TITLES.points")}}
                  </span>
            </div>
            <div class="flex items-center gap-x-[10px]">
                  <button >
                      <img src="@/assets/images/edit.png" width="19" height="" alt=""/>
                  </button>
                  <button >
                      <img src="@/assets/images/trash.png" width="19" height="" alt=""/>
                  </button>
            </div>
          </div>
        </div>
        <button class="base_button w-full block mb-[30px] mt-[30px]"> 
            <img src=""/>
            {{$t("BUTTONS.addNewAddress")}}
        </button>
    </div>
</template>
<script setup>
definePageMeta({
  layout: "profile",
  middleware: "guest",
});
const addresses = ref(null);
const { data: res } = await useAPILazyFetch("addresses", {
  method: "GET",
});
watch(res, (res) => {
  if (res) {
    addresses.value = res.data;
  }
});
</script>
<style lang="scss" >
.addresses_wrapper{
}
</style>