<template>
  <v-container id="footer" fluid>
    <v-container style="max-width: 1150px">
      <v-row justify="center">
        <v-col
          class="
            text-center text-sm-left text-caption
            d-flex
            align-center
            pl-lg-0
          "
          cols="4"
          sm="6"
        >
          <a href="#home">
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
          class="text-center text-caption text-sm-right py-0 px-0"
          cols="12"
          sm="6"
        >
          <v-container class="pr-lg-0">
            <v-row justify-sm="space-between" class="mr-sm-0">
              <v-col
                class="text-right text-sm-left pl-2 pl-sm-0"
                cols="2"
                sm="1"
              >
                <a href=" "> Blog </a>
              </v-col>
              <v-col class="text-center px-0" cols="4">
                <a href=" ">Perguntas frequentes</a>
              </v-col>
              <v-col class="text-left text-sm-center px-0" cols="4">
                <a href=" ">Políticas de privacidade</a>
              </v-col>
              <v-col
                class="text-left text-sm-right px-0 pr-sm-1"
                cols="2"
                sm="2"
              >
                <a href=" ">Newsletter</a>
              </v-col>
            </v-row>
          </v-container>
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
.text-caption {
  font-size: 14px !important;
}
/* mobile */
@media screen and (max-width: 600px) {
  #footer {
    padding: 10px 0px;
  }
  .text-caption {
    font-size: 8px !important;
  }
}
/* tablet */
@media screen and (min-width: 601px) and (max-width: 960px) {
  .text-caption {
    font-size: 10px !important;
  }
}
/* leptop */
@media screen and (min-width: 961px) and (max-width: 1264px) {
  .text-caption {
    font-size: 10px !important;
  }
}
/* desktop */
@media screen and (min-width: 1264px) and (max-width: 1904px) {
}
/* extra large */
@media screen and (min-width: 1905px) {
}
</style>