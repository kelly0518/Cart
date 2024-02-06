<script>
    import router from "@/router";
    import { defineComponent } from 'vue';

    export default defineComponent({
        name:'CatalogView',
    });
</script>

<script setup>
    import{computed} from "vue";
    import {onMounted} from 'vue';
    import { productsStore } from '@/stores/product';
    import { useRouter} from "vue-router"

    const store = productsStore();
    const router = useRouter();


    const goToProductPage =(id)=>{
        router.push({name:'ProductView', params:{id}})
    }
    
    onMounted(async ()=>{
        // console.log('Mounted>>>',store.products);
        await store.fetchProductsFromDB()
        
    })
</script>


<template>
    <h1>ProductList</h1>
    <div class="product-list">
        <div class="product" v-for="product in store.products" :key="product.id" @click="goToProductPage(product.id)">
            <img :src="product.thumbnail" alt="">
            <h2>Brand:{{ product.brand }}</h2>
            <p>{{ product.description }}</p>
            <p>${{ product.price }}</p>
        </div> 
    </div>
</template>



<style scoped>
    .product-list{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 100px;
    }
    .product{
        flex-basis: 28%;
        margin: 8px;
        padding: 16px;
        box-shadow: 0px 0px 14px 1px #6666;
    }
    .product img{
        width: 70%;
    }
</style>