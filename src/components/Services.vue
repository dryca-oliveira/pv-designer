<template>
  <v-row id="servicos" v-scroll="onScroll" style="background-color: #f1f1f1">
    <v-col cols="12" class="px-0 py-0">
      <v-container style="max-width: 1150px">
        <v-row class="text-center text-sm-left justify-sm-center px-4 px-lg-0">
          <v-col class="pa-0" cols="12">
            <h2 class="font-title font-weight-bold pb-lg-1">
              Como posso te ajudar?
            </h2>

            <p class="font-subtitle">
              Estou aqui para atender você nos mais variados projetos. Conheça
              os principais serviços:
            </p>
          </v-col>
        </v-row>
        <v-row class="px-4 px-lg-0">
          <v-col class="pl-sm-0 pt-sm-0" cols="12" sm="4" md="4">
            <div class="card">
              <div class="icone mt-n9">
                <img src="@/assets/diamond.svg" alt="" />
              </div>
              <h3 class="titulo">Identidade Visual</h3>
              <p class="texto">
                A identidade da sua empresa reflete a qualidade do produto ou
                serviço que você oferece? Se a resposta for não, eu posso ajudar
                você.
              </p>
            </div>
          </v-col>
          <v-col class="pt-12 pt-sm-0" cols="12" sm="4" md="4">
            <div class="card">
              <div class="icone mt-n9">
                <img class="mb-2" src="@/assets/like.svg" alt="" />
              </div>
              <h3 class="titulo">Redes Sociais</h3>
              <p class="texto">
                Tenha uma presença marcante com Conteúdo de Qualidade,
                Gerenciamento de Mídias Sociais, Criação de Banners Digitais,
                Campanhas e Anúncios.
              </p>
            </div>
          </v-col>
          <v-col class="pr-sm-0 pt-12 pt-sm-0" cols="12" sm="4" md="4">
            <div class="card">
              <div class="icone mt-n9">
                <img src="@/assets/video.svg" alt="" />
              </div>
              <h3 class="titulo">Edição de Vídeo</h3>
              <p class="texto">
                Muitas empresas já entenderam o real impacto que os vídeos podem
                gerar no meio digital. Eu te ajudo a usar essa ferramenta de
                forma sedutora para atrair clientes.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row class="px-4 px-lg-0 pt-sm-16 mt-md-7">
          <v-col class="pl-sm-0 pt-12 pt-sm-0" cols="12" sm="4" md="4">
            <div class="card">
              <div class="icone mt-n9">
                <img src="@/assets/graphic.svg" alt="" />
              </div>
              <h3 class="titulo">Design Gráfico</h3>
              <p class="texto">
                O design é responsável por melhorar a experiência do consumidor
                levando-o à compra do produto ou serviço. É uma ferramenta capaz
                de agregar valor para sua empresa.
              </p>
            </div>
          </v-col>
          <v-col class="pt-12 pt-sm-0" cols="12" sm="4" md="4">
            <div class="card">
              <div class="icone mt-n9">
                <img src="@/assets/rede.svg" alt="" />
              </div>
              <h3 class="titulo">Criação de Sites</h3>
              <p class="texto">
                O desenvolvimento de sites envolve muito mais do que marketing.
                É também uma questão de estratégia. O seu site é a cara da sua
                empresa. Vamos torná-lo deslumbrante!
              </p>
            </div>
          </v-col>
          <v-col class="pr-sm-0 pt-12 pt-sm-0" cols="12" sm="4" md="4">
            <div class="card">
              <div class="icone mt-n9">
                <img class="mb-2" src="@/assets/church.svg" alt="" />
              </div>
              <h3 class="titulo">Gospel</h3>
              <p class="texto">
                Encante seus fãs com Capas de CDs/DVDs, Mídia Kits, Covers de
                Spotify e Todo Material Digital.
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
  line-height: 14px;
  margin-top: 26px;
  margin-bottom: 18px;
}
.texto {
  line-height: 22px;
}
.show {
  height: 300px;
}
.card {
  border: 2px solid #1f22fd;
  border-radius: 24px;
  padding-left: 36px;
  padding-right: 42px;
  min-height: 234px;
  height: 100%;
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
    padding-right: 24px;
  }
}
/* tablet */
@media screen and (min-width: 601px) and (max-width: 960px) {
  #servicos {
    max-height: none;
  }

  .card {
    height: 312px;
    padding-right: 16px;
    padding-left: 16px;
  }
}
/* leptop */
@media screen and (min-width: 961px) and (max-width: 1264px) {
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