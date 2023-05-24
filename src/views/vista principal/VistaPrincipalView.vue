<template>
  <div class="imgBackground">
    <div class="column items-center">
      <img
        src="../../assets/imgs/logo-fullhd.png"
        style="width: 50%;height: 150px"
      >
    </div>
    <div class="q-pa-md row " style="height: 250px;">
      <div class="col" style="">
        <q-parallax :height="200" :speed="0.8" style="border: white 2px solid">
          <template v-slot:media>
            <img src="../../assets/imgs/administracion.jpg">
          </template>

          <h1 class="text-white">¿Por que Aionsoft?</h1>
        </q-parallax>
      </div>
      <div class="col ">
        <q-carousel

          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="white"
          navigation
          padding
          height="200px"
          navigation-position="top"
          style="background: rgba(169,169,169,0.0);border: white 2px solid"
          class="shadow-1 rounded-borders"
        >
          <template v-slot:navigation-icon="{ active, btnProps, onClick }">
            <q-btn v-if="active" size="lg" icon="home" color="yellow" flat round dense @click="onClick"/>
            <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick"/>
          </template>

          <q-carousel-slide name="style" class="column no-wrap text-white">
            <q-icon name="style" size="56px"/>
            <div class="q-mt-md  ">
              <h5>AionSoft Ltda. desarrollo de Software a medida:</h5>
              Somos una empresa dedicada a la creación de Software ajustado a las necesidades nuestros clientes, destacándonos por desarrollar aplicaciones para multiples plataformas, entre ellas Web, escritorio y móvil.
              <br>
              <h5>Misión</h5>
              <br>
              Entregar un producto final de calidad que sobrepase las expectativas de nuestros clientes, cumpliendo con los plazos establecidos e integrando tecnologías de vanguardia en el desarrollo.
              <br>
              Visión
              Ser una empresa que evolucione constantemente con el fin de mejorar nuestros procesos, la calidad de los productos entregados y de esta manera, posicionar a la región como un actor relevante en el desarrollo de soluciones de Software dentro del país.
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="tv" class="column no-wrap text-white">
            <q-icon name="live_tv" size="56px"/>
            <div class="q-mt-md text-center text-white">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="layers" class="column no-wrap text-white">
            <q-icon name="layers" size="56px"/>
            <div class="q-mt-md text-center text-white">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="map" class="column no-wrap text-white">
            <q-icon name="terrain" size="56px"/>
            <div class="q-mt-md text-center text-white">
              {{ lorem }}
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>

    </div><div class="row" style="height: 300px">a</div>
    <q-footer class="text-white bg-black"> Todos los derechos reservados.</q-footer>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const slide = ref('style')
const lorem = ref('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.')

</script>

<style scoped>
@media screen and (max-width: 1920px) {
  .tamaños {
    width: 100%;
    max-height: 300px;
  }
}

.imgBackgroundAionsoft {
  background: black;
  background-image: url("../../assets/imgs/330M.gif");
  background-repeat: no-repeat;
  background-position: center center;
}

.imgBackground {
  height: 100%;
  background: black;
  background-image: url("../../assets/imgs/7ZN3.gif");
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
