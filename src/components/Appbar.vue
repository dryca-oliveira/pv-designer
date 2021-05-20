<template>
  <v-container id="appbar" style="max-width: 1150px">
    <v-row class="text-center" justify="space-between">
      <!-- logo -->
      <v-col class="d-flex align-center text-left pl-0" cols="4" md="2">
        <a href="#home">
          <v-img
            alt="PV logo"
            class="shrink logo-img"
            contain
            src="../assets/logo-light.png"
            width="40px"
        /></a>
      </v-col>
      <!-- Menu -->
      <v-col class="d-none d-sm-none d-md-flex menu pl-0" cols="4" md="5">
        <nav>
          <ul class="pl-0">
            <li class="pr-md-8 pr-lg-15"><a href="#about">Sobre</a></li>
            <li class="pr-md-8 pr-lg-15"><a href="#projects">Portifólio</a></li>
            <li class="pr-md-8 pr-lg-15"><a href="#services">Serviços</a></li>
            <li class="pr-md-4 pr-lg-8"><a href="#clients">Clientes</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </nav>
      </v-col>
      <!-- btn menuMobile -->
      <v-col
        class="d-flex d-sm-flex d-md-none justify-end pr-0"
        cols="6"
        md="4"
      >
        <v-btn
          class="btnMenu"
          @click.stop="drawer = !drawer"
          fab
          dark
          small
          color="rgba(153, 153, 153, 0.37)"
        >
          <v-icon dark> fas fa-bars </v-icon>
        </v-btn>
      </v-col>
      <!-- social Media -->
      <v-col
        class="d-none d-sm-none d-md-flex justify-end pr-0"
        cols="2"
        md="5"
      >
        <v-btn href="#contact" style="font-size: 10px" small color="primary">
          Solicite um orçamento
        </v-btn>
        <a class="social-media-icon pl-md-4 pl-lg-7" href="">
          <i class="fab fa-whatsapp"></i>
        </a>
        <a class="social-media-icon pl-md-4 pl-lg-7" href="">
          <i class="fab fa-instagram"></i>
        </a>
        <a class="social-media-icon pl-md-4 pl-lg-7" href="">
          <i class="fab fa-facebook-f"></i
        ></a>
        <a class="social-media-icon pl-md-4 pl-lg-7" href="">
          <i class="fab fa-behance"></i>
        </a>
        <a class="social-media-icon pl-md-4 pl-lg-7" href="">
          <i class="fab fa-dribbble"></i>
        </a>
        <a class="social-media-icon pr-md-1 pl-md-4 pl-lg-7" href="">
          <i class="fab fa-pinterest-p"></i>
        </a>
      </v-col>
    </v-row>
    <!-- drawer moblie -->
    <template>
      <v-navigation-drawer v-model="drawer" absolute right app temporary dark>
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class="ativo">
            <v-list-item href="#about">
              <v-list-item-title> Sobre</v-list-item-title>
            </v-list-item>

            <v-list-item href="#projects">
              <v-list-item-title>Portifólio</v-list-item-title>
            </v-list-item>

            <v-list-item href="#services">
              <v-list-item-title>Serviços</v-list-item-title>
            </v-list-item>

            <v-list-item href="#clients">
              <v-list-item-title>Clientes</v-list-item-title>
            </v-list-item>

            <v-list-item href="#blog">
              <v-list-item-title>Blog</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-row>
          <v-col>
            <a class="social-media-icon pl-2" href="">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a class="social-media-icon" href="">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="social-media-icon" href="">
              <i class="fab fa-facebook-f"></i
            ></a>
            <a class="social-media-icon" href="">
              <i class="fab fa-behance"></i>
            </a>
            <a class="social-media-icon" href="">
              <i class="fab fa-dribbble"></i>
            </a>
            <a class="social-media-icon" href="">
              <i class="fab fa-pinterest-p"></i>
            </a>
          </v-col>
        </v-row>
      </v-navigation-drawer>
    </template>
  </v-container>
</template>

<script>
export default {
  name: "Appbar",

  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style >
.menu ul,
.menu li {
  list-style: none;
}

.menu ul {
  display: flex;
}

.menu li a {
  color: #fff;
  text-decoration: none;
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
}

.menu li a:hover,
.menu .active a {
  text-decoration: 2px underline #1f21df;
  text-underline-position: under;
}

i {
  color: white;
}
#appbar i:hover {
  color: #1f21df;
  transform: scale(1.5);
}
.logo-img,
.btnMenu {
  transition: all 0.5s ease;
}

/* menumobile */
.ativo {
  color: #fff !important;
  text-decoration: 2px underline #1f21df !important;
}
</style>