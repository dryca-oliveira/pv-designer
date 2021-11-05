<template>
  <v-container class="pa-0" fluid>
    <v-row justify="center">
      <v-img src="@/media/suprime/img1.png"> </v-img>
      <v-col cols="10" class="texto">
        <div style="max-width: 80%">
          <h2 class="mb-7">SUPREME - Soluções em Engenharia</h2>
          <p class="font-italic">
            The symbol was designed to convey the Ouroboros concept, which in
            its characteristics represent cycle, change and evolution.
          </p>
          <p class="font-italic">
            I formed the circle using a single line, to convey the idea of
            constancy, at the same time that it forms the letter S, making it
            possible to be used separately from the brand, as it mentions the
            initial.
          </p>
          <p class="pt-4">
            O símbolo foi projetado para transmitir o conceito Ouroboros, que em
            suas características representa ciclo, mudança e evolução.
          </p>
          <p>
            Formei o círculo usando uma linha única, para transmitir a ideia da
            constância, ao mesmo tempo que forma a letra S, possibilitando ser
            usado separadamente da marca, pois faz menção a inicial.
          </p>
        </div>
      </v-col>
      <v-img src="@/media/suprime/img2.png"> </v-img>
      <v-img src="@/media/suprime/img3.png"> </v-img>

      <v-img src="@/media/suprime/img4.png"> </v-img>
      <v-img src="@/media/suprime/img5.png"> </v-img>
      <v-img src="@/media/suprime/img6.png"> </v-img>
      <v-img src="@/media/suprime/img7.png"> </v-img>
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
  margin-top: 139px;
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