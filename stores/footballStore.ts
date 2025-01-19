import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFootballStore = defineStore('league', () => {
  const selectedLeague = ref<string>('PL');
  const selectedDate = ref<Date>(new Date());
  const selectedPlayer = ref<string>('');

  function setLeague(league: string) {
    selectedLeague.value = league;
  }

  return {
    selectedLeague,
    setLeague,
    selectedDate,
    selectedPlayer,
  };
});
