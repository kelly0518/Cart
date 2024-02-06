import{productsStore} from "@/stores/cart";
import {useRouter} from "vue-router";
const router = useRouter()

<!-- <div class="cart-items" @click="router.push({name:'Cart'})">
                <p>Items in cart: {{ store.cart.length}}</p>
            </div> -->


            <script>
            import axios from 'axios';
            import MainHeader from '@/components/MainHeader.vue';
            import router from "@/router";
            
                export default {
                    components:{
                        MainHeader,
                    },
                    data(){
                        return{
            
                        };
                    },
                }
            </script>
            
            <script setup>
                import{computed} from "vue";
                import {useRoute, useRouter} from "vue-router"
            
                const store = productsStore()
                const router = useRouter()
                const route = useRoute()
                const selectedProduct = computed(()=>{
                    return store.products.find((item)=> item.id === Number(route.params.id))
                })
            
                const addToCart = () =>{
                    store.addToCart(selectedProduct.value)
                    router.push({name: 'Cart'})
                }
                const goToProductPage =(id)=>{
                    this.$router.push({name:'Product', params:{id:'2'}})
                }
            
                onMounted(()=>{
                    console.log('Mounted >>>')
                    store.fetchProductsFromDB()
                })
            </script>
            
            <template>
            <MainHeader />
                <div class="product-list">
                        <div class="product" v-for="product in store.products" :key="product.id">
                            <!-- @click="goToProductPage(product.id)" -->
                        <img :src="product.thumbnail" alt="">
                        <h2>Brand:{{ product.brand }}</h2>
                        <p>{{ product.description }}</p>
                        <p>${{ product.price }}</p>
                        <button @click="addToCart">加入購物車</button>
                        </div> 
                </div>
                <!-- <RouterLink class="RouterLink" to="/Cart"> -->
                        <!-- <button @click="addToCart">加入購物車</button> -->
                <!-- </RouterLink> -->
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