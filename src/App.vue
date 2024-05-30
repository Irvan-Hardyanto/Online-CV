<script setup lang="ts">
import Dashboard from "./components/Dashboard.vue";
import Skills from "./components/Skills.vue";
import WorkExperience from "./components/WorkExperiences.vue";
import BaseLayout from "./components/BaseLayout.vue";
import TopBar from "./components/TopBar.vue";
</script>

<template>
  <v-app class="main-container">
    <header>
      <TopBar />
    </header>
    <Dashboard />
    <Skills />
    <WorkExperience />
  </v-app>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;1,700&display=swap");
* {
  font-family: "Poppins", sans-serif !important;
}
html,
body {
  height: 100%;
  width: 100%;
}
.main-container {
  /* height: 100vh !important; */
  /* max-height: 100vh !important; */
  overflow-y: auto !important;
  background-color: #546e7a !important;
}
body {
  margin: 0;
  padding: 0;
}
</style>
