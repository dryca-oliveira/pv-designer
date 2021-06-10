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

    <v-row id="answer" class="pb-13">
      <v-col class="px-4">
        <Answer />
      </v-col>
    </v-row>

    <Contact />
  </v-container>
</template>

<script>
import Banner from "../components/pages/questions/Banner.vue";
import Questions from "../components/pages/questions/Questions.vue";
import Answer from "../components/pages/questions/Answer.vue";
import Contact from "../components/Contact.vue";
export default {
  name: "CommonQuestions",
  components: {
    Banner,
    Questions,
    Answer,
    Contact,
  },
};
</script>
<style scoped>
#questions {
  background-color: #f1f1f1;
  padding-top: 68px;
}

/* mobile */
@media screen and (max-width: 600px) {
  #questions {
    padding-top: 254px;
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

