<template>
  <q-card class="text-white"
          style="background: rgba(16,62,108,0.60);
                  height: 550px">
    <h4 class="q-pl-lg q-mt-none  q-pt-lg q-mb-lg">
      <q-icon name="mail"/>
      Contactanos
    </h4>
    <q-input
      class="text-white mensajeErrorGrande q-mx-lg"
      color="white"
      label="Nombre y apellido"
      dark
      :rules="[val => !!val || 'Debe rellenar este campo']"
      label-color="white"
      dense
      outlined/>
    <q-input
      class="text-white mensajeErrorGrande q-mt-sm q-mx-lg"
      color="white"
      label="Nombre de empresa"
      dark
      :rules="[val => !!val || 'Debe rellenar este campo']"
      label-color="white"
      dense
      outlined/>
    <q-input
      class="text-white mensajeErrorGrande q-mt-sm q-mx-lg"
      color="white"
      label="Teléfono "
      dark
      :rules="[val => !!val || 'Debe rellenar este campo']"
      label-color="white"
      dense
      outlined/>
    <q-input
      class="text-white mensajeErrorGrande q-mt-sm q-mx-lg"
      color="white"
      label="Email"
      v-model="mailContacto"
      dark
      :rules="[val => validarEmail(val) || 'Ingrese un mail valido']"
      label-color="white"
      dense
      outlined/>
    <q-input
      class="text-white mensajeErrorGrande sinResize q-mt-sm q-mx-lg"
      color="white"
      label="¿Como podemos ayudarte?"
      dark
      :rules="[val => !!val || 'Debe rellenar este campo']"
      type="textarea"
      label-color="white"
      dense
      outlined
    />
    <div class="q-mx-lg q-pt-sm">Acepto términos y condiciones *</div>
  </q-card>
</template>

<script setup lang="ts">
import {ref} from "vue";

const mailContacto = ref('')

const validarEmail = (email:string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
</script>

<style scoped>
.sinResize ::v-deep(.q-field__native){
  resize: none!important;
}

.mensajeErrorGrande ::v-deep(.q-field__messages){
  font-size: 14px;
  background: rgba(245, 245, 245, 0.3);
  max-width: 160px;
}
</style>
