import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: 'counter',
        name: 'Counter',
        component: () => import('@/views/counter/index.vue')
      },
      {
        path: 'jsonplaceholder',
        name: 'sending request',
        component: () => import('@/views/jsonplaceholder/index.vue'),
        children: [
          {
            path: 'todos',
            name: 'Todos',
            component: () => import('@/views/jsonplaceholder/todos/index.vue')
          },
          {
            path: 'posts',
            name: 'Posts',
            component: () => import('@/views/jsonplaceholder/posts/index.vue')
          },
          {
            path: 'comments',
            name: 'Comments',
            component: () => import('@/views/jsonplaceholder/comments/index.vue')
          }
        ]
      }
    ]
  }
]

export default routes
