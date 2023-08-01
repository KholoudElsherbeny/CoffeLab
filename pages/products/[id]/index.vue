<template>
    <div class="product_details_page">
        <div class="container mx-auto flex justify-between items-start flex-wrap gap-y-[20px]" v-if="myproduct">
            <div class="image_wrapper  lg:w-[45%] w-[100%]" >
                <button class="add_to_fav" type="button" @click="data.fav=!data.fav">
                    <img src="@/assets/images/star.png" 
                    v-if="data.fav"
                    alt="star icon" width="" height="" />
                    <img src="@/assets/images/unstar.png" 
                            v-else
                            alt="unstar icon" width="" height=""/>
                </button>
                <img :src="myproduct.image" :alt="myproduct.title" width="" height="" />
            </div>
            <div class="product_details_wrapper   lg:w-[55%] w-[100%]">
                <h3>
                    {{myproduct.name}}
                </h3>
                <p>
                    {{myproduct.desc}}
                </p>
                <div class="rate_wrapper ">
                    <Rating 
                            v-model="data.rate"  
                            readonly 
                            :cancel="false" 
                            :pt="{
                                onIcon: { class: 'text-orange-400' }
                            }"/>
                    {{$t("TITLES.reviews")}}
                </div>
                <div class="prices_wrapper">
                    <span class="price">
                        {{myproduct.price}}
                    </span>
                    <span>
                        EGP
                    </span>
                    <span>
                        -
                    </span>
                    <span class="price">
                        {{myproduct.price}}
                    </span>
                    <span>
                       EGP
                    </span>
                    <span class="include_vat" v-if="!data.include_vat">
                        {{$t("TITLES.excludingVat")}}
                    </span>
                </div>
                <div class="prices_wrapper" >
                    <h4>
                        {{$t("TITLES.size")}}
                    </h4>
                    <div class="label_wrapper" v-for="(size,index) in product.sizes" :key="index">
                        <input
                            :name="size.key"
                            type="radio"
                            :id="size.key"
                            :value="size.key"
                            v-model="data.size"
                        />
                        <label :for="size.key">
                            <span class="include_vat">{{size.name}}</span>
                        </label>
                    </div>
                </div>
                <div class="prices_wrapper" >
                    <h4>
                        {{$t("TITLES.choiceOfAddOn")}}
                    </h4>
                    <div class="addtional_wrapper label_wrapper" v-for="(item,index) in product.additionals" :key="index">
                        <input
                            :name="item.key"
                            type="checkbox"
                            :id="`input_${item.key}`"
                            :value="item.key"
                            v-model="data.items"
                        />
                        <label :for="`input_${item.key}`">
                            <span class="include_vat">{{item.name}}</span>
                        </label>
                        <span>
                            + {{item.price}} {{product.currency}}
                        </span>
                    </div>
                </div>
                <div class="flex justify-between items-center flex-wrap my-[10px]" >
                    <div class="quantity_counter_wrapper">
                        <button type="button"   @click="changeQuantity(1)" >
                            <img    src="@/assets/images/plus.png" 
                                    alt="plus icon" 
                                    width="16" 
                                    height="16"/>
                        </button>
                        <span>
                            {{data.quantity}}
                        </span>
                        <button type="button" @click="changeQuantity(-1)">
                            <img    src="@/assets/images/miuns.png" 
                                    alt="plus icon" 
                                    width="16" 
                                    height="16"/>
                        </button>
                    </div>
                    <div class="flex justify-between items-center  my-4 ">
                        <button class="add_to_cart" @click="addcart" >
                            <img    src="@/assets/images/mainCart.png"
                                    alt="plus icon" 
                                    width="16" 
                                    height="16"/>
                                
                                {{$t("BUTTONS.addToCart")}}
                        </button>
                        <div class="total_price">
                            <h6>
                                {{$t("TITLES.totalOrder")}}
                            </h6>
                            <span>
                                {{myproduct.total_rate}} {{myproduct.my_rate}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto">
            <h2 class="main_page_title">
                {{$t("TITLES.similarProducts")}}
            </h2>
            <div>
                <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <GeneralProductCard     v-for="product in productData" 
                                            :key="product.id"
                                            :card-data="product"
                                            :button="$t('BUTTONS.readMore')"
                                            :route="$t('BUTTONS.readMore')"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useToast } from "vue-toastification";
const i18n = useI18n();
const toast = useToast();
const branch = useCookie('yourBranch').value;
const route = useRoute();
// const token = useCookie("token");
const headers = {
  Accept: "application/json",
  lang: i18n.locale.value,
  "Accept-Language": i18n.locale.value,
};
// if (token.value) {
//   headers.Authorization = `Bearer ${token.value}`;
// }
// const yourCart = useCookie(
//   'yourCart',
//   {
//     default: () => (null),
//     watch: true
//   }
// );

const data = reactive({
  size: null,
  items: [],
  quantity: 1,
  totalOrder: 50.00,
  fav: false,
  product: null
});

const myproduct = ref(null);
const productData = ref(null);

