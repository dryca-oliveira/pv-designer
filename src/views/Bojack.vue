<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col class="pa-0">
        <v-img src="@/media/bojack/banner.png"></v-img>
      </v-col>
      <v-container style="max-width: 1150px">
        <v-row>
          <v-col cols="12" class="texto">
            <div style="max-width: 857px">
              <h2 class="mb-7">Logotipo Bojack</h2>
              <p>
                A Bojack é um container e bar de bebidas e conveniências,
                situado em Campinas/SP.O desafio era criar um logo que
                transmitisse a tradicionalidade da babida.
              </p>

              <p class="pt-4">
                Usamos uma estrela na parte superior representando qualidade,
                tornando a Bojack uma marca decaracterísticas únicas.
              </p>
              <p class="pt-4">
                A estrela também é usada sozinha, como ícone da marca.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/bojack/img1.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/bojack/img1-2.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/bojack/img2.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/bojack/img3.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/bojack/img4.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/bojack/img5-1.png"></v-img>
      </v-col>
    </v-row>

    <!-- <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/bojack/img7.png"></v-img>
      </v-col>
    </v-row> -->
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/bojack/img8-.png"></v-img>
      </v-col>
    </v-row>
    <Contact />
  </v-container>
</template>

<script>
import Contact from "../components/Contact.vue";
export default {
  name: "Bojack",
  components: {
    Contact,
  },
};
</script>

<style scoped>
.texto {
  padding-top: 97px;
  margin-bottom: 99px;
}
p {
  font-size: 18px;
  font-weight: 500;
}
h2 {
  font-size: 44px;
  font-weight: 600;
}
@media screen and (max-width: 600px) {
  .texto {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  h2 {
    font-size: 24px;
  }
  p {
    font-size: 14px;
  }
}
</style>