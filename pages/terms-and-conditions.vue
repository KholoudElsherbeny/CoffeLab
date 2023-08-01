<template>
    <div class="our_terms_wrapper">
        <div class="container mx-auto flex justify-between  flex-wrap" >
            <div  class="lg:w-[60%] md:w-[100%] flex justify-start items-start flex-col gap-[20px]" v-for="term in mydata" :key="term">
                <h2 class="text-secondary font-semibold text-[28px] text-center">Terms And Conditions</h2>
                <div class="single_term">
                    <h3 >How can I search for a product on coffee lab ?</h3>
                    <p>{{term}}</p>
                </div>
                <div  class="single_term">
                    <h3>When do we collect information ?</h3>
                    <p>{{term}}</p>
                </div>
                <div  class="single_term">
                    <h3>
                        What do I do if I receive a product that is different from the one I ordered ?
                    </h3>
                    <p>
                        {{term}}
                    </p>
                </div>
            </div> 
            <div class="lg:w-[40%] md:w-[100%]">
                <img    src="@/assets/images/terms.svg"
                        width="" height="" style="object-fit:contain;rounded-[20px]" alt=""/>
            </div>
        </div>
    </div>
</template>
<script setup>
const mydata = ref(null);
const { data: res } = await useAPILazyFetch("terms", {
  method: "GET",
});
watch(res, (res) => {
  if (res) {
    mydata.value = res.data;
  }
});
</script>

<style lang="scss">
.our_terms_wrapper{
    background: #fff;
    padding-block: 70px;
    h2{
        @apply relative text-center w-full;
        &::before{
            content: '';
            width: 170px;
            height: 2.5px;
            @apply bg-primary absolute left-[0px] top-[50%];
            transform: translatey(-50%);
        }
        &::after{
            content: '';
            width: 170px;
            height: 2.5px;
            @apply bg-primary absolute right-[0px] top-[50%];
            transform: translatey(-50%);
        }
    }
    .single_term{
        @apply  flex justify-start items-start flex-col gap-[20px] ;
            padding-inline-start: 20px;
        h3{
            @apply text-secondary font-semibold text-[19px] relative;
            &::before{
                content: '';
                width: 7px;
                height: 7px;
                @apply bg-secondary absolute left-[-15px] top-[50%] rounded-[50%];
                transform: translatey(-50%);
            }
        }
        p{
            @apply text-secondary font-light text-[15px] relative;
            &::before{
                content: '';
                width: 4px;
                height: 4px;
                @apply bg-secondary absolute left-[-15px] top-[15px] rounded-[50%];
                transform: translatey(-50%);
            }
        }
    }
}
</style>