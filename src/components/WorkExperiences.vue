<template v-slot:content>
  <div class="work-container h-100">
    <p class="text-h2 my-5 title">My Work Experiences</p>
    <div class="work-experiences">
      <v-card class="mb-3 py-5" color="grey-darken-3">
        <div class="py-3">
          <v-row class="no-gutters">
            <v-col class="d-flex justify-center align-center" lg="2" md="2">
              <img class="client-logo" src="/jixie.png" />
            </v-col>
            <v-divider vertical></v-divider>
            <v-col lg="10" md="10">
              <span class="text-h5 font-weight-bold"> PARTNERS PORTAL </span>
              <v-divider></v-divider>
              <p>
                A web-based app that is used by partners for managing their
                campaigns, ad creatives (ad content), ad units, header bidding,
                audiences, etc., as well as for viewing the impression, bids,
                winning bids, clicks, CTR and other related metrics for their
                campaign, creatives or units.
              </p>
              <br />
              <div class="d-flex flex-row ga-3">
                <v-tooltip class="custom-tooltip" location="bottom">
                  <template v-slot:activator="{ props }">
                    <img v-bind="props" class="icon" src="/nodejs.png" />
                  </template>
                  <span> Node JS</span>
                </v-tooltip>
                <img class="icon" src="/react-js.png" />
                <img class="icon" src="/js.png" />
                <img class="icon" src="/bootstrap-5.png" />
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
      <v-card class="mb-3 py-5" color="grey-darken-3">
        <div class="py-3">
          <v-row class="no-gutters">
            <v-col class="d-flex justify-center align-center" lg="2" md="2">
              <img class="client-logo" src="/jixie.png" />
            </v-col>
            <v-divider vertical></v-divider>
            <v-col lg="10" md="10">
              <span class="text-h5 font-weight-bold"> ADMIN PORTAL </span>
              <v-divider></v-divider>
              <p>
                A web-based app that is used internally by administrator to
                manage workflows, runs, and domains. On domains page,
                administrator can change the organization and type for one or
                multiple domains.
              </p>
              <br />
              <div class="d-flex flex-row ga-3">
                <img class="icon" src="/nodejs.png" />
                <img class="icon" src="/react-js.png" />
                <img class="icon" src="/js.png" />
                <img class="icon" src="/bootstrap-5.png" />
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
      <v-card class="mb-3 py-5" color="grey-darken-3">
        <div class="py-3">
          <v-row class="no-gutters">
            <v-col class="d-flex justify-center align-center" lg="2" md="2">
              <img class="client-logo" src="/ssi.jpg" />
            </v-col>
            <v-divider vertical></v-divider>
            <v-col lg="10" md="10">
              <span class="text-h5 font-weight-bold">
                STARTUP STUDIO INDONESIA BATCH 7
              </span>
              <v-divider></v-divider>
              <p class="font-weight-thin font-italic">
                Startup Studio Indonesia is a startup incubation program hosted
                by The Ministry of Communication and Informatics of the Republic
                of Indonesia.
              </p>
              <br />
              <p>
                Maintaining a REST API built on Express.js that is used by
                mobile app for monitoring farms, plants, inventories, harvest
                schedule, add and setting up IoT sensors, and viewing and
                adjusting IoT sensor presets installed on each farms and plants.
              </p>
              <br />
              <div class="d-flex flex-row ga-3">
                <img class="icon" src="/nodejs.png" />
                <img class="icon" src="/js.png" />
                <v-tooltip class="custom-tooltip" location="bottom">
                  <template v-slot:activator="{ props }">
                    <img v-bind="props" class="icon" src="/express-js.png" />
                  </template>
                  <span> Express JS</span>
                </v-tooltip>
                <v-tooltip class="custom-tooltip" location="bottom">
                  <template v-slot:activator="{ props }">
                    <img v-bind="props" class="icon" src="/firebase.png" />
                  </template>
                  <span>Firebase</span>
                </v-tooltip>
                <v-tooltip class="custom-tooltip" location="bottom">
                  <template v-slot:activator="{ props }">
                    <img v-bind="props" class="icon" src="/mqtt.png" />
                  </template>
                  <span>MQTT Broker</span>
                </v-tooltip>
                <img class="icon" src="/mysql.png" />
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
      <v-card class="mb-3 py-5" color="grey-darken-3">
        <div class="py-3">
          <v-row class="no-gutters">
            <v-col class="d-flex justify-center align-center" lg="2" md="2">
              <img class="client-logo" src="/ssi.jpg" />
            </v-col>
            <v-divider vertical></v-divider>
            <v-col lg="10" md="10">
              <span class="text-h5 font-weight-bold">
                STARTUP STUDIO INDONESIA BATCH 8
              </span>
              <v-divider></v-divider>
              <p>
                Bootstrapping and developing a web-based CRUD for loan
                origination system.
              </p>
              <br />
              <div class="d-flex flex-row ga-3">
                <img class="icon" src="/nodejs.png" />
                <img class="icon" src="/react-js.png" />
                <img class="icon" src="/js.png" />
                <img class="icon" src="/bootstrap-5.png" />
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.custom-tooltip :deep(.v-overlay__content) {
  background-color: #fff !important; /* Change to your desired background color */
  color: #000000; /* Change to your desired text color */
}
.icon {
  height: 25px;
  width: auto;
}
.client-logo {
  width: 100px;
  height: auto;
}
.work-experiences {
  width: 60%;
}
.work-container {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  color: #fff;
  text-align: center;
  font-family: "Montserrat", sans-serif !important;
  letter-spacing: 5px !important;
}
</style>
