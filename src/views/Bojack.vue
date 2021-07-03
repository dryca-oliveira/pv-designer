<template>
  <v-container fluid class="black">
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/bojack/banner.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/bojack/img1.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/bojack/img2.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/bojack/img3.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/bojack/img4.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/bojack/img5.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="pa-0">
        <v-img src="@/media/bojack/rotulo.png"></v-img>
      </v-col>
      <v-col cols="6" class="pa-0">
        <v-img src="@/media/bojack/rotulo1.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/bojack/img7.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-img src="@/media/bojack/img8.png"></v-img>
      </v-col>
    </v-row>
    <Contact />
  </v-container>
</template>

<script>
import Contact from "../components/Contact.vue";
export default {
  name: "Bojack",
  components: {
    Contact,
  },
};
</script>

<style scoped>
</style>