<template>
  <v-container fluid>
    <v-row>
      <v-col class="pa-0">
        <v-img class="pb-lg-16 grey darken-4" src="@/assets/banner-about.png">
        </v-img>
      </v-col>
    </v-row>

    <v-row id="about" style="background-color: #1f22fd">
      <v-col class="pa-0" cols="12 " md="6">
        <v-img
          class="imagem grey darken-4"
          lazy-src="@/media/about-image.png"
          src="@/media/about-image.png"
        >
          <template v-slot:placeholder>
            <v-row
              style="height: 100vh"
              class="ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col align-self="center" cols="12" md="6" class="white--text pa-0">
        <v-container class="px-lg-0">
          <v-row class="card" style="max-width: 513px">
            <v-col class="px-0 pt-0" cols="12" lg="12">
              <h3>Quem é Paulo Vitor?</h3>
              <p class="mb-0">
                Um designer de 33 anos, casado, nascido no Rio de Janeiro que
                hoje reside em São Gonçalo. Desenha desde criança, amante de
                música e arte. Um hobby que tenho é tocar guitarra.
              </p>
            </v-col>
            <v-col class="px-0 py-0 pt-lg-14" cols="12" lg="12">
              <h3>Quem é Paulo Vitor designer?</h3>
              <p class="mb-0">
                Após trabalhar no marketing de algumas empresas, adquiri
                conhecimento e decidi montar meu próprio estúdio em 2015. Hoje,
                enquanto cuido da criação de Identidade visual, possuo uma
                equipe de outros 3 designers, um desenvolvedor web, um editor de
                vídeo e um gestor de mídias sociais.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <v-row class="message bg-dark" justify="center">
      <div class="px-4 pa-md-0" sm="10" lg="6" xl="4">
        <p class="ma-0 text-center">
          ‘‘Para uma marca ser vista como profissional, deve parar de ser
          apresentada ao mercado de forma amadora.’’
        </p>
      </div>
    </v-row>
    <v-container class="process">
      <v-row align="center" class="black--text">
        <v-col class="px-1 px-lg-0 py-lg-0" cols="12">
          <h2>Processo criativo:</h2>
        </v-col>
        <v-col class="px-1 px-lg-0 py-lg-0" cols="12" sm="10">
          <ul>
            <li>
              <h4>1 - Briefing:</h4>
              <p>
                Tudo começa pelo briefing. Ele é a matéria prima de todo
                projeto. É onde vou coletar, analisar e estudar as informações
                sobre o seu negócio, seus objetivos e os desafios que ele
                possui. Com ele eu consigo identificar os atributos que o
                projeto precisa conter.
              </p>
            </li>
            <li>
              <h4>2 - Pesquisa:</h4>
              <p>
                Nessa etapa, após entender as necessidades do projeto, faço uma
                série de pesquisas que incluem : buscar referências, analisar
                concorrentes, arquétipo da marca para o logo comunicar bem com
                os clientes e conceito.
              </p>
            </li>
            <li>
              <h4>3 - Criação:</h4>
              <p>
                Esta etapa é onde as ideias fluem e uso a criatividade. Vou
                utilizar as informações que você me enviou como principal fonte
                de inspiração. Essa é a hora de rabiscar, experimentar, testar
                as ideias. Tudo com o objetivo de criar um trabalho que tenha
                uma identidade própria.
              </p>
            </li>
            <li>
              <h4>4 - Apresentação:</h4>
              <p class="mb-0 pb-0">
                Explico todo conceito do projeto, utilizo provas virtuais que
                vão nos dar uma boa ideia de como o projeto vai se comportar no
                mundo real. Você vai ter uma visualização aproximada dos
                materiais impressos antes de serem produzidos, garantindo que o
                projeto alcance as expectativas. E explico todo o conceito do
                projeto.
              </p>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>

    <v-row class="text-center bg-dark py-10 py-sm-13">
      <v-container style="max-width: 1150px">
        <v-row justify-lg="space-between">
          <v-col class="py-0 px-4 pr-md-12 pr-lg-8 pl-lg-0" cols="3" lg="2">
            <div class="titulo">+60</div>
            <div class="subtitulo">Projetos de identidade visual</div>
          </v-col>
          <v-col class="py-0 px-3 px-sm-0" cols="3" lg="2">
            <div class="titulo">+200</div>
            <div class="subtitulo">
              Clientes <br />
              atendidos
            </div>
          </v-col>
          <v-col class="py-0 px-4 px-sm-0" cols="3" lg="2">
            <div class="titulo">+15</div>
            <div class="subtitulo">
              Estados <br />
              brasileiros
            </div>
          </v-col>
          <v-col class="py-0 px-4 pl-md-12 pr-lg-0" cols="3" lg="2">
            <div class="titulo ml-md-16 ml-lg-8">2015</div>
            <div class="subtitulo ml-md-16 ml-lg-8">Atendendo empresas</div>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <Contact />
  </v-container>
