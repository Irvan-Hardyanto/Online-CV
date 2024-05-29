<script lang="ts" setup>
import TopBar from "./TopBar.vue";
import BaseLayout from "./BaseLayout.vue";
</script>

<template>
  <BaseLayout>
    <template v-slot:header>
      <TopBar />
    </template>

    <template v-slot:content>
      <div class="dashboard-container h-100">
        <v-row>
          <v-col>
            <div class="col-wrapper">
              <v-img
                class="rounded-circle"
                :width="200"
                cover
                src="../../public/pp.jpg"
              ></v-img>
            </div>
          </v-col>
          <v-col>
            <div class="col-wrapper">
              <v-card
                class="namecard rounded-lg elevation-10"
                color="grey-darken-3"
              >
                <v-card-item>
                  <div class="namecard-content">
                    <p class="text-h1 hello">Hello</p>
                    <p class="text-h4" style="margin-bottom: 10px">
                      My Name Is
                    </p>
                    <div class="namecard-name">
                      <h2>Irvan Hardyanto</h2>
                    </div>
                  </div>
                </v-card-item>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>
    </template>
  </BaseLayout>
</template>

<style scoped>
.col-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dashboard-container {
  padding: 10px;
}
.hello {
  text-align: center;
  font-family: "Montserrat", sans-serif !important;
  letter-spacing: 5px !important;
}
.namecard {
  width: 25em;
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
