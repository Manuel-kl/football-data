<template>
  <div>
    <button @click="refresh">
      Refresh
    </button>

    <div v-if="data">
      Data: {{ data }}
    </div>

    <a href="/api/football-data" target="_blank">
      To the Endpoint
    </a>
  </div>
</template>
<script setup lang="ts">
const { data, refresh } = await useFetch('/api/football-data')
</script>