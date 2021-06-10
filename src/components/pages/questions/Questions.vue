<template>
  <v-container style="max-width: 1150px">
    <v-row>
      <v-col class="px-0 py-sm-0 px-lg-0">
        <h2>Sobre os Serviços:</h2>
        <nav>
          <ol class="pl-0">
            <li><a href="#1">1 - O que exatamente você vende?</a></li>
            <li><a href="#2">2 - Como é o pagamento? </a></li>
            <li><a href="#3">3 - Você trabalha com materiais impressos?</a></li>
          </ol>
        </nav>
        <h2 class="pt-5">Sobre Identidade Visual:</h2>
        <nav>
          <ol class="pl-0">
            <li><a href="#4">4 - Que é Identidade Visual?</a></li>
            <li>
              <a href="#5">5 - Por que eu deveria ter uma Identidade Visual?</a>
            </li>
            <li>
              <a href="#6"
                >6 - Qual a diferença entre Logotipo e Identidade Visual?</a
              >
            </li>
            <li><a href="#7">7 - O que acontece em caso de reprovação?</a></li>
            <li><a href="#8">8 - Como é o processo criativo?</a></li>
            <li><a href="#9">9 - Quais são os arquivos que recebo?</a></li>
            <li><a href="#10">10 - Como o projeto será apresentado?</a></li>
            <li><a href="#11">11 - Quantas opções de logo irei receber?</a></li>
            <li>
              <a href="#12"
                >12 - Se eu já tiver o logotipo pronto, você faz apenas os
                materiais?</a
              >
            </li>
            <li>
              <a href="#13">13 - Recebo os materiais impressos do projeto?</a>
            </li>
            <li><a href="#14">14 - Você também faz o nome pra empresa?</a></li>
          </ol>
        </nav>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  color: #1f22fd;
  font-weight: 800;
  font-size: 30px;
  padding-bottom: 20px;
}
ol {
  list-style: none;
}
nav ol li {
  padding-bottom: 28px;
}
nav ol li a {
  color: #1f1f1f;
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
}
nav ol li a:hover {
  text-decoration: underline;
}

/* mobile */
@media screen and (max-width: 600px) {
  h2 {
    font-size: 22px;
  }
  nav ol li a {
    color: #1f1f1f;
    font-weight: 500;
    font-size: 18px;
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