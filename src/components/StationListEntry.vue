<template>
  <v-list-item v-bind:key="station.EVA_NR" class="station-item" @click="$emit('click', station)">
    <v-list-item-content>
      <v-list-item-title>
        <strong>{{ fieldBegin(station.NAME) }}</strong>
        <span class="font-weight-thin">{{ fieldEnd(station.NAME) }}</span>
      </v-list-item-title>
      <v-list-item-subtitle class="text--accent-3">
        <code>
          <strong>{{fieldBegin(station.DS100)}}</strong>{{ fieldEnd(station.DS100) }}
        </code>
        &nbsp;|&nbsp;
        <span v-if="station.EVA_NR">
          <strong>{{ fieldBegin(station.EVA_NR) }}</strong>{{ fieldEnd(station.EVA_NR) }}
        </span>
        <span v-else>
          <strong>{{ fieldBegin(station['RL100-Kurzname']) }}</strong>{{ fieldEnd(station['RL100-Kurzname']) }}
        </span>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "StationListEntry",
  props: ['station', 'query'],
  data: () => ({
  }),
  methods: {
    fieldEnd(field) {
      if(field.substr(0, this.query.length).toUpperCase() === this.query.toUpperCase()) {
        return field.substr(this.query.length);
      }
      return field;
    },
    fieldBegin(field){
      if (this.fieldEnd(field) !== field) {
        return field.substr(0, this.query.length);
      }
      return "";
    }
  }
}
</script>

<style scoped>

</style>