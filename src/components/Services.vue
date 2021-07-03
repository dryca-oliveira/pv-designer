<template>
  <v-row id="servicos" v-scroll="onScroll" style="background-color: #f1f1f1">
    <v-col cols="12" class="px-0 py-0">
      <v-container style="max-width: 1150px">
        <v-row
          class="
            flex-column-reverse flex-sm-row
            text-center text-sm-left
            justify-sm-center
            px-4 px-lg-0
          "
        >
          <v-col class="pa-0" cols="12">
            <h2 class="font-title font-weight-bold pb-lg-1">
              Como posso te ajudar?
            </h2>

            <p class="text-left font-subtitle">
              Estou aqui para atender você nos mais variados projetos. Conheça
              os principais serviços:
            </p>
          </v-col>
        </v-row>
        <v-row class="px-4 px-lg-0">
          <v-col class="pl-sm-0 pt-sm-0" cols="12" sm="4" md="4">
            <div class="card">
              <div class="icone mt-n9">
                <img src="@/assets/diamond.png" alt="" />
              </div>
              <h3 class="titulo pt-1">Identidade Visual</h3>
              <p class="texto pt-3">
                A identidade da sua empresa reflete a qualidade do produto ou
                serviço que você oferece? Se a resposta for não, posso ajudar
                você.
              </p>
            </div>
          </v-col>
          <v-col class="pt-12 pt-sm-0" cols="12" sm="4" md="4">
            <div class="card">
              <div class="icone mt-n9">
                <img src="@/assets/like.png" alt="" />
              </div>
              <h3 class="titulo pt-1">Redes Sociais</h3>
              <p class="texto pt-3">
                Tenha uma presença marcante com conteúdo de qualidade,
                gerenciamento de mídias sociais, criação de banners digitais,
                campanhas e anúncios.
              </p>
            </div>
          </v-col>
          <v-col class="pr-sm-0 pt-12 pt-sm-0" cols="12" sm="4" md="4">
            <div class="card">
              <div class="icone mt-n9">
                <img src="@/assets/video.png" alt="" />
              </div>
              <h3 class="titulo pt-1">Edição de Vídeo</h3>
              <p class="texto pt-3">
                Muitas empresas já entenderam o real impacto que os vídeos podem
                gerar no meio digital e como são uma ferramenta forte para
                atrais clientes.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row class="px-4 px-lg-0 pt-sm-16 mt-md-7">
          <v-col class="pl-sm-0 pt-12 pt-sm-0" cols="12" sm="4" md="4">
            <div class="card">
              <div class="icone mt-n9">
                <img src="@/assets/graphic.png" alt="" />
              </div>
              <h3 class="titulo pt-1">Design Gráfico</h3>
              <p class="texto pt-3">
                Slides – Apresentações corporativas Criação de materiais
                impressos Artes para e-mail marketing Rótulos para produtos
                Editorial
              </p>
            </div>
          </v-col>
          <v-col class="pt-12 pt-sm-0" cols="12" sm="4" md="4">
            <div class="card">
              <div class="icone mt-n9">
                <img src="@/assets/rede.png" alt="" />
              </div>
              <h3 class="titulo pt-1">Criação de Sites</h3>
              <p class="texto pt-3">
                Desenvolvimento de websites, portais, e-commerce, aplicativos e
                sistemas.
              </p>
            </div>
          </v-col>
          <v-col class="pr-sm-0 pt-12 pt-sm-0" cols="12" sm="4" md="4">
            <div class="card">
              <div class="icone mt-n9">
                <img src="@/assets/church.png" alt="" />
              </div>
              <h3 class="titulo pt-1">Gospel</h3>
              <p class="texto pt-3">
                Encante seus fãs com capa de CD/DVD, Mídia kit, cover de Spotify
                e todo material digital.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),

  methods: {
    onScroll() {
      if (window.scrollY > 1800) {
        this.show = true;
      }
    },
  },
};
</script>
<style scoped>
.fadeInRight-enter-active,
.fadeInRight-leave-active {
  transition: transform 1.9s ease-in;
}
.fadeInRight-enter {
  transform: translate3d(-130px, 0, 0);
}

.fadeInLeft-enter-active,
.fadeInLeft-leave-active {
  transition: transform 1.9s ease-in;
}
.fadeInLeft-enter {
  transform: translate3d(130px, 0, 0);
}
#servicos {
  padding-top: 110px;
  padding-bottom: 108px;
  overflow: hidden;
}
.font-subtitle {
  margin-bottom: 120px;
}

.font-title {
  font-weight: 500;
  font-size: 40px;
}
.font-subtitle {
  font-size: 18px;
}
.icone {
  background-color: #1f22fd;
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50% !important;
}

.titulo {
  font-size: 20px;
  font-weight: bold;
  text-transform: none;
}
/* .texto {
  max-width: 267px;
} */
.show {
  height: 300px;
}
.card {
  border: 1px solid #1f22fd;
  border-radius: 24px;
  padding-left: 36px;
  padding-right: 42px;
  height: 234px;
}

/* mobile */
@media screen and (max-width: 600px) {
  .fadeInRight-enter-active,
  .fadeInRight-leave-active {
    transition: transform 1.5s ease-in;
  }
  .fadeInRight-enter {
    transform: translate3d(0, 40px, 0);
  }

  .fadeInLeft-enter-active,
  .fadeInLeft-leave-active {
    transition: transform 1.5s ease-in;
  }
  .fadeInLeft-enter {
    transform: translate3d(0, 40px, 0);
  }
  #servicos {
    padding-top: 64px;
  }
  .font-title {
    font-size: 26px;
  }
  .font-subtitle {
    margin-bottom: 64px;
  }
  .card {
    height: 268px;
    padding-right: 24px;
  }
}
/* tablet */
@media screen and (min-width: 601px) and (max-width: 960px) {
  #servicos {
    padding-top: 30px;
    max-height: none;
  }
  .font-title {
    font-size: 30px;
  }
  .card {
    height: 334px;
    padding-right: 24px;
  }
}
/* leptop */
@media screen and (min-width: 961px) and (max-width: 1264px) {
  #servicos {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .font-title {
    font-size: 38px;
  }
  .card {
    padding-right: 24px;
  }
}
/* desktop */
@media screen and (min-width: 1264px) and (max-width: 1904px) {
}
/* extra large */
@media screen and (min-width: 1905px) {
}
</style>