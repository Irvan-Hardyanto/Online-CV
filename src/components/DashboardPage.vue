<script setup lang="ts">
import AboutMe from "./AboutMe.vue";
import Skills from "./Skills.vue";
import WorkExperience from "./WorkExperiences.vue";

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
  <v-app class="main-container">
    <v-app-bar :elevation="2" color="white" :floating="true">
      <v-app-bar-title>My Personal CV</v-app-bar-title>
      <v-btn @click="scrollTo(aboutMeRef)"> About Me </v-btn>
      <v-btn @click="scrollTo(skillsRef)">My Skills</v-btn>
      <v-btn @click="scrollTo(workRef)">Work</v-btn>
    </v-app-bar>
    <section id="about" ref="aboutMeRef">
      <AboutMe />
    </section>
    <section id="skills" ref="skillsRef" class="cv-item">
      <Skills />
    </section>
    <section id="work-experience" ref="workRef" class="cv-item">
      <WorkExperience />
    </section>
  </v-app>
</template>
