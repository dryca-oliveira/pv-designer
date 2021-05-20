<template>
  <v-row id="home">
    <v-col cols="12" class="pa-0 grey darken-4">
      <v-container fluid class="controls">
        <v-row>
          <v-col cols="6">
            <v-btn elevation="0" @click="showNext" fab x-small color="#f1f1f13f"
              ><v-icon color="#f1f1f1"> fas fa-chevron-left </v-icon>
            </v-btn>
          </v-col>
          <v-col class="text-right" cols="6">
            <v-btn elevation="0" @click="showPrev" fab x-small color="#f1f1f13f"
              ><v-icon color="#f1f1f1"> fas fa-chevron-right </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

      <VueSlickCarousel ref="carousel" v-bind="settings">
        <div v-for="(item, index) in images" :key="index">
          <v-img class="grey darken-4" :src="item.src" :lazy-src="item.src">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
            <v-container class="bannercard">
              <v-row class="justify-center justify-lg-start">
                <v-col class="" cols="7" md="8" lg="7">
                  <div class="title font-weight-medium">
                    {{ item.title }}
                  </div>

                  <div v-if="item.btn">
                    <v-btn dark color="#1f22fd" class="bannerBtn"
                      >Veja mais</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </div>
      </VueSlickCarousel>
    </v-col>
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
      settings: {
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 5,
      },
      images: [
        {
          title: "A ideia da marca vale mais que  a própria marca",
          src: require("../assets/banner-site.png"),
          btn: true,
        },
        {
          title: "A ideia da marca vale mais que a própria marca",
          src: require("../assets/banner-site.png"),
          btn: false,
        },
        {
          title: "A ideia da marca vale mais que a própria marca",
          src: require("../assets/banner-site.png"),
          btn: false,
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
  },
};
</script>

<style scoped >
#home {
  position: relative;
  overflow: hidden;
}
.slick-slider {
  margin-bottom: -10px;
}
.heightImage {
  max-height: 690px;
  height: 100%;
}
.controls {
  position: absolute;
  z-index: 1;
  bottom: 50%;
  height: 40px;
  display: flex;
  align-items: center;
}
.bannercard {
  display: flex;
  align-items: flex-end;
  max-width: 1150px;
  margin-top: 244px;
}
.title {
  font-weight: 500;
  font-size: 44px !important;
  color: #fff;
  line-height: 44px;
}
.bannerBtn {
  width: 198px;
  height: 54px !important;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  margin-top: 58px;
}
/* mobile */
@media screen and (max-width: 600px) {
  .bannercard {
    margin-top: 5%;
  }
  .title {
    font-size: 20px !important;
    line-height: 20px;
  }
  .bannerBtn {
    width: 80px;
    height: 30px !important;
    font-size: 10px;
    margin-top: 10px;
  }
}
/* tablet */
@media screen and (min-width: 601px) and (max-width: 960px) {
  .bannercard {
    margin-top: 10%;
  }
  .bannerBtn {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .title {
    font-size: 30px !important;
  }
  .bannerBtn {
    width: 100px;
    height: 30px !important;
    font-size: 10px;
    margin-top: 10px;
  }
}
/* leptop */
@media screen and (min-width: 961px) and (max-width: 1264px) {
  .bannercard {
    margin-top: 100px;
  }
  .title {
    font-size: 40px !important;
  }
}
/* desktop */
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .bannercard {
    margin-top: 15%;
  }
}
/* extra large */
@media screen and (min-width: 1905px) {
  .bannercard {
    margin-top: 15%;
  }
}
</style>>

