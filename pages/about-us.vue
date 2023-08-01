<template>
    <div class="about_us_wrapper">
        <div class="container mx-auto flex justify-between flex-wrap gap-y-[30px]" >
            <div  class="lg:w-[45%] md:w-[100%] flex justify-start items-start flex-col gap-[20px]" v-for="data in myAbout" :key="data">
                <div class="single_div">
                    <h3 >About Us</h3>
                    <p>{{ data}}</p>
                </div>
                <div  class="single_div">
                    <h3>Our Dream</h3>
                    <p>{{ data }}</p>
                </div>
                <div  class="single_div">
                    <h3>
                        Our Approach
                    </h3>
                    <p>{{ data }}</p>
                </div>
            </div> 
            <div class="lg:w-[55%] md:w-[100%]">
                <img    src="@/assets/dammyImages/about.png"
                        style="margin-inline-start:auto"
                        width="" height="" alt=""/>
            </div>
        </div>
    </div>
</template>
<script setup>
const myAbout = ref(null);
const { data: res } = await useAPIFetch("about", {
  method: "GET",
});
watch(res, (res) => {
  if (res) {
    myAbout.value = res.data;
  }
}); 
</script>

<style lang="scss">
.about_us_wrapper{
    @apply lg:py-[70px] py-[20px] bg-white;
    .single_div{
        @apply  flex justify-start items-start flex-col gap-[15px]  mt-[30px] max-w-[610px];
        h3{
            @apply text-secondary font-semibold text-[19px] relative;
            
        }
        p{
            @apply text-secondary font-light text-[16px] relative;
        }
    }
}
</style>