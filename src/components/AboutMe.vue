<script lang="ts" setup>
import TopBar from "./TopBar.vue";
import BaseLayout from "./BaseLayout.vue";
import Github from "./icons/Github.vue";
import Gmail from "./icons/Gmail.vue";
</script>
<template>
  <div class="dashboard-container">
    <v-card class="namecard rounded-lg elevation-10" color="grey-darken-3">
      <v-card-item class="fill-height">
        <v-row>
          <v-col>
            <div class="col-wrapper">
              <img class="profile-picture" src="/pp.jpg" />
            </div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col>
            <div class="col-wrapper">
              <div class="namecard-content">
                <p class="text-h1 hello">Hello</p>
                <p class="text-h4" style="margin-bottom: 10px">My Name Is</p>
                <div class="namecard-name">
                  <h2>Irvan Hardyanto</h2>
                </div>
                <br />
                <v-divider> </v-divider>
                <p class="text-justify">
                  I'm a web developer interested in both frontend and backend.
                  I'm a Dedicated, Diligent, and Enthusiastic developer. You can
                  rely on me to finish your needs.
                </p>
                <br />
                <v-divider></v-divider>
                <div class="d-flex flex-row ga-3">
                  <a
                    href="https://www.linkedin.com/in/irvan-hardyanto-011bb0205/"
                    target="_blank"
                  >
                    <img class="icon" src="/linkedin.png" />
                  </a>
                  <a
                    href="https://github.com/Irvan-Hardyanto?tab=repositories"
                    target="_blank"
                  >
                    <Github class="icon" />
                  </a>
                  <v-tooltip class="custom-tooltip" location="bottom">
                    <template v-slot:activator="{ props }">
                      <img v-bind="props" class="icon" src="/whatsapp.png" />
                    </template>
                    <span>082219079290</span>
                  </v-tooltip>
                  <v-tooltip class="custom-tooltip" location="bottom">
                    <template v-slot:activator="{ props }">
                      <img v-bind="props" class="icon" src="/gmail.png" />
                    </template>
                    <span>hardyanto.irvan@gmail.com</span>
                  </v-tooltip>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
  </div>
</template>

<style scoped>
.custom-tooltip :deep(.v-overlay__content) {
  background-color: #fff !important; /* Change to your desired background color */
  color: #000000; /* Change to your desired text color */
}
.icon {
  position: relative;
  height: 50px;
  width: auto;
  transition-delay: 1s;
}

.icon:hover {
  position: relative;
  top: -10px;
  transition-delay: 1s;
}
.profile-picture {
  width: 15em;
  height: auto;
  border-radius: 50%;
}
.namecard {
  width: 80%;
  height: 70%;
}
.dashboard-container {
  min-height: 100vh;
  height: 100vh;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.col-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hello {
  text-align: center;
  font-family: "Montserrat", sans-serif !important;
  letter-spacing: 5px !important;
}
.namecard-content {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.namecard-name {
  color: #000;
  background-color: #fff;
  padding: 10px 30px;
  text-align: center;
  border-radius: 10px;
  font-size: x-large;
}
</style>
