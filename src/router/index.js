
import { createRouter, createWebHistory } from 'vue-router'
// import Catalog from "@/view/Catalog.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior (to, from, savedPosition) {
        // return 期望滾動到哪個的位置
            // 始终滚動到頂部
        return { top: 0 }
    },
    routes: [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home,
    // },
    {
        path: '/',
        name: 'Catalog',
        // component: Catalog,
        component: () => import('@/views/Catalog.vue')
    },
    {
        path: '/product/:id',
        name: 'ProductView',
        // component: Catalog,
        component: () => import('@/views/ProductDetail.vue')
    },
    {
        path: '/cart',
        name: 'CartView',
        // component: Catalog,
        component: () => import('@/views/Cart.vue')
    },
    ]
})
//以下為上方新增meta:{title:}去更改每個頁面的頁簽名稱才需要解開註解。
router.beforeEach(async (to, from) => {
    if( to.meta && to.meta.title){
        document.title = to.meta.title
    }
})
export default router
