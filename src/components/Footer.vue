<template>
  <v-container id="footer" fluid>
    <v-container style="max-width: 1150px">
      <v-row>
        <v-col
          class="
            text-center text-sm-left text-size
            d-flex
            align-center
            px-4 px-lg-0
          "
          cols="6"
        >
          <a href="/">
            <v-img
              alt="PV logo"
              class="shrink"
              contain
              src="../assets/logo-dark.png"
              width="30" /></a
          ><strong class="pl-3">paulovitor</strong>designer
        </v-col>
        <v-col
          align-self="center"
          class="text-right text-size py-0 px-4 px-lg-0"
          cols="6"
        >
          <router-link to="/em-breve"> Políticas de privacidade </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
  padding: 27.5px 0px;
}

a {
  text-decoration: none;
  color: #000 !important;
}
a:hover {
  font-weight: bold;
}
.text-size {
  font-size: 14px !important;
}
/* mobile */
@media screen and (max-width: 600px) {
  #footer {
    padding: 10px 0px;
  }
  .text-size {
    font-size: 8px !important;
  }
}
/* tablet */
@media screen and (min-width: 601px) and (max-width: 960px) {
}
/* leptop */
@media screen and (min-width: 961px) and (max-width: 1264px) {
}
/* desktop */
@media screen and (min-width: 1264px) and (max-width: 1904px) {
}
/* extra large */
@media screen and (min-width: 1905px) {
}
</style>