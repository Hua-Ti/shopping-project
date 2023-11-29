import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 首页
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      // 关注
      path: '/attention',
      name: 'attention',
      component: () => import('../views/AtentionView.vue')
    },
    {
      // 直播
      path: '/liveBroadcast',
      name: 'liveBroadcast',
      component: () => import('../views/LiveBroadcastView.vue')
    },
    {
      // 消息
      path: '/message',
      name: 'message',
      component: () => import('../views/MessageView.vue')
    },
    {
      // 我的
      path: '/mine',
      name: 'mine',
      component: () => import('../views/MineView.vue')
    }
  ]
})

export default router