const { data: resdata } = await useAPILazyFetch(`${branch}/products/${route.params.id}`, {
  method: "GET",
});
watch(resdata, (resdata) => {
  if (resdata) {
    myproduct.value = resdata.data;
    // useCookie('cart').value= res.data
  }
});
const { data: res } = await useAPILazyFetch(`${branch}/products`, {
  method: "GET",
});
watch(res, (res) => {
  if (res) {
    productData.value = res.data;
  }
});
function changeQuantity(e) {
  if (e == -1 && data.quantity == 1) return;
  data.quantity += e;
}
const addcart = async () => {
  try {
    const frmData = new FormData();
    // frmData.append("product_id" , data.product);
    // frmData.append("qty" , data.quantity)
    // frmData.append("sizes", data.size);
    // frmData.append("additions", data.items);
    // frmData.append("qty", data.quantity);
    const { data: responce } = await useAPILazyFetch(`client/${branch}/new_carts`, {
      method: "POST",
      body: frmData,
    });
    toast.success("Add Successfully", {
      position: "top-right",
    });
    // data.size = null;
    // data.items = [];
    // data.quantity = null;
    console.log(responce);
  } catch (err) {
    console.log(err);
  }
};
const product = reactive({
        id:6,
        image:new URL(`@/assets/dammyImages/productDetails.png`, import.meta.url).href,
        title:'Goji Berry Acai Herbal Tea',
        description:'Coffee mixed with ice poured over cold foamed milk added with condensed milk and vanilla powder with your choice of sugar.',
        currency:"EGP",
        rate:'4.5',
        price_min:40,
        price_max:45,
        include_vat:false,
        discount:"10%",
        sizes:[
            {
                key:'small',
                name:'Small'
            },
            {
                key:'medium',
                name:'Medium'
            },
            {
                key:'large',
                name:'Large'
            },
        ],
        additionals:[
            {
                key:'milk',
                name:'Milk',
                price:'2.50'
            },
            {
                key:'extra_suger',
                name:'Extra Sugar',
                price:'2.50'
            },
        ],
        quantity:40,
        }
);
</script>
<style lang="scss" scoped>
.product_details_page{
    padding-block: 60px;
    .image_wrapper{
        position: relative;
        .add_to_fav{
            position: absolute;
            left: 30px;
            top: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #fff;
            @apply flex justify-center items-center;
            img{
                width: 20px;
                height: 20px;
            }
        }
        img{
            border-radius: 30px;
            display: inline-block;
            max-height: 650px;
        }
    }
    .product_details_wrapper{
        padding-inline-start: 25px;
        margin-block-end: 4rem;
        h3{
            @apply text-secondary font-bold ;
            font-size: 32px;
            margin-block-end: 8px;
            line-height: 1.5;
        }
        p{
            font-size: 17px;
            @apply font-light text-secondary;
            margin-block-end: 8px;
            max-width: 590px;
            opacity: 0.5;
        }
        .rate_wrapper{
            @apply font-medium text-secondary flex gap-2 ;
            // border-block-end: 1px solid #46251420;
            margin-block-end: 8px;
            font-size: 16px;
            
        }
        .prices_wrapper{
            @apply flex flex-wrap items-center justify-start gap-2 ;
            border-block-end: 1px solid #46251420;
            padding-block: 25px;
            h4{
                font-size: 24px;
                @apply font-medium text-secondary;
                margin-block-end: 10px;
                display: block;
                width: 100%;
            }
            span{
                @apply text-secondary font-semibold;
                font-size: 24px;
            }
            span.price{
                @apply text-primary;
            }
            .include_vat{
                font-size: 16px;
                @apply  text-secondary font-normal;
            }
            .label_wrapper{
                min-width: 150px;
                input[type="radio"] ,input[type="checkbox"] {
                    display: none;
                    &:checked + label::before {
                        background-image: url('@/assets/images/checked.png');
                        background-size: 20px;
                        background-position: center;
                    }
                }
                label{
                    position: relative;
                    padding-inline-start: 40px;
                    &::before{
                        content: '';
                        position: absolute;
                        left: 5px;
                        top: 0;
                        width: 20px;
                        height: 20px;
                        transition: 0.4s background-image linear;
                        border-radius: 50%;
                        border:1px solid #462514;
                    }
                }
            }
        }
        .addtional_wrapper{
            @apply flex justify-between flex-wrap;
            width: 100%;
            span{
                font-size: 20px;
                @apply font-medium text-secondary;
            }
        }
        .quantity_counter_wrapper{
            background: #F9F9F9;
            @apply flex  items-center justify-between flex-wrap;
            border-radius: 8px;
            padding: 5px ;
            span,button{
                line-height: 1.4;
                padding:8px  20px;
                display: inline-block;
            }
            span{
                font-size: 22px;
                @apply text-secondary  font-bold border-secondary;
                display: inline-block;
                border-inline:  1px solid;
            }
        }
        .add_to_cart{
            @apply flex justify-center items-center gap-x-2 border-primary text-center font-semibold  bg-primary text-white ;
            border-radius: 8px;
            border:1px solid ;
            line-height: 50px;
            min-width: 250px;
            font-size: 20px;
            padding-inline: 40px;
            transition: all 0.4s ease-in-out;
            margin-inline-end: 30px;
            img {
                filter: brightness(0) invert(1);
                transition: all 0.4s ease-in-out;
                display: inline-block;
            }
            &:hover{
                @apply   bg-white text-primary ;
                img {
                    filter: brightness(1) invert(0);
                }
            }
        }
        .total_price{
            h6{
                @apply text-secondary font-semibold;
                line-height: 1.4;
                font-size: 19px;
            }
            span{
                @apply text-primary font-semibold;
                line-height: 1.4;
                font-size: 19px;
            }
        }
    }
}
</style>
