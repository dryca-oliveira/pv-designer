<template>
  <v-container id="comingSoon" class="bg-dark fill-height" fluid>
    <!-- <v-row class=".d-flex .d-sm-none">
      <v-col> -->

    <v-row class="flex-column" align="center">
      <v-col class="d-flex d-lg-none" align-self="star" sm="7">
        <v-btn dark fab small rounded @click="goBack()"
          ><v-icon> fas fa-arrow-left</v-icon>
        </v-btn>
      </v-col>

      <transition name="fadeInUp">
        <v-col
          v-if="show"
          class="white pa-1"
          cols="11"
          sm="6"
          md="5"
          lg="4"
          xl="2"
        >
          <v-card dark class="bg-dark pa-2" elevation="0">
            <v-card-title class="font-weight-bold text-h4 text-sm-h3 py-6">
              PV-Designer
            </v-card-title>
            <v-card-subtitle class="text-h6 text-sm-h4">
              Página em construção</v-card-subtitle
            >
            <v-card-text class="pt-10 pb-1">
              Siga-me nas redes Sociais:</v-card-text
            >
            <v-card-actions>
              <v-btn
                target="_blank"
                href="https://www.instagram.com/paulovitordesigner/"
                fab
                small
                rounded
              >
                <v-icon> fab fa-instagram</v-icon>
              </v-btn>
              <v-btn
                target="_blank"
                href="https://www.facebook.com/paulovitordesign"
                fab
                small
                rounded
              >
                <v-icon> fab fa-facebook-f</v-icon>
              </v-btn>
              <v-btn
                target="_blank"
                href="https://www.behance.net/paulovitordesigner"
                fab
                small
                rounded
              >
                <v-icon> fab fa-behance</v-icon>
              </v-btn>
              <v-btn
                target="_blank"
                href="https://dribbble.com/paulovitordesigner"
                fab
                small
                rounded
              >
                <v-icon> fab fa-dribbble</v-icon>
              </v-btn>
              <v-btn
                target="_blank"
                href="https://br.pinterest.com/paulovitordesigner/_created/"
                fab
                small
                rounded
              >
                <v-icon> fab fa-pinterest-p</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </transition>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ComingSoon",
  data: () => ({
    show: false,
  }),
  mounted() {
    this.show = true;
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
#comingSoon {
  overflow: hidden;
}
.fadeInUp-enter-active {
  transition: opacity 2s ease-in;
}
.fadeInUp-enter {
  opacity: 0;
}
.bg-dark {
  background-color: #1f1f1f;
}
</style>