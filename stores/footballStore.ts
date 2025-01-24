import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFootballStore = defineStore('league', () => {
  const selectedLeague = ref<string>('PL');
  const selectedDate = ref<Date>(new Date());
  const selectedPlayer = ref<string>('');

  function setLeague(league: string) {
    selectedLeague.value = league;
    localStorage.setItem('league', league);
  }

  function setDate(date: Date) {
    selectedDate.value = date;
    localStorage.setItem('date', date.toISOString());
  }

  function setPlayer(player: string) {
    selectedPlayer.value = player;
    localStorage.setItem('player', player);
  }

  return {
    selectedLeague,
    setLeague,
    selectedDate,
    selectedPlayer,
    setPlayer,
    setDate,
  };
});
