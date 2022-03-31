<template>
  <v-footer padless>
    <v-col class="text-center">
      <p>Used datasets:</p>
      <p v-for="(dataset, key) in datasets" v-bind:key="key">
        <a :href="dataset.url" target="_blank">{{ dataset.name }}</a>
        by <a :href="dataset.authorUrl" target="_blank">{{ dataset.author }}</a> is licensed under
        <a :href="dataset.licenseUrl" target="_blank">{{ dataset.license }}</a>
      </p>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      datasets: [
        {
          name: "Betriebsstellenverzeichnis",
          url: "https://data.deutschebahn.com/dataset/data-betriebsstellen.html",
          author: "Deutsche Bahn AG",
          authorUrl: "https://deutschebahn.com",
          license: "CC BY 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
        },
        {
          name: "Haltestellendaten",
          url: "https://data.deutschebahn.com/dataset/data-haltestellen.html",
          author: "Deutsche Bahn AG",
          authorUrl: "https://deutschebahn.com",
          license: "CC BY 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
        },
      ]
    };
  }
}
</script>

<style>
footer {
  margin: 65px auto 0;
  color: #bfbfbf !important;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}

p {
  line-height: 1;
}

a {
  color: #939292 !important;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
