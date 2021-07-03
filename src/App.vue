<template>
  <v-app id="app">
    <router-view
      :mostrar="mostrar"
      :height="height"
      :color="color"
      name="appBar"
    />

    <v-main v-scroll="onScroll">
      <router-view />
    </v-main>

    <footer>
      <Footer />
    </footer>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Footer,
  },

  data: () => ({
    color: "#1f1f1f",
    height: "70px",
    mostrar: true,
  }),
  updated() {
    if (this.$route.name === "Home") {
      this.mostrar = true;
    } else {
      this.mostrar = false;
    }
  },

  methods: {
    onScroll() {
      // if (this.$route.name != "CommonQuestions") {
      let logoImg = document.querySelector(".logo-img");
      let btnMenu = document.querySelector(".btnMenu");
      if (window.scrollY > 50) {
        this.color = "#1f1f1fd0";
        this.show = true;
        this.height = "54px";
        logoImg.style.width = "30px";
        btnMenu.style.width = "30px";
        btnMenu.style.height = "30px";
      } else {
        this.color = "#1f1f1f";
        this.show = false;
        this.height = "70px";
        logoImg.style.width = "40px";
        btnMenu.style.width = "40px";
        btnMenu.style.height = "40px";
      }
    },
  },
  // },
};
</script>
<style>
* {
  margin: 0;
}
body {
  font-family: "Montserrat", sans-serif !important;
}
#app {
  font-family: "Montserrat", sans-serif !important;
}
.theme--light.v-expansion-panels
  .v-expansion-panel-header
  .v-expansion-panel-header__icon
  .v-icon {
  color: blue !important;
  font-size: small;
}
</style>
