<template>
  <v-layout row wrap>
    <v-flex text-xs-center>
      <!-- header -->
      <h1 class="primary--text display-3 font-weight-medium my-3">Stations</h1>
      <v-card>
        <v-list class="pa-0">
          <v-list-item>
            <v-text-field
                :label="'Station query'"
                autocomplete="off"
                autofocus
                clearable
                flat
                hide-details
                maxlength="1023"
                placeholder="Station name / DS100 / IBNR"
                v-model="query"
                @keyup="autocomplete"

                solo
            ></v-text-field>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card class="mt-3">
        <v-list class="pa-0" dense>
          <v-list-item-group>
            <template v-for="station in typeaheadDisplay" >
              <v-divider v-bind:key="station.EVA_NR + `-divider`"></v-divider>
              <StationListEntry
                  v-bind:key="station.EVA_NR + `-entry`"
                  :station="station"
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
      stations: [
        {name: "Karlsruhe Hbf", ds100: 'RK', eva: 8000191},
        {name: "Frankfurt Hbf", ds100: 'FF', eva: 8000105},
        {name: "München Hbf", ds100: 'MH', eva: 8000261},
      ],
      haltestellen: [],
      typeaheadDisplay: []
    };
  },
  methods: {
    selectStation(value) {
      this.query = "";
      console.log(value);
    },
    autocomplete() {
      if (this.query.length > 2) {
        this.typeaheadDisplay = [];
        for (const haltestellenElement of this.haltestellen) {
          try {
            if (haltestellenElement.NAME.substr(0, this.query.length).toUpperCase() === this.query.toUpperCase()) {
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
    saveHaltestellen(results) {
      this.haltestellen = results.data;
    }
  },
  mounted() {
    Papa.parse("/data/D_Bahnhof_2020_alle.CSV", {
      header: true,
      download: true,
      haltestellen: this.haltestellen,
      complete: this.saveHaltestellen
    });
  }
}
</script>

<style scoped>

</style>