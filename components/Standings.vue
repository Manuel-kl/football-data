<template>
    <div>
      <p>Standings</p>
      <pre>{{ standings }}</pre> <!-- Display the fetched standings -->
    </div>
  </template>

  <script lang="ts" setup>
  import { ref } from "vue";
  import { useFootballStore } from "@/stores/footballStore";

  const standings = ref<any[]>([]);
  const config = useRuntimeConfig();

  const { data, error } = await useFetch('https://api.football-data.org/v4/competitions/PL/standings', {
    headers: {
      'X-Auth-Token': config.public.apiKey
    }
  });

  // Handling the response and setting it to the store
  if (error.value) {
    console.error('Error fetching standings:', error.value);
  } else {
    standings.value = data.value;
  }

  </script>
