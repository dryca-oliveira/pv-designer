<template>
  <v-row id="services" v-scroll="onScroll" style="background-color: #f1f1f1">
    <v-col cols="12" class="px-0 py-0">
      <v-container style="max-width: 1150px">
        <v-row
          class="flex-column-reverse flex-sm-row text-center text-sm-left justify-sm-center px-4 px-lg-0"
        >
          <v-col class="pa-0" cols="12" sm="9" md="8" lg="8">
            <transition name="fadeInRight">
              <div v-if="show" class="font-title font-weight-bold pb-lg-6">
                O que podemos fazer por você
              </div>
            </transition>
            <div v-if="!show" style="height: 300px"></div>

            <div class="text-left font-subtitle">
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
              <v-icon class="pl-4" color="#F7B11D">fas fa-star </v-icon>
              <v-icon class="pl-4" color="#F7B11D">fas fa-star </v-icon>
              <v-icon class="pl-4" color="#F7B11D">fas fa-star </v-icon>
            </v-col>
          </transition>
        </v-row>

        <v-row class="px-4 px-lg-0">
          <v-col
            :class="{
              bordaBottom: item.bordabottom,
              bb0: item.bb0,
              smbb: item.smbb,
            }"
            class="pa-0 bb cards"
            cols="12"
            sm="6"
            md="4"
            v-for="(item, index) in items"
            :key="index"
          >
            <div
              :class="{
                bordaxy: item.borda,
                smbRnone: item.smbRnone,
                smbLnone: item.smbLnone,
                smbL: item.smbL,
                plNone: item.plNone,
              }"
              class="my-8 px-5"
            >
              <v-card color="transparent" class="pa-5" elevation="0">
                <div class="icone">
                  <v-icon color="#fff">{{ item.icon }} </v-icon>
                </div>
                <div class="titulo py-5">{{ item.title }}</div>
                <div style="width: 251px">{{ item.text }}</div>
              </v-card>
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

    items: [
      {
        icon: "fas fa-pencil-ruler",
        title: "design gráfico",
        text:
          "Folder, flyer, cartão de visita,pasta, papel timbrado, outdoor,painel, uniforme, crachá,adesivo, revista, livro",
        bordabottom: true,
        plNone: true,
      },
      {
        icon: "fas fa-network-wired",
        title: "redes sociais",
        text:
          "Folder, flyer, cartão de visita,pasta, papel timbrado, outdoor,painel, uniforme, crachá,adesivo, revista, livro",
        bordabottom: true,
        borda: true,
        smbRnone: true,
      },
      {
        icon: "fas fa-video",
        title: "ediçao de vídeo",
        text:
          "Folder, flyer, cartão de visita,pasta, papel timbrado, outdoor,painel, uniforme, crachá,adesivo, revista, livro",
        bordabottom: true,
      },
      {
        icon: "fas fa-fingerprint",
        title: "identidade visual",
        text:
          "Folder, flyer, cartão de visita,pasta, papel timbrado, outdoor,painel, uniforme, crachá,adesivo, revista, livro",
        smbb: true,
        smbL: true,
        plNone: true,
      },
      {
        icon: "fab fa-internet-explorer",
        title: "criação de sites",
        text:
          "Folder, flyer, cartão de visita,pasta, papel timbrado, outdoor,painel, uniforme, crachá,adesivo, revista, livro",
        borda: true,
        smbLnone: true,
      },
      {
        icon: "fas fa-church",
        title: "gospel",
        text:
          "Folder, flyer, cartão de visita,pasta, papel timbrado, outdoor,painel, uniforme, crachá,adesivo, revista, livro",
        bb0: true,
      },
    ],
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
  padding-top: 120px;
  padding-bottom: 46px;
  overflow: hidden;
}
.font-title {
  font-weight: 500;
  font-size: 44px;
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

.bordaxy {
  border-left: 1px solid #c4c4c4;
  border-right: 1px solid #c4c4c4;
}
.bordaBottom {
  border-bottom: 1px solid #c4c4c4;
}

.show {
  height: 300px;
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

  .bordaxy {
    border-left: none;
    border-right: none;
  }
  .bb {
    border-bottom: 1px solid #c4c4c4;
  }

  .bb0 {
    border-bottom: none;
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
  .smbb {
    border-bottom: 1px solid #c4c4c4;
  }
  .smbLnone {
    border-left: none;
  }
  .smbRnone {
    border-right: none;
  }
  .smbL {
    border-left: 1px solid #c4c4c4 !important;
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
  .plNone {
    padding-left: 0px !important;
  }
}
/* desktop */
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .cards {
    max-width: 360px;
  }
  .plNone {
    padding-left: 0px !important;
  }
}
/* extra large */
@media screen and (min-width: 1905px) {
}
</style>