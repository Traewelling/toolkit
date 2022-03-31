<template>
  <v-list-item v-bind:key="station.eva" class="station-item" @click="$emit('click', station)">
    <v-list-item-content>
      <v-list-item-title>{{ station.name }}</v-list-item-title>
      <v-list-item-subtitle class="text--accent-3">
        <code>{{ station.ds100 }}</code> | {{ station.eva}}
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