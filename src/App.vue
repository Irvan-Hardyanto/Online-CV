<script setup lang="ts">
import Dashboard from "./components/AboutMe.vue";
import Skills from "./components/Skills.vue";
import WorkExperience from "./components/WorkExperiences.vue";

import { ref } from "vue";
const aboutMeRef = ref<HTMLElement | null>(null);
const skillsRef = ref<HTMLElement | null>(null);
const workRef = ref<HTMLElement | null>(null);

// Using scrollIntoView() function to achieve the scrolling
function scrollTo(view: HTMLElement | null) {
  view?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <router-view></router-view>
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
  overflow-y: hidden !important;
}
.main-container {
  /* height: 100vh !important; */
  max-height: 100vh !important;
  overflow-y: auto !important;
  background-color: #546e7a !important;
}
body {
  margin: 0;
  padding: 0;
}
.cv-item {
  /* height: 100vh;
  min-height: 100vh; */
  padding-top: 64px !important;
}
</style>
