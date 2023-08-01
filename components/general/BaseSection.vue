<template>
    <div class="base_section_wrapper " v-if="sectionData">
        <div class="container mx-auto">
            <div class=" flex flex-row " :class="{ 'flex-row-reverse' : index%2 }">
                <div class="text_section_wrapper basis-1/2 sm:basis-1/1">
                    <span class="icon_wrapper">
                        <!-- <img src="@/assets/dammyImages/icon1.png" 
                            width="20" height="20" 
                            alt="image" /> -->
                    </span>
                    <div     class="main_title"
                            v-html="sectionData.title">
                    </div>
                    <div    class="main_description" 
                            v-html="sectionData.description">
                    </div>
                    <buttion v-if="button" class="main_button" >
                        {{button}}
                    </buttion>
                    <nuxt-link  v-if="route" 
                                :to="localePath(route)" 
                                class="main_link">
                                {{$t('BUTTONS.readMore')}}
                                <span>
                                </span>
                                <!-- <img src="@/assets/dammyImages/icons/arrow.png" width="9" height="" alt="image"/> -->
                    </nuxt-link>
                </div>
                <div class="image_wrapper basis-1/2 sm:basis-1/1" v-if="sectionData.image">
                    <!-- <img src="@/assets/dammyImages/service3.png" 
                            width="" height="" 
                            alt="image" required/> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    sectionData: { required: true },
    button: { required: false },
    route: { required: false },
    index: { required: false },
});
</script>
<style lang="scss" scoped>
.base_section_wrapper{
    min-height: 650px;
    background: #fff;
}

</style>