</template>

<script>
import Contact from "../components/Contact.vue";
export default {
  name: "About",
  components: {
    Contact,
  },
  data: () => ({
    isActive: false,
    overlay: true,
  }),
  created() {
    setTimeout(() => {
      this.overlay = false;
    }, 2000);
  },
};
</script>

<style scoped>
.card {
  margin-left: 100px;
}
.card h3 {
  font-weight: 900;
  font-size: 28px;
  padding-bottom: 36px;
  line-height: 34px;
}
.card p {
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
}
.bg-dark {
  background-color: #1f1f1f;
  color: #fff;
}
.message {
  padding-top: 90px;
  padding-bottom: 90px;
}
.message p {
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  width: 823px;
}
h2 {
  font-weight: bold;
  font-size: 40px;
  line-height: 30px;
  margin-top: 129px;
  margin-bottom: 128px;
}
.process {
  max-width: 1150px;
  margin-bottom: 146px;
}
h4 {
  font-weight: bold;
  font-size: 30px;
  padding-left: 40px;
}

ul li p {
  font-size: 20px;
  line-height: 42px;
  padding-left: 40px;
  padding-bottom: 70px;
}

ul li {
  list-style: none;
}
ul li::before {
  font-family: FontAwesome;
  float: left;
  margin-left: -22px;
  content: "\f111";
  color: #1f22fd;
  font-size: 22px;
  margin-top: 6px;
  position: absolute;
}
.titulo {
  font-weight: 600;
  font-size: 45px;
  line-height: 32px;
  margin-bottom: 10px;
}
.subtitulo {
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
}
/* mobile */
@media screen and (max-width: 600px) {
  .card {
    margin-right: 16px;
    margin-left: 16px;
    padding-top: 64px;
    padding-bottom: 64px;
  }
  .card h3 {
    font-size: 20px;
    padding-bottom: 20px;
  }
  .message {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .message p {
    font-size: 16px;
    line-height: 24px;
    width: 100%;
  }
  h2 {
    font-size: 24px;
    margin-top: 64px;
    margin-bottom: 0px;
  }
  .process {
    margin-bottom: 64px;
  }
  h4 {
    font-weight: 600;
    font-size: 20px;
    padding-left: 20px;
  }

  ul li p {
    font-size: 16px;
    line-height: 30px;
    padding-left: 20px;
    padding-bottom: 20px;
  }

  ul li {
    list-style: none;
  }
  ul li::before {
    font-size: 18px;
    margin-top: 4px;
  }
  .titulo {
    font-size: 20px;
  }
  .subtitulo {
    font-size: 8px;
    line-height: 12px;
  }
}
/* tablet */
@media screen and (min-width: 601px) and (max-width: 960px) {
  .message {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .message p {
    width: 600px;
  }
  .card {
    padding-top: 64px;
    padding-bottom: 64px;
  }
}
/* leptop */
@media screen and (min-width: 961px) and (max-width: 1264px) {
  .card {
    margin-left: 80px;
    margin-right: 16px;
  }
  .card h3 {
    font-size: 22px;
    padding-bottom: 16px;
  }
  .card p {
    font-size: 16px;
    line-height: 26px;
  }
  .imagem {
    height: 620px;
  }
  .message {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  /* .message p {
    font-weight: 500;
    font-size: 22px;
    line-height: 30px;
  } */
}
/* desktop */
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .imagem {
    height: 767px;
  }
}

/* extra large */
@media screen and (min-width: 1905px) {
  .imagem {
    height: 1066px;
  }
}
</style>
