<template>
  <v-row style="background-color: #2021de" id="contact" fluid>
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
              <div class="font-title" style="max-width: 340px">
                Experimente <br />
                um atentimento ainda mais eficiente. Só chamar a gente no
                Whatsapp
              </div>
              <v-btn
                class="botao"
                href="https://web.whatsapp.com/send?phone=5599111112222"
                target="_blank"
                dark
                color="#0AC141"
              >
                <i style="padding-right: 10px" class="fab fa-whatsapp"></i>
                Solicite seu orçamaneto
              </v-btn>
              <div class="subtitle">
                Ou se preferir +55 21 98156-4128. <br />
                *Número exclusivo para atendimento.
              </div>
              <div class="icons">
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
  font-weight: 500;
  font-size: 32px;
  line-height: 51px;
  padding-top: 108px;
  padding-bottom: 50px;
}

.botao {
  width: 294px;
  height: 54px !important;
}
.subtitle {
  font-weight: 500;
  font-size: 14px;
  padding-top: 50px;
  padding-bottom: 103px;
}
i {
  padding-right: 30px;
}
i:hover {
  transform: scale(1.5);
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
    padding-bottom: 50px;
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