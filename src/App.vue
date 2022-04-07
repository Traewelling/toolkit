<template>
  <v-app>
    <v-navigation-drawer app expand-on-hover mini-variant mobile-breakpoint="0">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            TRWL Toolkit
          </v-list-item-title>
          <v-list-item-subtitle>
            (Hopefully) all you need for trains
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            @click="$router.push(item.route)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer>
      <Footer></Footer>
    </v-footer>
  </v-app>
</template>

<script>

import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {Footer},
  data: () => ({
    items: [
      {title: 'DS100 Lookup', icon: 'mdi-text-search', route: 'lookup'},
      {title: 'Autocomplete', icon: 'mdi-database-search', route: 'autocomplete'}
    ],
  }),
};
</script>