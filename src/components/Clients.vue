<template>
  <v-container v-scroll="onScroll" fluid id="clients">
    <v-container style="max-width: 1250px">
      <v-row
        class="flex-column-reverse flex-sm-row text-center text-sm-left justify-sm-center"
      >
        <v-col cols="12" sm="9" md="4">
          <transition name="fadeInRight">
            <div v-if="show" class="font-title font-weight-bold">
              Nossos clientes
            </div>
          </transition>
          <div v-if="!show" style="height: 300px"></div>
        </v-col>
        <transition name="fadeInLeft">
          <v-col v-if="show" cols="12" sm="3" md="7" class="text-sm-right">
            <v-icon color="#F7B11D">fas fa-star </v-icon>
            <v-icon color="#F7B11D">fas fa-star </v-icon>
            <v-icon color="#F7B11D">fas fa-star </v-icon>
          </v-col>
        </transition>
      </v-row>
      <v-row class="paddingTop" align="center">
        <v-col class="text-center" cols="2" sm="1">
          <v-btn @click="showNext" fab dark x-small color="#f1f1f1"
            ><v-icon dark> fas fa-chevron-left </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="8" sm="10">
          <VueSlickCarousel ref="carousel" v-bind="settings">
            <div class="teste" v-for="(item, index) in brands" :key="index">
              <div class="bg mx-1 pa-5">
                <v-img width="268" height="184" contain :src="item.src">
                </v-img>
              </div>
            </div>
          </VueSlickCarousel>
        </v-col>
        <v-col class="text-center" cols="2" sm="1">
          <v-btn @click="showPrev" fab dark x-small color="#f1f1f1"
            ><v-icon dark> fas fa-chevron-right </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
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
      altura: "",
      settings: {
        arrows: false,
        focusOnSelect: true,
        infinite: true,
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
#clients {
  padding-top: 149px;
  padding-bottom: 148px;
}
.fadeInRight-enter-active,
.fadeInRight-leave-active {
  transition: all 1.5s ease-in;
}
.fadeInRight-enter {
  transform: translate3d(-260px, 0, 0);
}

.fadeInLeft-enter-active,
.fadeInLeft-leave-active {
  transition: all 1.5s ease-in;
}
.fadeInLeft-enter {
  transform: translate3d(260px, 0, 0);
}
.teste {
  padding: 10px;
}
.bg {
  border-radius: 8px;
  background-color: #f1f1f1;
}
.font-title {
  font-weight: 500;
  font-size: 44px;
}
.paddingTop {
  padding-top: 67px;
}

/* mobile */
@media screen and (max-width: 600px) {
  #clients {
    padding-top: 10px;
    padding-bottom: 40px;
  }
  .font-title {
    font-size: 26px;
  }
  .paddingTop {
    padding-top: 0px;
  }
}
</style>>
