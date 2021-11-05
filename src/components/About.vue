<template>
  <div>
    <v-row id="sobre" class="pt-3">
      <v-col class="pa-0" cols="12 " md="6">
        <v-img
          height="100%"
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
      <v-col
        class="px-4 pa-lg-0"
        cols="12"
        md="6"
        style="background-color: #1f22fd"
      >
        <div class="about">
          <h2 class="title pa-0">
            Desenvolvo projetos focados no DNA da sua empresa
          </h2>

          <p class="text">
            Olá, sou o Paulo Vitor, possuo uma experiência como designer com
            mais de 10 anos de mercado, onde ajudo empresas a alcançarem seus
            objetivos.
          </p>
          <p class="text mb-0">
            Especializado em Identidade Visual. Das diversas áreas que o
            marketing e a publicidade me proporcionaram, me encontrei no Design
            Gráfico. Trabalhei em algumas empresas a nível nacional e aprendi a
            desenvolver habilidades.
          </p>
          <div class="paddingButton">
            <v-btn to="/sobre-mim" class="aboutBtn" color="#fff"
              >Veja mais
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
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
  max-width: 448px;
  margin-bottom: 46px;
}
.text {
  font-weight: 400;
  font-size: 18px !important;
  line-height: 29px;
}
.paddingButton {
  padding-top: 40px !important;
}
.about {
  margin-left: 84px;
  max-width: 513px;
  padding-top: 148px;
  padding-bottom: 148px;
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
    margin-bottom: 16px;
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
  .about {
    margin-left: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
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
  .about {
    margin-left: 84px;
    padding-top: 48px;
    padding-bottom: 48px;
  }
}
/* desktop */
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .imagem {
    height: 798px;
  }
}
</style>