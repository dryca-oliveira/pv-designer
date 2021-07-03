<template>
  <v-container>
    <v-row>
      <v-col class="px-4 pl-sm-0 pt-sm-0" cols="12" sm="6">
        <h1 class="title text-center text-sm-left">Perguntas e respostas:</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background-color: #1f22fd;
  padding-top: 126px;
  padding-bottom: 56px;
  max-width: 1150px;
}
.title {
  font-size: 52px !important;
  font-weight: 800;
  line-height: 48px;
  color: #fff;
}
.absolute {
  position: absolute;
}
.v-card__title {
  font-weight: 800;
  font-size: 24px;
}
.v-card__text {
  font-size: 12px;
  line-height: 15px;
  color: #000 !important;
}
.v-text-field--outlined,
.v-text-field--solo {
  border-radius: 6px !important;
}

/* mobile */
@media screen and (max-width: 600px) {
  header {
    padding-top: 56px;
  }
  .title {
    font-size: 34px !important;
    line-height: 38px;
  }
}
/* tablet */
@media screen and (min-width: 601px) and (max-width: 960px) {
  .title {
    font-size: 38px !important;
    line-height: 38px;
  }
}
/* leptop */
@media screen and (min-width: 961px) and (max-width: 1264px) {
  .title {
    font-size: 42px !important;
    line-height: 40px;
  }
}
/* desktop */
@media screen and (min-width: 1264px) and (max-width: 1904px) {
}
/* extra large */
@media screen and (min-width: 1905px) {
}
</style>