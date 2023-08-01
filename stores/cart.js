// import {defineStore} from 'pinia'
// const route = useRoute();
// const { id } = route.params;
// const config = useRuntimeConfig();
// const baseURL = config.public.baseURL;
// export const useCartStore = defineStore("cart", {
//     state: () => ({
//         cartContent: {}
//     }),
//     getters: {
//        async formattedCart(){
//             const products = await $fetch(`${baseURL}client/24/carts/${id}`,{
//                 method: "POST"
//             });
//             return Object.keys(this.cartContent).map(productId => {
//                 const product = this.cartContent[productId];
//                 return {
//                     id: product.productId,
//                     Image: products.find((p) => p.id === product.productId).image,
//                     name: products.find((p) => p.id === product.productId).name,
//                     price: products.find((p) => p.id === product.productId).price,
//                 }
//             })
//         }
//     },
//     actions: {
//         // async submit(){
//         //     const products = await $fetch(`${config.public.baseURL}check_code`,{
//         //         method: "POST"
//         //     })
//         // },
//         add(productId){
//             if(this.cartContent.hasOwnProperty(productId)){
//                 this.cartContent[productId] = {
//                     productId,
//                     quantity: this.cartContent[productId].quantity + 1,
//                 }
//             }else{
//                 this.cartContent[productId] = {
//                     productId,
//                     quantity: 1,
//                 }
//             }
//         },
//     }
// })

import { createStore } from "vuex";
import axios from "axios";
import Cookies from "js-cookie";

import auth from "./auth/index";

import { createToaster } from "@meforma/vue-toaster";
const toast = createToaster();

function updateLocaleStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export default createStore({
  state: {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    status: "",
    loading: false,
    cartDetais: JSON.parse(localStorage.getItem("cartDetails")) || [],
  },
  getters: {
    status: (state) => state.status,
    loading: (state) => state.loading,
    totalPrice: (state) => {
      return `${state.cart.reduce(
        (a, b) => +a + +b.product.price * b.quantity,
        0
      )}`;
    },

    cart: (state) => state.cart,
    cartDetais: (state) => state.cartDetais,

    totalQuantity: (state) => {
      return state.cart.length;
    },
    totalItems: (state) => {
      return state.cart.length;
    },
  },
  mutations: {
    removeItem(state, product) {
      let item = state.cart.filter(
        (el) => el.product.id !== product.product.id
      );
      let newItems = [];
      newItems.push(...item);
      updateLocaleStorage(newItems);
      state.cart = JSON.parse(localStorage.getItem("cart"));
    },
    addItemByOne(state, product) {
      let item = state.cart.filter((i) => i.product.id === product.product.id);
      if (item.length) {
        item[0].quantity += 1;
      } else {
        state.cart.push({ ...product });
      }
      updateLocaleStorage(state.cart);
    },
    removeItemByOne(state, product) {
      let item = state.cart.filter((i) => i.product.id === product.product.id);
      if (item.length) {
        item[0].quantity -= 1;
        if (item[0].quantity < 1) {
          let item = state.cart.filter(
            (el) => el.product.id !== product.product.id
          );
          let newItems = [];
          newItems.push(...item);
          updateLocaleStorage(newItems);
          state.cart = JSON.parse(localStorage.getItem("cart"));
        }
      } else {
        state.cart.push({ ...product });
      }
      updateLocaleStorage(state.cart);
    },

    updateCart(state, payload) {
      state.cart = payload;
    },
    cartDetais(state, payload) {
      state.cartDetais = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },

    logout(state) {
      state.status = "";
      state.token = "";
      state.cart = [];
      state.cartDetais = [];
    },
  },
  actions: {
    removeItem(context, product) {
      context.commit("setLoading", true);

      let item = context.state.cart.filter(
        (el) => el.product.id !== product.product.id
      );
      let newItems = [];
      newItems.push(...item);
      updateLocaleStorage(newItems);
      context.state.cart = JSON.parse(localStorage.getItem("cart"));
      context.commit("setLoading", false);
    },
    addToCart(context, product) {
      let item = context.state.cart.filter(
        (i) => i.product.id == product.product.id
      );
      if (item.length) {
        item[0].quantity += product.quantity;
      } else {
        context.state.cart.push({ ...product });
      }
      toast.success("Added Successfully", {
        position: "top-right",
      });
      updateLocaleStorage(context.state.cart);
    },
    getCart(context) {
      axios
        .get("carts", {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        })
        .then((data) => {
          context.commit("updateCart", data.data.data);
          context.commit("cartDetais", data.data);
          updateLocaleStorage(data.data.data);
          localStorage.setItem("cartDetails", JSON.stringify(data.data));
        });
    },
  },
  modules: { auth },
});
