import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'exdi', component: () => import('pages/IndexPage.vue') },
      { path: '', component: () => import('src/views/vista principal/VistaPrincipalView.vue') },
      { path: 'clientes', component: () => import('src/views/clientes/ClientesView.vue') },
      { path: 'contacto', component: () => import('src/views/contacto/ContactoView.vue') },
      { path: 'nosotros', component: () => import('src/views/nosotros/NosotrosView.vue') },
      { path: 'productos', component: () => import('src/views/productos/VistaProductosView.vue') },
      { path: 'servicios', component: () => import('src/views/servicios/VistaServiciosView.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
