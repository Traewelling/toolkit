<template>
  <v-card>
    <v-card-title v-text="station.NAME"/>
    <v-card-subtitle></v-card-subtitle>
    <v-list>
      <v-divider></v-divider>
      <template v-for="(value, key) in station">
        <v-list-item :key="key">
          <strong>{{ key }}:</strong>&nbsp;{{ value }}
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "DS100StationCard",
  props: ['station']
}
</script>

<style scoped>

</style>