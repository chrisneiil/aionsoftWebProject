<template>
  <q-layout view="lHh Lpr lFf">
    <!--<q-header elevated>
      <q-toolbar class="bg-black text-white  shadow-2">
        <span v-for="(link, index) in essentialLinks">
          <q-separator dark vertical/>
          <q-btn
            :class="index > 0 ? 'q-ml-md':''"
            no-caps
            dense
            stretch
            flat
            :label="link.title"
            :icon="link.icon"/>
        </span>
        <q-space/>
        Aionsoft 1.0.0v
      </q-toolbar>
    </q-header>-->
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import EssentialLink, {EssentialLinkProps} from 'components/EssentialLink.vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Nosotros',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'nosotros'
  },
  {
    title: 'Servicios',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'servicios'
  },
  {
    title: 'Clientes',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'clientes'
  },
  {
    title: 'Productos',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'productos'
  },
  {
    title: 'Contáctenos',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'contacto'
  },
];

</script>
