<template>
    <nuxt-link  :to="localePath(`/our-menu/${cardData.id}`)" class="category_card_wrapper " :class="{'hirstyle':hirstyle}">
        <div class="image_wrapper">
            <img    :src="cardData.image"
                    :alt="cardData.name"
                    width=""
                    height=""/>
        </div>
        <h3 class="product_title">{{cardData.name}}</h3>
    </nuxt-link>
</template>
<script setup>
const props = defineProps({
    link: { required: true },
    hirstyle: { required: false },
    cardData: { required: true },
});  
</script>
<style lang="scss" scoped>
.category_card_wrapper{
    display: block;
    margin-inline: auto;
    .image_wrapper{
        width: 200px;
        height: 180px;
        background: #F9F9F9;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        align-items: center;
        img{
            display: block;
            object-fit: contain;
            margin-inline: auto;
            transition: all 0.4s linear;
        }
        &:hover{
            img{
                transform: scale(1.2);
            }
        }
    }
    .product_title{
        @apply  text-secondary font-semibold text-center text-base;
        margin-block: 20px 0px;
        
    }
}
.hirstyle{
    border:1.7px solid;
    @apply flex justify-between items-center flex-row-reverse border-primary w-auto min-w-[280px] rounded-[8px] px-[30px] h-[120px];
    .image_wrapper{
        background: url('@/assets/images/categorybg.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 95px;
        border-radius: 0px;
        width: 90px;
        img{
            max-width: 50px;
        }
    }
    .product_title{
        margin: 0;
    }
    &:hover{
        img{
            transform: scale(1.2);
        }
    }
}
</style>