<template>
  <v-container class="pa-0" fluid>
    <v-row justify="center">
      <v-img src="@/media/belarina/img1.png"> </v-img>
      <v-col cols="10" class="texto">
        <div style="max-width: 80%">
          <h2 class="mb-7">Bela Arina Pousada & Hostel - SP.</h2>
          <p>
            Desde o início tivemos o cuidado de criar uma marca que transmitisse
            a sensação de lar e conforto. Usamos cores vivas, mas, mantendo
            sempre um design clean.
          </p>
        </div>
      </v-col>
      <v-img src="@/media/belarina/img2.png"> </v-img>
      <v-img src="@/media/belarina/img3.png"> </v-img>

      <v-img src="@/media/belarina/img4.png"> </v-img>
      <v-img src="@/media/belarina/img5.png"> </v-img>
    </v-row>
    <Contact />
  </v-container>
</template>

<script>
import Contact from "../components/Contact.vue";
export default {
  name: "Coronavirus",
  components: {
    Contact,
  },
};
</script>


<style scoped>
.texto {
  margin-top: 135px;
  margin-bottom: 139px;
}
p,
h2 {
  font-size: 24px;
}

@media screen and (max-width: 600px) {
  .texto {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  p {
    font-size: 14px;
  }
}
</style>