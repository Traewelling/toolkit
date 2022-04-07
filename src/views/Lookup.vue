<template>
  <v-layout row wrap>
    <v-flex text-xs-center>
      <!-- header -->
      <h1 class="primary--text display-3 font-weight-medium my-3">Stations</h1>
      <v-card>
        <v-list class="pa-0">
          <v-list-item>
            <v-text-field
                autocomplete="off"
                autofocus
                clearable
                flat
                hide-details
                maxlength="1023"
                label="Station name / DS100 / IBNR"
                v-model="query"
            ></v-text-field>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card class="mt-3">
        <v-list class="pa-0" dense>
          <v-list-item-group>
            <template v-for="station in typeaheadDisplay" >
              <v-divider v-bind:key="station.EVA_NR + station.DS100 + `-divider`"></v-divider>
              <StationListEntry
                  v-bind:key="station.EVA_NR + station.DS100 + `-entry`"
                  :station="station"
                  :query="query"
                  @click="selectStation(station)">
              </StationListEntry>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card>
      <!-- main -->
    </v-flex>
  </v-layout>
</template>

<script>
import StationListEntry from "@/components/StationListEntry";
import Papa from "papaparse";
export default {
  name: "Lookup",
  components: {StationListEntry},
  data() {
    return {
      query: "",
      haltestellen: [],
      typeaheadDisplay: []
    };
  },
  watch: {
    query: function() {
      this.autocomplete();
    }
  },
  methods: {
    selectStation(value) {
      this.query = "";
      console.log(value);
    },
    autocomplete() {
      if (this.query.length > 1) {
        this.typeaheadDisplay = [];
        for (const haltestellenElement of this.haltestellen) {
          try {
            if (this.typeaheadDisplay.length > 20){
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
    }

  },
  mounted() {
    const localHaltestellen = localStorage.getItem('haltestellen');
    this.haltestellen = JSON.parse(localHaltestellen);
    
    if (!localHaltestellen) {
      Papa.parse("/data/D_Bahnhof_2020_alle.CSV", {
        header: true,
        download: true,
        complete: (result) => {
          this.haltestellen = result.data;
          localStorage.setItem('haltestellen', JSON.stringify(this.haltestellen));
        }
      });
      Papa.parse("/data/DBNetz-Betriebsstellenverzeichnis-Stand2021-10.csv", {
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
        }
      });
    }
  }
}
</script>

<style scoped>

</style>