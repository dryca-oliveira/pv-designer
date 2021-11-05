<template>
  <v-row style="background-color: #2021de" id="contato" fluid>
    <v-col>
      <v-row class="contact">
        <!-- card-Left -->
        <v-col
          class="d-flex justify-end"
          style="background-color: #2021de"
          cols="12"
          sm="6"
        >
          <v-row class="white--text" style="max-width: 575px">
            <v-col cols="12" class="pt-0 pl-0">
              <div class="font-title" style="max-width: 345px">
                Experimente <br />
                um atendimento ainda mais eficiente. Só chamar a gente no
                Whatsapp
              </div>

              <v-btn
                class="botao"
                href="https://web.whatsapp.com/send?phone=5521981564128"
                target="_blank"
                dark
                color="#0AC141"
              >
                <v-icon class="pr-2"> fab fa-whatsapp </v-icon>

                Solicite seu orçamaneto
              </v-btn>

              <div class="subtitle">
                (21) 98156-4128 <br />
                <span class="font-weight-regular">
                  Número exclusivo para atendimento.</span
                >
              </div>
              <div class="icons">
                <a
                  class="social-media-icon"
                  target="_blank"
                  href="https://www.instagram.com/paulovitordesigner/"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  class="social-media-icon"
                  target="_blank"
                  href="https://www.facebook.com/paulovitordesigner1"
                >
                  <i class="fab fa-facebook-f"></i
                ></a>

                <a
                  class="social-media-icon"
                  target="_blank"
                  href="https://dribbble.com/paulovitordesigner"
                >
                  <i class="fab fa-dribbble"></i>
                </a>
                <a
                  class="social-media-icon"
                  target="_blank"
                  href="https://br.pinterest.com/paulovitordesigner/_created/"
                >
                  <i class="fab fa-pinterest-p"></i>
                </a>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <!-- area Formulario -->
        <v-col
          class="justify-start"
          style="background-color: #1f22fd"
          cols="12"
          sm="6"
        >
          <ContactForm />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import ContactForm from "./form/ContactForm";
export default {
  components: {
    ContactForm,
  },
};
</script>

<style scoped>
.font-title {
  font-weight: 600;
  font-size: 32px;
  line-height: 51px;
  padding-top: 108px;
  padding-bottom: 50px;
}

.botao {
  border-radius: 10px;
  width: 294px;
  height: 54px !important;
  text-transform: none !important;
  letter-spacing: 1px;
  font-weight: bold;
}

.subtitle {
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  padding-top: 50px;
  padding-bottom: 103px;
}
.subtitle span {
  font-size: 14px;
}
i {
  padding-right: 37px;
}
i:hover {
  color: #fab013;
}

/* mobile */
@media screen and (max-width: 320px) {
  .font-title {
    font-size: 26px;
    line-height: 46px;
    padding-top: 70px;
    padding-bottom: 40px;
    margin-left: 20px;
    margin-right: 5px;
  }
  .subtitle {
    margin-left: 20px;
    padding-top: 30px;
    padding-bottom: 53px;
  }
  .botao {
    width: 244px;
    margin-left: 20px;
  }
  .icons {
    padding-bottom: 20px;
    padding-left: 20px;
  }
}
@media screen and (min-width: 321px) and (max-width: 600px) {
  .font-title,
  .subtitle {
    margin-left: 20px;
  }

  .font-title {
    font-size: 26px;
    line-height: 46px;
    padding-top: 70px;
    padding-bottom: 40px;
  }
  .subtitle {
    padding-top: 50px;
    padding-bottom: 20px;
  }
  .icons {
    padding-bottom: 20px;
    padding-left: 20px;
  }
  i {
    padding-right: 20px;
  }
  .botao {
    margin-left: 20px;
  }
}
/* tablet */
@media screen and (min-width: 601px) and (max-width: 960px) {
  .font-title {
    margin-left: 20px;
  }
  .subtitle {
    padding-left: 20px;
  }

  .icons {
    margin-top: 24px !important;
    padding-left: 20px;
  }
  i {
    padding-right: 20px;
  }
  .botao {
    margin-left: 20px;
  }
}
/* leptop */
@media screen and (min-width: 961px) and (max-width: 1264px) {
  .font-title {
    margin-left: 20px;
  }
  .botao {
    margin-left: 20px;
  }
  .subtitle {
    padding-left: 20px;
  }
  .icons {
    padding-left: 20px;
  }
}
/* desktop */
@media screen and (min-width: 1265px) {
}
</style>