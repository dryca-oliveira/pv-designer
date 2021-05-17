<template>
  <v-container id="contact" fluid>
    <v-row>
      <!-- card-Left -->
      <v-col
        class="d-flex justify-end"
        style="background-color: #2021de"
        cols="12"
        sm="6"
      >
        <div style="max-width: 575px" class="pt-16 pl">
          <v-row class="white--text">
            <v-col cols="12" md="8">
              <div class="font-title font-weight-medium">
                Experimente <br />
                um atentimento ainda mais eficiente. Só chamar a gente no
                Whatsapp
              </div>
            </v-col>
            <!-- btn  -->
            <v-col cols="12" md="8" lg="7" class="botao">
              <v-btn
                href="https://web.whatsapp.com/send?phone=5599111112222"
                target="_blank"
                style="width: 100%; height: 54px; border-radius: 8px"
                dark
                color="#0AC141"
              >
                <i style="padding-right: 10px" class="fab fa-whatsapp"></i>
                Solicite seu orçamaneto
              </v-btn>
            </v-col>
            <v-col cols="12" md="8" lg="7" class="subtitulo">
              <div>
                Ou se preferir +55 21 98156-4128. <br />
                *Número exclusivo para atendimento.
              </div>
            </v-col>
            <!-- socialmedia -->
            <v-col
              class="d-flex justify-space-between icones"
              cols="12"
              md="8"
              lg="7"
            >
              <a class="social-media-icon pl-2" href="">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a class="social-media-icon" href="">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="social-media-icon" href="">
                <i class="fab fa-facebook-f"></i
              ></a>
              <a class="social-media-icon" href="">
                <i class="fab fa-behance"></i>
              </a>
              <a class="social-media-icon" href="">
                <i class="fab fa-dribbble"></i>
              </a>
              <a class="social-media-icon" href="">
                <i class="fab fa-pinterest-p"></i>
              </a>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <!-- card-Right -->
      <v-col
        class="d-flex justify-start pb-16"
        style="background-color: #1f22fd"
        cols="12"
        sm="6"
      >
        <div style="max-width: 575px" class="pt-16 pl">
          <v-row justify="center" class="white--text">
            <!-- titulo -->
            <v-col
              cols="12"
              md="10"
              class="font-title font-weight-medium pb-0 mb-0"
            >
              Fale conosco
            </v-col>
            <v-col
              style="font-size: 14px"
              cols="12"
              md="10"
              class="font-weight-medium pt-1 mt-0"
            >
              Para falar sobre sua ideia/projeto preencha o formulário abaixo:
            </v-col>
            <!-- furmoluario -->
            <v-col style="padding-top: 32px" cols="12" md="10">
              <form>
                <v-row>
                  <v-col class="pt-0" cols="12">
                    <v-text-field
                      hide-details
                      label="Nome sobrenome"
                      solo
                    ></v-text-field>
                  </v-col>
                  <v-col class="pt-0" cols="12">
                    <v-text-field
                      hide-details
                      label="email@email.com"
                      solo
                    ></v-text-field>
                  </v-col>
                  <v-col class="pt-0" cols="12">
                    <v-text-field
                      hide-details
                      label="telefone"
                      solo
                    ></v-text-field>
                  </v-col>
                  <v-col class="pt-0" cols="12">
                    <v-text-field
                      hide-details
                      label="assunto"
                      solo
                    ></v-text-field>
                  </v-col>

                  <v-col class="pt-0" cols="12">
                    <v-textarea
                      hide-details
                      solo
                      height="200"
                      name="input-7-4"
                      label="*mensagem"
                    ></v-textarea>
                  </v-col>
                  <v-col class="pt-0 mt-0 pb-10" cols="12">
                    <v-btn
                      style="width: 170px; height: 43px"
                      color="#FAB013"
                      dark
                      >Enviar</v-btn
                    >
                  </v-col>
                </v-row>
              </form>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.font-title {
  font-weight: 500;
  font-size: 32px;
  line-height: 58px;
}
.v-text-field--outlined,
.v-text-field--solo {
  border-radius: 6px !important;
}
.pl {
  padding-left: 20px;
  padding-right: 20px;
}
/* mobile */
@media screen and (max-width: 600px) {
  .subtitulo {
    padding-top: 20px;
    font-size: 14px;
  }
  .icones {
    padding-top: 20px;
    padding-bottom: 40px;
  }
  .font-title {
    line-height: 48px;
    font-size: 24px;
  }
}
/* tablet */
@media screen and (min-width: 601px) and (max-width: 960px) {
  .font-title {
    line-height: 52px;
  }
  .subtitulo {
    padding-top: 20px;
  }
  .botao {
    padding-top: 20px;
    padding-bottom: 30px;
  }
  .icones {
    padding-top: 100px;
    padding-bottom: 40px;
  }
}
/* laptop */
@media screen and (min-width: 961px) and (max-width: 1264px) {
  .subtitulo {
    padding-top: 20px;
  }
  .icones {
    padding-top: 60px;
    padding-bottom: 40px;
  }
}
/* desktop */
@media screen and (min-width: 1265px) {
  .subtitulo {
    padding-top: 20px;
  }
  .botao {
    padding-top: 50px;
  }
  .icones {
    padding-top: 103px;
    padding-bottom: 40px;
  }
}
</style>