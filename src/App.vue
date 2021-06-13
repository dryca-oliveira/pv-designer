<template>
  <v-app id="app">
    <router-view :height="height" :color="color" name="appBar" />

    <v-main v-if="!overlay" v-scroll="onScroll">
      <router-view />
    </v-main>
    <footer v-if="!overlay">
      <Footer />
    </footer>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
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
    overlay: true,
  }),
  created() {
    setTimeout(() => {
      this.overlay = false;
    }, 2000);
  },

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
  margin: 0;
}
body {
  font-family: "Montserrat", sans-serif !important;
}
#app {
  font-family: "Montserrat", sans-serif !important;
}
</style>
