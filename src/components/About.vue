<template>
  <v-row id="about" style="background-color: #1f22fd">
    <v-col class="pa-0" cols="12 " md="6">
      <v-img
        class="imagem"
        lazy-src="@/media/about.jpg"
        src="@/media/about.jpg"
        max-height="798px"
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
    <v-col cols="12" md="6">
      <v-row class="padding ml-sm-16" style="max-width: 575px">
        <v-col class="title pa-0" cols="12">
          Desenvolvimento <br />
          de marcas focado no DNA da sua empresa
        </v-col>
        <v-col class="text px-0 pb-0" cols="12">
          Olá, sou Paulo Vitor, possuo uma experiência como designer com mais de
          7 anos de mercado, especializado em marcas. Das diversas áreas que a
          publicidade me proporcionou, me encontrei no designer gráfio. já
          trabalhei em algumas empresas a nível Brasil onde aprendi e desenvolvi
          minhas habilidades e ajudo empresas a alcançarem seus objtivos.
        </v-col>
        <v-col class="pt-0 pl-0 paddingButton" cols="12">
          <v-btn class="aboutBtn" color="#fff">Veja mais </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
#about {
  background-color: #1f22fd;
  color: #fff;
}

.title {
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
  padding-bottom: 132px;
}
.padding {
  padding-left: 84px !important;
}
.aboutBtn {
  width: 222px;
  height: 54px !important;
  font-weight: 500 !important;
  font-size: 16px;
  color: #1f22fd;
}
/* mobile */
@media screen and (max-width: 600px) {
  .title {
    font-weight: 900;
    font-size: 26px !important;
    line-height: 32px;
    margin-top: 50px;
  }
  .padding {
    padding-left: 24px !important;
    padding-right: 20px !important;
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
  #about {
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
  #about {
    height: 798px;
  }
  .imagem {
    height: 798px;
  }
}
</style>