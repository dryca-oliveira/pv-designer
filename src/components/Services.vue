<template>
  <v-row id="services" v-scroll="onScroll" style="background-color: #f1f1f1">
    <v-col cols="12" class="px-0 py-0">
      <v-container style="max-width: 1150px">
        <v-row
          class="flex-column-reverse flex-sm-row text-center text-sm-left justify-sm-center pa-0 areaTitle"
        >
          <v-col class="pa-0" cols="12" sm="9" md="9" lg="8">
            <transition name="fadeInRight">
              <div v-if="show" class="font-title font-weight-bold pb-3">
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
              md="3"
              lg="4"
              class="text-sm-right"
            >
              <v-icon color="#F7B11D">fas fa-star </v-icon>
              <v-icon color="#F7B11D">fas fa-star </v-icon>
              <v-icon color="#F7B11D">fas fa-star </v-icon>
            </v-col>
          </transition>
        </v-row>

        <v-row>
          <v-col
            :class="{ bordaBottom: item.bordabottom, bb0: item.bb0 }"
            class="pa-0 bb"
            cols="12"
            sm="4"
            v-for="(item, index) in items"
            :key="index"
          >
            <div :class="{ bordaxy: item.borda }" class="my-10 px-5">
              <v-hover close-delay="100" open-delay="200">
                <template v-slot:default="{ hover }">
                  <v-card
                    :class="{ dark: hover }"
                    :color="hover ? '#F7B11D' : 'transparent'"
                    :elevation="hover ? 20 : 0"
                    class="pa-5 transition-swing"
                  >
                    <div class="icone">
                      <v-icon color="#fff">{{ item.icon }} </v-icon>
                    </div>
                    <div class="titulo pt-3">{{ item.title }}</div>
                    <div class="texto pt-3">{{ item.text }}</div>
                  </v-card>
                </template>
              </v-hover>
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
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, velit debitis, incidunt dolor dolores maxime atque eligendi animi voluptates in vero modi distinctio?",
        bordabottom: true,
      },
      {
        icon: "fas fa-network-wired",
        title: "redes sociais",
        text:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, velit debitis, incidunt dolor dolores maxime atque eligendi animi voluptates in vero modi distinctio?",
        bordabottom: true,
        borda: true,
      },
      {
        icon: "fas fa-video",
        title: "ediçao de vídeo",
        text:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, velit debitis, incidunt dolor dolores maxime atque eligendi animi voluptates in vero modi distinctio?",
        bordabottom: true,
      },
      {
        icon: "fas fa-fingerprint",
        title: "identidade visual",
        text:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, velit debitis, incidunt dolor dolores maxime atque eligendi animi voluptates in vero modi distinctio?",
      },
      {
        icon: "fab fa-internet-explorer",
        title: "criação de sites",
        text:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, velit debitis, incidunt dolor dolores maxime atque eligendi animi voluptates in vero modi distinctio?",
        borda: true,
      },
      {
        icon: "fas fa-church",
        title: "gospel",
        text:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, velit debitis, incidunt dolor dolores maxime atque eligendi animi voluptates in vero modi distinctio?",
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
  padding-bottom: 137px;
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
.dark {
  color: #fff !important;
  cursor: default;
}
.bordaxy {
  border-left: 1px solid #c4c4c4;
  border-right: 1px solid #c4c4c4;
}
.bordaBottom {
  border-bottom: 1px solid #c4c4c4;
}

.areaTitle {
  padding-left: 20px !important;
  padding-right: 16px !important;
}
.show {
  height: 300px;
  background-color: rgb(11, 184, 54);
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
  .v-application .my-10 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
  .bb0 {
    border-bottom: none;
  }
  .font-subtitle {
    padding-left: 20px;
  }
}
/* tablet */
@media screen and (min-width: 601px) and (max-width: 960px) {
  .font-title {
    font-size: 30px;
  }
  .areaTitle {
    padding-left: 30px !important;
    padding-right: 16px !important;
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
  .areaTitle {
    padding-left: 30px !important;
    padding-right: 16px !important;
  }
}
/* desktop */
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  #services {
    padding-top: 120px;
    padding-bottom: 100px;
  }
}
/* extra large */
@media screen and (min-width: 1905px) {
}
</style>