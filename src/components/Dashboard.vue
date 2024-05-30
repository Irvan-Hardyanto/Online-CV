<script lang="ts" setup>
import TopBar from "./TopBar.vue";
import BaseLayout from "./BaseLayout.vue";
</script>
<template>
  <div class="dashboard-container h-100">
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
                <div></div>
                <div class="namecard-name">
                  <h2>Irvan Hardyanto</h2>
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
.profile-picture {
  width: 15em;
  height: auto;
  border-radius: 50%;
}
.dashboard-container {
  height: 100vh;
  /* padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
}
/* .namecard {
  width: 80%;
  height: 70%;
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
} */
</style>
