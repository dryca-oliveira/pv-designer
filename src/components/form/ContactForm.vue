<template>
  <v-row class="white--text justify-end form" style="max-width: 575px">
    <v-col class="title" cols="12" lg="10"> Fale conosco </v-col>
    <v-col class="subtitle" cols="12" lg="10">
      Para falar sobre sua ideia/projeto, preencha o formulário a baixo.
    </v-col>
    <v-col cols="12" lg="10">
      <form
        method="POST"
        action="https://api.staticforms.xyz/submit"
        class="validator"
      >
        <input
          type="hidden"
          name="accessKey"
          value="5104d6c5-9644-4243-9d5b-72e670b51c36"
        />
        <v-row>
          <v-col class="pt-0" cols="12">
            <v-text-field
              v-model="name"
              name="name"
              id="name"
              required
              hide-details
              label="Nome Sobrenome"
              solo
              flat
              style="width: 490px"
            ></v-text-field>
          </v-col>
          <v-col class="pt-0" cols="12">
            <v-text-field
              v-model="email"
              name="email"
              id="email"
              type="email"
              required
              hide-details
              label="Seu E-mail"
              solo
              flat
            ></v-text-field>
          </v-col>
          <v-col class="pt-0" cols="12">
            <v-text-field
              v-mask="'(##)####-####'"
              v-model="phone"
              name="phone"
              id="phone"
              required
              hide-details
              label="Telefone"
              solo
              flat
            ></v-text-field>
          </v-col>
          <v-col class="pt-0" cols="12">
            <v-text-field
              name="subject"
              id="subject"
              hide-details
              label="Assunto"
              solo
              flat
            ></v-text-field>
          </v-col>

          <v-col class="pt-0" cols="12">
            <v-textarea
              name="message"
              id="message"
              hide-details
              solo
              flat
              height="200"
              label="Mensagem"
            ></v-textarea>
          </v-col>
          <v-col class="pt-0 mt-0 pb-10" cols="12">
            <input
              type="hidden"
              name="redirectTo"
              value="http://www.paulovitordesigner.com.br"
            />

            <v-btn
              type="submit"
              class="font-weight-bold btn-form"
              style=""
              color="#FAB013"
              dark
              @click="submit_form()"
              >Enviar</v-btn
            >
          </v-col>
        </v-row>
      </form>
    </v-col>
    <v-dialog v-model="dialog" width="440">
      <v-card height="120px" class="grey lighten-2">
        <v-card-title style="background-color: #1f22fd" class="text-h6">
        </v-card-title>
        <v-card-text class="pt-8 font-weight-bold" style="font-size: 24px">
          Contato Enviado com sucesso
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    name: "",
    email: "",
    phone: "",
  }),
  methods: {
    submit_form() {
      if (this.name != "" && this.email != "" && this.phone != "") {
        this.dialog = true;
        document.forms["dados"].submit();
      }
    },
  },
};
</script>

<style scoped>
.title {
  font-weight: 600;
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
.btn-form {
  width: 170px;
  height: 43px !important;
  text-transform: none !important;
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