<template>
  <v-app id="app">
    <v-app-bar :height="height" :color="color" fixed app dark elevation="0">
      <Appbar />
    </v-app-bar>

    <v-main v-scroll="onScroll">
      <Banner />
      <About />
      <Projects />
      <Services />
      <Clients />
      <Contact />
    </v-main>
    <footer>
      <Footer />
    </footer>
  </v-app>
</template>

<script>
import Appbar from "./components/Appbar";
import Banner from "./components/Banner";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Services from "./components/Services.vue";
import Clients from "./components/Clients.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Appbar,
    Banner,
    About,
    Projects,
    Services,
    Clients,
    Contact,
    Footer,
  },

  data: () => ({
    color: "#1f1f1f",
    height: "60px",
  }),

  methods: {
    onScroll() {
      let logoImg = document.querySelector(".logo-img");
      let btnMenu = document.querySelector(".btnMenu");
      if (window.scrollY > 50) {
        this.color = "#1f1f1fd0";
        this.show = true;
        this.height = "60px";
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
