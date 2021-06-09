<template>
  <v-row id="services" v-scroll="onScroll" style="background-color: #f1f1f1">
    <v-col cols="12" class="px-0 py-0">
      <v-container style="max-width: 1150px">
        <v-row
          class="flex-column-reverse flex-sm-row text-center text-sm-left justify-sm-center px-4 px-lg-0"
        >
          <v-col class="pa-0" cols="12" sm="9" md="8" lg="8">
            <transition name="fadeInRight">
              <div v-if="show" class="font-title font-weight-bold pb-lg-3">
                O que podemos fazer por você?
              </div>
            </transition>
            <div v-if="!show" style="height: 300px"></div>

            <div class="text-left font-subtitle pb-6">
              Estamos aqui para atender você nos mais varioados projetos.
              Conheça nossos principais serviços, estamos aqui para atender você
              nos mais variados projetos, serviços, estamos estamos aqui para
              atender você nos mais variados projetos
            </div>
          </v-col>
          <transition name="fadeInLeft">
            <v-col
              v-if="show"
              cols="12"
              sm="3"
              md="4"
              lg="4"
              class="text-sm-right pr-md-4 pr-lg-0 pt-md-6"
            >
              <v-icon style="font-size: 20px" class="pl-4" color="#F7B11D"
                >fas fa-star
              </v-icon>
              <v-icon style="font-size: 20px" class="pl-4" color="#F7B11D"
                >fas fa-star
              </v-icon>
              <v-icon style="font-size: 20px" class="pl-4" color="#F7B11D"
                >fas fa-star
              </v-icon>
            </v-col>
          </transition>
        </v-row>

        <v-row class="sm-bb py-sm-8 pb-md-10 pb-lg-11 pt-lg-16">
          <v-col
            class="px-4 py-8 bb pt-sm-0 pb-lg-4 pl-lg-0"
            cols="12"
            sm="4"
            md="3"
          >
            <div class="icone">
              <v-icon color="#fff">fas fa-pencil-ruler</v-icon>
            </div>
            <div class="titulo pt-3">design gráfico</div>
            <div class="texto pt-3">
              "Folder, flyer, cartão de visita,pasta, papel timbrado,
              outdoor,painel, uniforme, crachá,adesivo, revista, livro"
            </div>
          </v-col>
          <v-col
            class="px-4 py-8 bb pt-sm-0 sm-brl px-md-10 pb-lg-4 px-lg-16"
            cols="12"
            sm="4"
          >
            <div class="icone">
              <v-icon color="#fff">fas fa-network-wired</v-icon>
            </div>
            <div class="titulo pt-3">redes sociais</div>
            <div class="texto pt-3">
              "Folder, flyer, cartão de visita,pasta, papel timbrado,
              outdoor,painel, uniforme, crachá,adesivo, revista, livro"
            </div>
          </v-col>
          <v-col
            class="px-4 py-8 bb pt-sm-0 px-md-10 pb-lg-4 px-lg-16"
            cols="12"
            sm="4"
          >
            <div class="icone">
              <v-icon color="#fff">fas fa-video</v-icon>
            </div>
            <div class="titulo pt-3">ediçao de vídeo</div>
            <div class="texto pt-3">
              "Folder, flyer, cartão de visita,pasta, papel timbrado,
              outdoor,painel, uniforme, crachá,adesivo, revista, livro"
            </div>
          </v-col>
        </v-row>

        <v-row class="pt-sm-8 pt-md-10 pt-lg-11 pb-lg-15">
          <v-col class="px-4 py-8 bb pt-sm-0 pl-lg-0" cols="12" sm="4" md="3">
            <div class="icone">
              <v-icon color="#fff">fas fa-fingerprint</v-icon>
            </div>
            <div class="titulo pt-3">identidade visual</div>
            <div class="texto pt-3">
              "Folder, flyer, cartão de visita,pasta, papel timbrado,
              outdoor,painel, uniforme, crachá,adesivo, revista, livro"
            </div>
          </v-col>
          <v-col
            class="px-4 py-8 bb pt-sm-0 sm-brl px-md-10 pb-lg-0 px-lg-16"
            cols="12"
            sm="4"
          >
            <div class="icone">
              <v-icon color="#fff">fab fa-chrome</v-icon>
            </div>
            <div class="titulo pt-3">criação de sites</div>
            <div class="texto pt-3">
              "Folder, flyer, cartão de visita,pasta, papel timbrado,
              outdoor,painel, uniforme, crachá,adesivo, revista, livro"
            </div>
          </v-col>
          <v-col
            class="px-4 py-8 pt-sm-0 px-md-10 pb-lg-0 px-lg-16"
            cols="12"
            sm="4"
          >
            <div class="icone">
              <v-icon color="#fff">fas fa-church</v-icon>
            </div>
            <div class="titulo pt-3">gospel</div>
            <div class="texto pt-3">
              "Folder, flyer, cartão de visita,pasta, papel timbrado,
              outdoor,painel, uniforme, crachá,adesivo, revista, livro"
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
#services {
  padding-top: 110px;
  padding-bottom: 46px;
  overflow: hidden;
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
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50% !important;
}
.titulo {
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
}

.show {
  height: 300px;
}
.sm-bb {
  border-bottom: 1px solid #c4c4c4;
}
.sm-brl {
  border-right: 1px solid #c4c4c4;
  border-left: 1px solid #c4c4c4;
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
  #services {
    padding-top: 0px;
  }
  .font-title {
    font-size: 26px;
  }
  .bb {
    border-bottom: 1px solid #c4c4c4;
  }
  .sm-brl {
    border-right: none;
    border-left: none;
  }
}
/* tablet */
@media screen and (min-width: 601px) and (max-width: 960px) {
  #services {
    padding-top: 30px;
    max-height: none;
  }
  .font-title {
    font-size: 30px;
  }
}
/* leptop */
@media screen and (min-width: 961px) and (max-width: 1264px) {
  #services {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .font-title {
    font-size: 38px;
  }
  .cards {
    max-width: 300px;
  }
}
/* desktop */
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .cards {
    max-width: 340px;
  }
}
/* extra large */
@media screen and (min-width: 1905px) {
}
</style>