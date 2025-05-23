import { createRouter, createWebHashHistory } from 'vue-router'

// 预加载 SendFileView 组件
const SendFileView = () => import('../views/SendFileView.vue')
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Retrieve',
      component: () => import('@/views/RetrievewFileView.vue'),
      meta: {
        title: '文件快递柜 - FileCodeBox'
      }
    },
    {
      path: '/send',
      name: 'Send',
      component: SendFileView
    },
    {
      path: '/admin',
      name: 'Manage',
      component: () => import('@/layout/AdminLayout/AdminLayout.vue'),
      redirect: '/admin/dashboard',
      children: [
        {
          path: '/admin/dashboard',
          name: 'Dashboard',
          component: () => import('@/views/manage/DashboardView.vue')
        },
        {
          path: '/admin/files',
          name: 'FileManage',
          component: () => import('@/views/manage/FileManageView.vue')
        },
        {
          path: '/admin/settings',
          name: 'Settings',
          component: () => import('@/views/manage/SystemSettingsView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/manage/LoginView.vue')
    }
  ]
})

export default router
