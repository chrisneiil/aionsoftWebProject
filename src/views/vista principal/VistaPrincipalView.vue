<template>
  <div>
    <div class="imgBackground text-white">
      <div class=" row q-pt-none" style="background: rgba(25,118,210,0.66);height: 550px;">
        <div class="col  " style="">
          <div class="column items-center ">
            <img
              src="../../assets/imgs/logo-fullhd.png"
              style="width: 45%;height: 125px"
            >
            <h4 class="text-center" style="height: 50px">
              Brindamos servicios <br>
              informaticos ofreciendo
            </h4>
            <div class="flex justify-between">
              <span class="word ">
                  Calidad
                </span>
              <span class="word q-mx-lg">
                  Excelente servicio
                </span>
              <span class="word">
                  Aplicaciones flexibles para el usuario
                </span>
              <span class="word q-mx-lg">
                  Mayor productivodad
                </span>

            </div>
          </div>
        </div>
        <div class="col-4">
          <card-formulario-contacto/>
        </div>
        <div class="col-1 q-mt-none">

        </div>

      </div>
      <div class="row" style="height: 3000px ;background: #2b84da">a</div>
      <div>XD</div>
      <q-footer class="text-white bg-black"> Todos los derechos reservados.</q-footer>
    </div>
    asdasd
  </div>
</template>

<script setup lang="ts">
import CardFormularioContacto from "components/contacto/CardFormularioContacto.vue";
import {ref} from "vue";

</script>

<style scoped>
@media screen and (max-width: 1920px) {
  .tamaños {
    width: 100%;
    max-height: 300px;
  }
}

.imgBackground {
  max-height: 1080px;
  background-image: url("../../assets/imgs/group-diverse-people-having-business-meeting.jpg");
  background-repeat: no-repeat;
  background-position: center center;
}

@keyframes scaleAnimation {
  100%, 150% {
    font-size: 20px;
    color: deepskyblue
  }
  60% {
    font-size: 24px;

  }
}

.word {
  animation: scaleAnimation 6s infinite;
}
</style>
