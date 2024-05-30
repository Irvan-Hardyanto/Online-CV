<script setup>
import TopBar from "./TopBar.vue";
import BaseLayout from "./BaseLayout.vue";
</script>

<template>
  <div class="skills-container h-100">
    <span class="text-h2 my-5 title">My Skills</span>
    <div class="skills flex-grow-1 mb-3">
      <v-card class="skill" color="grey-darken-3">
        <div class="text-center py-3">
          <span class="text-h5 font-weight-bold"> Programming Languages </span>
        </div>
        <div class="skill-items">
          <div class="d-flex flex-column align-center">
            <img class="pl" src="/html.png" />
            <span>HTML</span>
          </div>
          <div class="d-flex flex-column align-center">
            <img class="pl" src="/css.png" />
            <span>CSS</span>
          </div>
          <div class="d-flex flex-column align-center">
            <img class="pl" src="/js.png" />
            <span>Javascript</span>
          </div>
          <div class="d-flex flex-column align-center">
            <img class="pl" src="/java.png" />
            <span>Java</span>
          </div>
        </div>
      </v-card>
      <v-card class="skill" color="grey-darken-3">
        <div class="text-center py-3">
          <span class="text-h5 font-weight-bold">
            Libraries or Frameworks
          </span>
        </div>
        <div class="skill-items">
          <div class="d-flex flex-column align-center">
            <img class="pl" src="/react-js.png" />
            <span>ReactJS</span>
          </div>

          <div class="d-flex flex-column align-center">
            <img class="pl" src="/tailwind-css.png" />
            <span>Tailwind CSS</span>
          </div>

          <div class="d-flex flex-column align-center">
            <img class="pl" src="/bootstrap-5.png" />
            <span>Bootstrap</span>
          </div>
          <div class="d-flex flex-column align-center">
            <img class="pl" src="/flutter.png" />
            <span>Flutter</span>
          </div>
        </div>
      </v-card>
      <v-card class="skill" color="grey-darken-3">
        <div class="text-center py-3">
          <span class="text-h5 font-weight-bold"> Database </span>
        </div>
        <div class="skill-items">
          <div class="d-flex flex-column align-center">
            <img class="pl" src="/mysql.png" />
            <span>MySQL</span>
          </div>
          <div class="d-flex flex-column align-center">
            <img class="pl" src="/pg.png" />
            <span>PostgreSQL</span>
          </div>
          <div class="d-flex flex-column align-center">
            <img class="pl" src="/sql-server.png" />
            <span>Microsoft SQL Server</span>
          </div>
        </div>
      </v-card>
      <v-card class="skill" color="grey-darken-3">
        <div class="d-flex flex-column h-100 justify-center text-center">
          <!-- <img src="/coming-soon.png" color="#fff" /> -->
          <span class="text-h5 font-weight-bold">
            More Skills Coming Soon...
          </span>
        </div>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.title {
  color: #fff;
  text-align: center;
  font-family: "Montserrat", sans-serif !important;
  letter-spacing: 5px !important;
}
.skill-items {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-row: auto auto;
  gap: 1rem;
}
.skill {
  /* height: 100%; */
}
.skills {
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row: 1fr 1fr;
  gap: 1rem;
}
.pl {
  height: 60px;
  width: auto;
}
.skills-container {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
