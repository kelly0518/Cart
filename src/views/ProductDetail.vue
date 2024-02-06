<script>
    import {defineComponent } from 'vue';

    export default defineComponent({
        name:'ProductDetails'
    })
</script>

<script setup>
    import{computed} from "vue";
    import { productsStore } from '@/stores/product';
    import {useRoute, useRouter} from "vue-router"

    const router = useRouter();
    const route = useRoute();
    const store = productsStore();

    const selectedProduct = computed(()=>{
        return store.products.find((item)=> item.id === Number(route.params.id))
    })
    const addToCart = () =>{
        store.addToCart(selectedProduct.value)
        router.push({name: 'CartView'})
    }
</script>

<template>
    <h1>Product details</h1>
    <button @click="router.push({name:'Catalog'})">Back to catalog</button>
    <div class="product">
            <div class="product-image">
                <img :src="selectedProduct.thumbnail" alt="">
            </div>
            <h2>Brand:{{ selectedProduct.brand }}</h2>
            <p>{{ selectedProduct.description }}</p>
            <p>${{ selectedProduct.price }}</p>
            <button @click="addToCart">加入購物車</button>
    </div>
</template>

<style scoped>
    
</style>