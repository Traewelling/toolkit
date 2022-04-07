<template>
  <v-container>
    <v-row>
      <v-col cols="12" offset="1" sm="5">
        <h1 class="primary--text display-3 font-weight-regular my-3">Stations
          <v-btn color="primary" @click="loadStations" :disabled="loading > 0">
            (Re-)load stations
          </v-btn>
          &nbsp;
          <v-progress-circular
              v-if="loading > 0"
              color="primary"
              indeterminate
          ></v-progress-circular>
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" offset="1" sm="5">
        <v-card>
          <v-list class="pa-0">
            <v-list-item>
              <v-text-field
                  v-model="query"
                  autocomplete="off"
                  autofocus
                  clearable
                  flat
                  hide-details
                  label="Station name / DS100 / IBNR"
                  maxlength="1023"
              ></v-text-field>
            </v-list-item>
          </v-list>
        </v-card>
        <v-card class="mt-3">
          <v-list class="pa-0" dense>
            <v-list-item-group>
              <template v-for="station in typeaheadDisplay">
                <v-divider v-bind:key="station.EVA_NR + station.DS100 + `-divider`"></v-divider>
                <StationListEntry
                    v-bind:key="station.EVA_NR + station.DS100 + `-entry`"
                    :query="query"
                    :station="station"
                    @click="selectStation(station)">
                </StationListEntry>
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" offset="1" sm="4">
        <StationCard v-if="selectedStation" :station="selectedStation"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StationListEntry from "@/components/StationListEntry";
import Papa from "papaparse";
import StationCard from "../components/Ds100StationCard";
import config from "../../vue.config";

export default {
  name: "Lookup",
  components: {StationCard, StationListEntry},
  data() {
    return {
      config: config,
      query: "",
      loading: 0,
      haltestellen: [],
      typeaheadDisplay: [],
      selectedStation: null
    };
  },
  watch: {
    query: function () {
      this.autocomplete();
    }
  },
  methods: {
    selectStation(value) {
      this.query = "";
      this.selectedStation = value;
    },
    autocomplete() {
      if (this.query.length > 1) {
        this.typeaheadDisplay = [];
        for (const haltestellenElement of this.haltestellen) {
          try {
            if (this.typeaheadDisplay.length > 20) {
              break;
            }
            if (this.filterConditions(haltestellenElement)) {
              this.typeaheadDisplay.push(haltestellenElement);
            }
          } catch (e) {
            // ignore
          }
        }
      } else {
        this.typeaheadDisplay = [];
      }
    },
    filterConditions(element) {
      if (!isNaN(this.query) && this.query.length > 5) {
        return element.EVA_NR.substr(0, this.query.length).toUpperCase() === this.query.toUpperCase()
      }
      if (this.query.length > 2) {
        return element.NAME.substr(0, this.query.length).toUpperCase() === this.query.toUpperCase() ||
            element.DS100.substr(0, this.query.length).toUpperCase() === this.query.toUpperCase();
      }
      return element.DS100.substr(0, this.query.length).toUpperCase() === this.query.toUpperCase();
    },
    loadStations() {
      this.loading = 2;
      localStorage.setItem('haltestellen', '');
      Papa.parse(config.publicPath + "data/D_Bahnhof_2020_alle.CSV", {
        header: true,
        download: true,
        complete: (result) => {
          this.haltestellen = result.data;
          localStorage.setItem('haltestellen', JSON.stringify(this.haltestellen));
          this.loading=0;
        },
        error: () => {this.loading=0;}
      });
      Papa.parse(config.publicPath + "/data/DBNetz-Betriebsstellenverzeichnis-Stand2021-10.csv", {
        header: true,
        download: true,
        complete: (result) => {
          let betriebsstellen = result.data.map((item) => {
            item.NAME = item['RL100-Langname'];
            item.DS100 = item['RL100-Code'];
            return item;
          });
          this.haltestellen = this.haltestellen.concat(betriebsstellen);
          localStorage.setItem('haltestellen', JSON.stringify(this.haltestellen));
          this.loading=0;
        },
        error: () => {this.loading=0;}
      });
    }
  },
  mounted() {
    const localHaltestellen = localStorage.getItem('haltestellen');

    if (!localHaltestellen) {
      this.loadStations();
    } else {
      this.haltestellen = JSON.parse(localHaltestellen);
    }
  }
}
</script>

<style scoped>

</style>