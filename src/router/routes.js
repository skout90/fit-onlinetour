
const routes = [
  {
    path: '/',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/laboratory',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: '', component: () => import('pages/laboratory/LaboratoryPage.vue') }
    ]
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404Page.vue')
  })
}

export default routes
