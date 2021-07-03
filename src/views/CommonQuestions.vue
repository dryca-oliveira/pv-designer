<template>
  <v-container fluid>
    <v-row style="background-color: #1f22fd">
      <v-col class="px-4">
        <Banner />
      </v-col>
    </v-row>

    <v-row id="questions" class="pb-10">
      <v-col class="px-4">
        <Questions />
      </v-col>
    </v-row>

    <Contact />
  </v-container>
</template>

<script>
import Banner from "../components/questions/Banner.vue";
import Questions from "../components/questions/Questions.vue";
import Contact from "../components/Contact.vue";
export default {
  name: "CommonQuestions",
  components: {
    Banner,
    Questions,
    Contact,
  },
};
</script>
<style scoped>
#questions {
  padding-top: 68px;
}

/* mobile */
@media screen and (max-width: 600px) {
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

