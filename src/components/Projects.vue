<template>
  <v-row id="projetos" class="mt-3">
    <v-col cols="12" class="px-0 pt-0 pb-0 text-center">
      <h2 class="font-weight-bold px-4 px-sm-2">
        Empresas que ajudei a conectarem-se com seus clientes.
      </h2>
      <p class="px-4">Alguns dos projetos que já desenvolvi.</p>
      <ul v-if="show" class="filters d-none d-sm-flex">
        <li
          v-on:click="setFilter('ALL')"
          :class="{ active: currentFilter === 'ALL' }"
        >
          Todos
        </li>
        <span>/</span>
        <li
          v-on:click="setFilter('LOGO')"
          :class="{ active: currentFilter === 'LOGO' }"
        >
          Logo
        </li>
        <span>/</span>
        <li
          v-on:click="setFilter('ARTE')"
          :class="{ active: currentFilter === 'ARTE' }"
        >
          Arte
        </li>
        <span>/</span>
        <li
          v-on:click="setFilter('GOSPEL')"
          :class="{ active: currentFilter === 'GOSPEL' }"
        >
          Gospel
        </li>
      </ul>

      <transition-group class="projects" name="projects">
        <template v-for="(project, index) in projects">
          <div
            :key="index"
            class="project"
            v-if="currentFilter === project.category || currentFilter === 'ALL'"
          >
            <div class="project-image-wrapper">
              <v-hover v-slot="{ hover }">
                <v-img
                  class="grey darken-4 project-image"
                  :lazy-src="project.image"
                  :src="project.image"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <div
                    v-if="hover"
                    class="d-flex v-card--reveal display-3 white--text"
                    style="height: 100%"
                  >
                    <div
                      @click="$router.push({ name: project.to })"
                      class="category px-7"
                    >
                      {{ project.category }}
                    </div>
                  </div>
                </v-img>
              </v-hover>
            </div>
          </div>
        </template>
      </transition-group>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      currentFilter: "ALL",
      show: false,
      projects: [
        {
          image: require("../media/img1.jpg"),
          category: "ARTE",
          to: "Coronavirus",
        },
        {
          image: require("../media/img2.png"),
          category: "Logo",
          to: "Suprime",
        },
        {
          image: require("../media/img3.png"),
          category: "LOGO",
          to: "Logos",
        },
        // {
        //   image: require("../media/img4.jpg"),
        //   category: "LOGO",
        // },
        {
          image: require("../media/img5.jpg"),
          category: "LOGO",
          to: "Bojack",
        },
        {
          image: require("../media/img6.jpg"),
          category: "LOGO",
          to: "Imo",
        },
        // {
        //   image: require("../media/img7.jpg"),
        //   category: "LOGO",
        // },
        // {
        //   image: require("../media/img8.jpg"),
        //   category: "LOGO",
        // },
        {
          image: require("../media/img9.jpg"),
          category: "LOGO",
          to: "Belarina",
        },
      ],
    };
  },

  methods: {
    setFilter: function (filter) {
      this.currentFilter = filter;
    },
  },
};
</script>

<style scoped>
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.9;
  }
}
#projetos {
  padding-top: 84px;
}
h2 {
  font-size: 30px;
  line-height: 20px;
  margin-bottom: 23px;
}
p {
  color: #828282;
  font-size: 20px;
  margin-bottom: 83px;
}
.filters {
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 32px;
  justify-content: center;
  margin-left: -60px;
}
.filters li {
  list-style: none;
  color: #1f1f1f;
  font-weight: bold;
  padding: 0px 10px;
}

.filters li:hover,
.filters li.active {
  cursor: pointer;
  color: #a5a5a5;
}
.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
}

.projects-enter {
  position: relative;
  transform: scale(0.5) translatey(-80px);
  opacity: 0;
}

.projects-leave-to {
  transform: translatey(30px);
  opacity: 0;
}

.projects-leave-active {
  position: absolute;
  z-index: -1;
}

.project {
  transition: all 0.35s ease-in-out;
  width: calc(100vw / 3);
  height: 360px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-image-wrapper {
  position: relative;
}

.project-image {
  width: calc(100vw / 3);
  height: 360px;
}
.v-card--reveal {
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  animation: fade 0.9s ease !important;
  position: absolute;
  width: 100%;
  background-color: #000;
}
.category {
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  border: 1px solid #fff;
}
/* mobile */
@media screen and (max-width: 600px) {
  #projetos {
    padding-top: 0px;
  }
  h2 {
    font-size: 26px;
    line-height: 30px;
    margin-top: 64px;
    margin-bottom: 4px;
  }
  p {
    margin-bottom: 64px;
  }
  .project {
    width: 100vw;
    height: 200px;
  }
  .project-image {
    width: 100vw;
    height: 200px;
  }
}
/* tablet */
@media screen and (min-width: 601px) and (max-width: 960px) {
  .project {
    height: 280px;
  }
  .project-image {
    height: 280px;
  }
  h2 {
    line-height: 30px;
  }
}
/* leptop */
@media screen and (min-width: 961px) and (max-width: 1264px) {
  #projetos {
    padding-top: 144px;
  }
}
/* desktop */
@media screen and (min-width: 1264px) and (max-width: 1904px) {
}
/* extra large */
@media screen and (min-width: 1905px) {
  .project {
    height: 500px;
  }
  .project-image {
    height: 500px;
  }
}
</style>