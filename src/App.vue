<template>
  <v-app>
    <v-main>
      <v-container id="container">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
#container {
  max-width: 550px;
  padding: 8px;
}
</style>