<template>
  <div>
    <p>Table</p>
  </div>
</template>
<script lang="ts" setup>
import { useFootballStore } from "@/stores/footballStore";
import { onMounted } from "vue";

const footballStore = useFootballStore();

onMounted(() => {
  footballStore.getStandings();
});
</script>
