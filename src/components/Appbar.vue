<template>
  <v-app-bar :height="height" :color="color" fixed app dark elevation="0">
    <v-container id="appbar" style="max-width: 1150px">
      <v-row class="text-center" justify="space-between">
        <!-- logo -->
        <v-col
          class="d-flex align-center text-left px-0"
          :class="{ 'justify-md-space-between ': !mostrar }"
          cols="4"
          md="8"
        >
          <a class="logo" href="/">
            <v-img
              alt="PV logo"
              class="shrink logo-img"
              contain
              src="../assets/logo-light.png"
              width="43px"
              height="42"
          /></a>
          <nav class="d-none d-sm-none d-md-flex menu align-center px-0">
            <ul class="pl-0">
              <li v-if="mostrar">
                <router-link to="#sobre"> Quem Sou </router-link>
              </li>
              <li v-if="mostrar">
                <router-link to="#projetos"> Portifólio </router-link>
              </li>
              <li v-if="mostrar">
                <router-link to="#servicos"> Serviços </router-link>
              </li>
              <li v-if="!mostrar">
                <router-link to="/"> Página Inicial </router-link>
              </li>
              <li :class="{ 'pr-lg': !mostrar }">
                <router-link
                  :to="alterar ? '/perguntas-frequentes' : '/sobre-mim'"
                >
                  {{ alterar ? "Perguntas Frequentes" : "Sobre Mim" }}
                </router-link>
              </li>
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
          class="d-none d-sm-none d-md-flex justify-end align-center px-0"
          cols="2"
          md="4"
          lg="4"
        >
          <v-btn
            target="_blank"
            href="https://paulovitordesigner.typeform.com/to/cK43zs"
            style="font-size: 14px; letter-spacing: 1px"
            class="botao font-weight-bold mr-13"
            small
            color="#1F22FD"
          >
            Orçamento
          </v-btn>

          <a
            class="social-media-icon pl-md-0 pl-lg-0"
            target="_blank"
            href="https://www.instagram.com/paulovitordesigner/"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            class="social-media-icon pl-md-6 pl-lg-9"
            target="_blank"
            href="https://www.facebook.com/paulovitordesigner1"
          >
            <i class="fab fa-facebook-f"></i
          ></a>

          <a
            class="social-media-icon pl-md-6 pl-lg-9"
            target="_blank"
            href="https://dribbble.com/paulovitordesigner"
          >
            <i class="fab fa-dribbble"></i>
          </a>
          <a
            class="social-media-icon pr-md-1 pl-md-4 pl-lg-9"
            target="_blank"
            href="https://br.pinterest.com/paulovitordesigner/_created/"
          >
            <i class="fab fa-pinterest-p"></i>
          </a>
        </v-col>
      </v-row>
      <!-- drawer mobile -->
      <template>
        <v-navigation-drawer v-model="drawer" absolute right app temporary dark>
          <v-list nav dense>
            <v-list-item-group v-model="group" active-class="ativo">
              <v-list-item v-if="mostrar" to="#sobre">
                <v-list-item-title> Quem Sou</v-list-item-title>
              </v-list-item>

              <v-list-item v-if="mostrar" to="#projetos">
                <v-list-item-title>Portifólio</v-list-item-title>
              </v-list-item>

              <v-list-item v-if="mostrar" to="#servicos">
                <v-list-item-title>Serviços</v-list-item-title>
              </v-list-item>

              <v-list-item v-if="!mostrar" to="/">
                <v-list-item-title>Página Inicial</v-list-item-title>
              </v-list-item>

              <v-list-item
                :to="alterar ? '/perguntas-frequentes' : '/sobre-mim'"
              >
                <v-list-item-title>
                  {{ alterar ? "Perguntas Frequentes" : "Sobre Mim" }}
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-row>
            <v-col>
              <a
                class="social-media-icon pl-4"
                target="_blank"
                href="https://www.instagram.com/paulovitordesigner/"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                class="social-media-icon pl-4"
                target="_blank"
                href="https://www.facebook.com/paulovitordesigner1"
              >
                <i class="fab fa-facebook-f"></i
              ></a>

              <a
                class="social-media-icon pl-4"
                target="_blank"
                href="https://dribbble.com/paulovitordesigner"
              >
                <i class="fab fa-dribbble"></i>
              </a>
              <a
                class="social-media-icon pl-4"
                target="_blank"
                href="https://br.pinterest.com/paulovitordesigner/_created/"
              >
                <i class="fab fa-pinterest-p"></i>
              </a>
            </v-col>
            <v-col cols="12" class="ml-4"
              ><v-btn
                target="_blank"
                href="https://paulovitordesigner.typeform.com/to/cK43zs"
                style="font-size: 14px; letter-spacing: 1px"
                class="px-13 font-weight-bold"
                small
                color="#1F22FD"
              >
                Orçamento
              </v-btn></v-col
            >
          </v-row>
        </v-navigation-drawer>
      </template>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Appbar",
  props: {
    height: String,
    color: String,
    mostrar: Boolean,
    alterar: Boolean,
  },
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
.menu ul li {
  padding-right: 72px;
}
.botao {
  width: 170px;
}
.logo {
  padding-right: 72px;
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

.menu li a:hover {
  text-decoration: 2px underline #1f21df;
  text-underline-position: under;
}

i {
  color: white;
}
#appbar i:hover {
  color: #fab013;
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
/* leptop */
@media screen and (min-width: 961px) and (max-width: 1264px) {
  .pr-lg {
    padding-right: 52px !important;
  }
  .pl-lg {
    padding-left: 19.17px;
  }
  .menu ul li {
    padding-right: 52px;
  }

  .logo {
    padding-right: 52px;
  }
}
/* desktop */
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .pr-lg {
    padding-right: 72px !important;
  }
  .pl-lg {
    padding-left: 19.17px;
  }
}
</style>