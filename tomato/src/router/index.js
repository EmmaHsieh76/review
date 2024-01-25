// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    // meta => 路由相關的資訊
    meta: {
      // 網頁的標題
      title:'番茄鐘 | 首頁'
    }
  },
  {
    path: '/list',
    component: () => import('@/views/ListView.vue'),
    // meta => 路由相關的資訊
    meta: {
      // 網頁的標題
      title:'番茄鐘 | 事項'
    }
  },
  {
    path: '/settings',
    component: () => import('@/views/SettingsView.vue'),
    // meta => 路由相關的資訊
    meta: {
      // 網頁的標題
      title:'番茄鐘 | 設定'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

// 跳頁後改頁面標題

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
