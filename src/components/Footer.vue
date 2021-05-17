<template>
  <v-container id="footer" fluid>
    <v-container style="max-width: 1150px">
      <v-row justify="center">
        <v-col
          class="text-center text-sm-left text-caption d-flex align-center"
          cols="6"
          sm="6"
        >
          <a href="#home">
            <v-img
              alt="PV logo"
              class="shrink"
              contain
              src="../assets/logo-dark.png"
              width="30" /></a
          ><strong>paulovitor</strong>designer
        </v-col>
        <v-col
          class="text-center text-sm-right text-caption d-flex justify-space-between"
          cols="12"
          sm="6"
        >
          <a href=" "> <strong>Blog</strong> </a>

          <a href=" "> <strong>Perguntas frequentes</strong> </a>

          <a href=" ">Política privacidade</a>

          <a href=" ">New letter</a>
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
  padding: 50px 0px;
}
a {
  text-decoration: none;
  color: #000 !important;
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
</style>