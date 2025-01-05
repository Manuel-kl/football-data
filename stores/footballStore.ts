import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFootballStore = defineStore('league', () => {
  const selectedLeague = ref<string>('PL');

  function setLeague(league: string) {
    selectedLeague.value = league;
  }

  return {
    selectedLeague,
    setLeague,
  };
});
