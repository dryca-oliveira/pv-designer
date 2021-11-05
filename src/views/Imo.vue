<template>
  <v-container class="pa-0" fluid>
    <v-row justify="center">
      <v-img lazy-src="@/media/imo/img1.png" src="@/media/imo/img1.png">
      </v-img>
      <v-container style="max-width: 1150px">
        <v-row class="px-4 px-lg-0">
          <v-col cols="12" class="texto px-lg-0">
            <div style="max-width: 875px">
              <h2 class="mb-7">IMO Residencial</h2>
              <p class="font-italic">
                IMO Residencial is a startup of residential projects and
                construction, aiming the maximum care for families and quality
                delivery. Its important points are transparency and clarity.
              </p>

              <p class="pt-4">
                IMO Residencial é uma startup de projetos e construção
                residencial, visando o máximo de cuidado com as famílias e
                entrega de qualidade. Tem como pontos importantes transparência
                e clareza.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-img src="@/media/imo/img2.png"> </v-img>
      <v-img src="@/media/imo/img3.png"> </v-img>
      <v-img src="@/media/imo/img4.png"> </v-img>
      <v-img src="@/media/imo/img5.png"> </v-img>
      <v-img src="@/media/imo/img6.png"> </v-img>
      <v-img src="@/media/imo/img7.png"> </v-img>
      <v-img src="@/media/imo/img8.png"> </v-img>
      <v-img src="@/media/imo/img9.png"> </v-img>
      <v-img src="@/media/imo/img10.png"> </v-img>
    </v-row>
    <Contact />
  </v-container>
</template>

<script>
import Contact from "../components/Contact.vue";
export default {
  name: "Imo",
  components: {
    Contact,
  },
};
</script>

<style scoped>
.texto {
  padding-top: 135px;
  margin-bottom: 139px;
}
p,
h2 {
  font-size: 24px;
}
@media screen and (max-width: 600px) {
  .texto {
    padding-top: 40px;
    margin-bottom: 40px;
  }
  p {
    font-size: 14px;
  }
}
</style>