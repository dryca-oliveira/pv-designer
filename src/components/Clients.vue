<template>
  <v-row class="flex-column" v-scroll="onScroll" id="clientes">
    <v-container style="max-width: 1150px">
      <v-row
        class="
          flex-column-reverse flex-sm-row
          text-center text-sm-left
          justify-sm-center
        "
      >
        <v-col cols="12" sm="9" md="8" lg="6" class="pl-sm-4 py-0 px-lg-0">
          <transition name="fadeInRight">
            <div v-if="show" class="font-title font-weight-bold">
              Nossos clientes
            </div>
          </transition>
          <div v-if="!show" class="show"></div>
        </v-col>
        <transition name="fadeInLeft">
          <v-col
            v-if="show"
            cols="12"
            sm="3"
            md="4"
            lg="6"
            align-self="center"
            class="text-sm-right pr-sm-4 pr-lg-0"
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
    </v-container>
    <v-container style="max-width: 1390px">
      <v-row class="pt-0 pt-sm-10" align="center">
        <v-col class="text-center" cols="2" sm="1">
          <v-btn
            @click="showNext"
            fab
            dark
            x-small
            elevation="0"
            color="#c4c4c4"
            ><v-icon dark> fas fa-chevron-left </v-icon>
          </v-btn>
        </v-col>
        <v-col class="px-0" cols="8" sm="10">
          <VueSlickCarousel class="teste" ref="carousel" v-bind="settings">
            <div
              class="d-flex align-center justify-center px-2"
              v-for="(item, index) in brands"
              :key="index"
            >
              <div class="bg">
                <div>
                  <v-img width="158" height="80" contain :src="item.src">
                  </v-img>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </v-col>
        <v-col class="text-center" cols="2" sm="1">
          <v-btn
            @click="showPrev"
            fab
            dark
            x-small
            elevation="0"
            color="#c4c4c4"
            ><v-icon dark> fas fa-chevron-right </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script >
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  components: {
    VueSlickCarousel,
  },

  data() {
    return {
      show: false,
      settings: {
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      },
      brands: [
        {
          src: require("../media/brand1.png"),
        },
        {
          src: require("../media/brand2.png"),
        },
        {
          src: require("../media/brand3.png"),
        },
        {
          src: require("../media/brand4.png"),
        },
        {
          src: require("../media/brand5.png"),
        },
        {
          src: require("../media/brand6.png"),
        },
      ],
    };
  },
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
    onScroll() {
      if (window.scrollY > 2900) {
        this.show = true;
      }
    },
  },
};
</script>

<style scoped >
#clientes {
  padding-top: 120px;
  padding-bottom: 130px;
  overflow: hidden;
}
.fadeInRight-enter-active,
.fadeInRight-leave-active {
  transition: transform 1.9s ease-in;
}
.fadeInRight-enter {
  transform: translate3d(-260px, 0, 0);
}

.fadeInLeft-enter-active,
.fadeInLeft-leave-active {
  transition: transform 1.9s ease-in;
}
.fadeInLeft-enter {
  transform: translate3d(260px, 0, 0);
}
.paddingCard {
  padding: 10px;
}
.bg {
  border-radius: 8px;
  background-color: #f1f1f1;
  height: 184px;
  width: 268px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.font-title {
  font-weight: 500;
  font-size: 40px;
}

.show {
  height: 300px;
}

/* mobile */
@media screen and (max-width: 600px) {
  .fadeInRight-enter-active,
  .fadeInRight-leave-active {
    transition: transform 2.5s ease-in;
  }
  .fadeInRight-enter {
    transform: translate3d(0, 40px, 0);
  }

  .fadeInLeft-enter-active,
  .fadeInLeft-leave-active {
    transition: transform 2.5s ease-in;
  }
  .fadeInLeft-enter {
    transform: translate3d(0, 40px, 0);
  }
  #clientes {
    padding-top: 64px;
    padding-bottom: 40px;
  }
  .font-title {
    font-size: 26px;
  }

  .show {
    height: 100px;
  }
}
/* tablet */
@media screen and (min-width: 601px) and (max-width: 960px) {
}
/* leptop */
@media screen and (min-width: 961px) and (max-width: 1264px) {
  #clientes {
    padding-top: 60px;
  }
}
/* desktop */
@media screen and (min-width: 1265px) {
}
</style>>
