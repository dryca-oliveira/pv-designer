<template>
  <v-row class="white--text justify-end form" style="max-width: 575px">
    <v-col class="title" cols="12" lg="10"> Fale conosco </v-col>
    <v-col class="subtitle" cols="12" lg="10">
      Para falar sobre sua ideia/projeto, preencha o formulário a baixo.
    </v-col>
    <v-col cols="12" lg="10">
      <form>
        <v-row>
          <v-col class="pt-0" cols="12">
            <v-text-field
              hide-details
              label="Nome Sobrenome"
              solo
              style="width: 490px"
            ></v-text-field>
          </v-col>
          <v-col class="pt-0" cols="12">
            <v-text-field hide-details label="Seu E-mail" solo></v-text-field>
          </v-col>
          <v-col class="pt-0" cols="12">
            <v-text-field hide-details label="Telefone" solo></v-text-field>
          </v-col>
          <v-col class="pt-0" cols="12">
            <v-text-field hide-details label="Assunto" solo></v-text-field>
          </v-col>

          <v-col class="pt-0" cols="12">
            <v-textarea
              hide-details
              solo
              height="200"
              name="input-7-4"
              label="Mensagem"
            ></v-textarea>
          </v-col>
          <v-col class="pt-0 mt-0 pb-10" cols="12">
            <v-btn
              style="
                width: 170px;
                height: 43px;
                text-transform: none !important;
              "
              color="#FAB013"
              dark
              >Enviar</v-btn
            >
          </v-col>
        </v-row>
      </form>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  font-weight: 500;
  font-size: 32px !important;
}
.subtitle {
  font-weight: 500;
  font-size: 14px;
}
.v-text-field--outlined,
.v-text-field--solo {
  border-radius: 6px !important;
}
.form {
  padding-top: 108px;
  padding-bottom: 56px;
}
/* mobile */
@media screen and (max-width: 600px) {
  .title {
    font-weight: 500;
    font-size: 26px !important;
  }
  .subtitle {
    font-weight: 500;
    font-size: 14px;
  }
  .form {
    padding: 50px 16px 50px 20px;
  }
}
/* tablet */
@media screen and (min-width: 601px) and (max-width: 960px) {
  .form {
    padding-left: 16px;
    padding-right: 20px;
    padding-bottom: 50px;
  }
}
/* leptop */
@media screen and (min-width: 961px) and (max-width: 1264px) {
}
/* desktop */
@media screen and (min-width: 1264px) and (max-width: 1904px) {
}
</style>