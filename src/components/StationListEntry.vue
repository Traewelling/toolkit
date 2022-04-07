<template>
  <v-list-item v-bind:key="station.EVA_NR" class="station-item" @click="$emit('click', station)">
    <v-list-item-content>
      <v-list-item-title>{{ station.NAME }}</v-list-item-title>
      <v-list-item-subtitle class="text--accent-3">
        <code>{{ station.DS100 }}</code> |
        <span v-if="station.EVA_NR">{{ station.EVA_NR}}</span>
        <span v-else>{{ station['RL100-Kurzname'] }}</span>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "StationListEntry",
  props: ['station']
}
</script>

<style scoped>

</style>