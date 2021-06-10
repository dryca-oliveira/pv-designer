<template>
  <v-app id="app">
    <v-app-bar :height="height" :color="color" fixed app dark elevation="0">
      <Appbar />
    </v-app-bar>

    <v-main v-scroll="onScroll">
      <router-view />
    </v-main>
    <footer>
      <Footer />
    </footer>
  </v-app>
</template>

<script>
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Appbar,
    Footer,
  },

  data: () => ({
    color: "#1f1f1f",
    height: "70px",
  }),
  methods: {
    onScroll() {
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
};
</script>
<style>
* {
  scroll-behavior: smooth;
  margin: 0;
}
body {
  font-family: "Montserrat", sans-serif !important;
}
#app {
  font-family: "Montserrat", sans-serif !important;
}
</style>
