<template>
  <v-container fluid class="black">
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/coronavirus/banner.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/coronavirus/img1.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/coronavirus/img2.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/coronavirus/img3.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/coronavirus/img4.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/coronavirus/img5.png"></v-img>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/coronavirus/img7.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/coronavirus/img8.png"></v-img>
      </v-col>
    </v-row>
    <Contact />
  </v-container>
</template>

<script>
import Contact from "../components/Contact.vue";
export default {
  name: "Coronavirus",
  components: {
    Contact,
  },
};
</script>

<style scoped>
</style>