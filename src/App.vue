<template>
  <v-app id="app">
    <router-view
      :alterar="alterar"
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
    height: "80px",
    mostrar: true,
    alterar: true,
  }),
  mounted() {
    this.checkRoute();
  },
  updated() {
    this.checkRoute();
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
        this.height = "80px";
        logoImg.style.width = "40px";
        btnMenu.style.width = "40px";
        btnMenu.style.height = "40px";
      }
    },
    checkRoute() {
      if (this.$route.name === "Home") {
        this.mostrar = true;
        this.alterar = true;
      } else {
        this.mostrar = false;
        if (this.$route.name === "CommonQuestions") {
          this.alterar = false;
        } else {
          this.alterar = true;
        }
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
.v-btn {
  letter-spacing: 0px !important;
}
</style>
