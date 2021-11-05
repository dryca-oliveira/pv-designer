<template>
  <v-container fluid class="black">
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/coronavirus/banner.png"></v-img>
      </v-col>
    </v-row>
    <v-container style="max-width: 1150px">
      <v-row justify="center">
        <v-col cols="12" class="texto px-0">
          <div class="mx-auto" style="max-width: 774px; color: white">
            <p class="font-italic">
              In this period when most of the market has stopped, the economy
              affected, people are "stuck" at home due to the spreading
              pandemic. That we can rethink life, health, work, money and
              family.
            </p>
            <p class="font-italic">
              Concept: A lone, surviving soldier with a mask to protect himself
              from a land devastated by the virus. The search for a solution.
            </p>

            <p class="pt-4">
              Nesse período em que a maior parte do mercado parou, a economia
              está afetada, as pessoas estão "presas" em casa devido a pandemia
              que se espalha, que possamos repensar a vida, a saúde, o trabalho,
              o dinheiro e a família.
            </p>
            <p>
              Conceito: Um soldado solitário. Sobrevivente com uma máscara para
              se proteger de uma terra arrasada pelo vírus. A procura de uma
              solução.
            </p>
            <p class="pt-4">[Isaiah 26:20-21]</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/coronavirus/img1.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/coronavirus/img2.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/coronavirus/img3.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/coronavirus/img4.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/coronavirus/img5.png"></v-img>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/coronavirus/img7.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/coronavirus/img8.png"></v-img>
      </v-col>
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
  padding-top: 34px;
  margin-bottom: 0px;
}
p {
  font-size: 18px;
  font-weight: 700;
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