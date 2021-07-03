<template>
  <v-row id="sobre" class="mt-3">
    <v-col class="pa-0" cols="12 " md="6">
      <v-img
        class="imagem"
        lazy-src="@/media/about-image.png"
        src="@/media/about-image.png"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
    <v-col cols="12" md="6" class="pl-lg-4" style="background-color: #1f22fd">
      <v-row class="padding ml-sm-16" style="max-width: 516px">
        <v-col cols="12" lg="10">
          <h2 class="title pa-0">
            Desenvolvo projetos focados no DNA da sua empresa
          </h2>
        </v-col>
        <v-col class="text px-0 pb-0" cols="12">
          <p>
            Olá, sou o Paulo Vitor, possuo uma experiência como designer com
            mais de 10 anos de mercado, onde ajudo empresas a alcançarem seus
            objetivos.
          </p>
          <p>
            Especializado em Identidade Visual. Das diversas áreas que o
            marketing e a publicidade me proporcionaram, me encontrei no Design
            Gráfico. Trabalhei em algumas empresas a nível nacional e aprendi a
            desenvolver habilidades.
          </p>
        </v-col>
        <v-col class="pt-0 pl-0 paddingButton" cols="12">
          <v-btn to="/sobre-mim" class="aboutBtn" color="#fff"
            >Veja mais
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
#sobre {
  background-color: #1f1f1f;
  color: #fff;
}

.title {
  font-family: "Montserrat", sans-serif !important;
  font-weight: 900;
  font-size: 36px !important;
  line-height: 44px;
  margin-top: 156px;
}
.text {
  font-weight: 500;
  font-size: 18px !important;
  padding-top: 36px !important;
}
.paddingButton {
  padding-top: 72px !important;
}

.aboutBtn {
  width: 170px;
  height: 50px !important;
  font-weight: bold;
  font-size: 16px;
  text-transform: none !important;
  color: #1f22fd;
}
/* mobile */
@media screen and (max-width: 600px) {
  .imagem {
    height: 60vh;
  }
  .title {
    font-weight: 900;
    font-size: 26px !important;
    line-height: 32px;
    margin-top: 64px;
  }
  .padding {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
  .text {
    font-size: 16px !important;
    padding-top: 10px !important;
  }
  .paddingButton {
    padding-top: 20px !important;
    padding-bottom: 50px !important;
  }
  .aboutBtn {
    width: 120px;
    height: 44px !important;
    font-weight: 500 !important;
    font-size: 16px;
    color: #1f22fd;
  }
}
/* tablet */
@media screen and (min-width: 601px) and (max-width: 960px) {
  .paddingButton {
    padding-bottom: 50px !important;
  }
}
/* leptop */
@media screen and (min-width: 961px) and (max-width: 1264px) {
  #sobre {
    height: 740px;
  }
  .imagem {
    height: 740px !important;
  }
  .title {
    margin-top: 50px;
  }
  .padding {
    padding-left: 24px !important;
    padding-right: 24px;
  }
}
/* desktop */
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .imagem {
    height: 798px;
  }
}
</style>