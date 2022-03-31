<template>
  <v-app>
    <v-main>
      <v-container id="container">
        <router-view></router-view>
      </v-container>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>

import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {Footer},
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