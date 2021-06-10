<template>
  <v-container fluid>
    <Banner />
    <About />
    <Projects />
    <Services />
    <Clients />
    <Contact />
  </v-container>
</template>

<script>
import Banner from "../components/Banner";
import About from "../components/About";
import Projects from "../components/Projects.vue";
import Services from "../components/Services.vue";
import Clients from "../components/Clients.vue";
import Contact from "../components/Contact.vue";
export default {
  name: "Home",

  components: {
    Banner,
    About,
    Projects,
    Services,
    Clients,
    Contact,
  },
};
</script>

