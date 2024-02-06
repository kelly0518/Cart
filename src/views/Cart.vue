<script>
    import {defineComponent } from 'vue';

    export default defineComponent({
        name:'CartView'
    })
</script>
<script setup>
    import {productsStore} from "@/stores/product"
    import {useRouter} from "vue-router"

    const store = productsStore();
    const router = useRouter();
    const removeFromCart = (id)=>{
        store.removeFromCart(id)
    }
</script>

<template>
    <h2>Cart</h2>
    <button @click="router.push({name:'Catalog'})">
            Back to catalog
        </button>
    <div v-if="!store.cart.length">
        <p>Cart content</p>
    </div>
    <p>Item in Cart: {{ store.cart.length }}</p>
    <div class="cart-item">
        <div class="cart-list" v-for="item in store.cart" :key="item.id">
        <div class="item-details">
            <img :src="item.thumbnail" alt="">
            <h2>Brand:{{ item.brand }}</h2>
            <p>{{ item.category }}</p>
            <p>${{ item.price }}</p>
            <button @click="removeFromCart(item.id)">Remove</button>
        </div> 
        </div>
    </div>
</template>

<style scoped>
    
</style>