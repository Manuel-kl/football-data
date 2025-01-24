<template>
  <div class="px-5 bg-light-gray flex justify-center items-center">
    <div v-if="loading">
      <Loading />
    </div>

    <div v-else class="flex overflow-auto shadow-lg shadow-dark-gray rounded-md w-full sm:w-[60%] ">
      <table class="bg-deep-navy w-full text-white p-2 sm:p-5 mx-auto rounded-md">
        <thead class="">
          <tr>
            <th class="text-sm w-5 p-2">#</th>
            <th class="text-sm w-[150px] p-2">Team</th>
            <th class="text-sm w-10 p-2">P</th>
            <th class="text-sm w-10 p-2">W</th>
            <th class="text-sm w-10 p-2">D</th>
            <th class="text-sm w-10 p-2">L</th>
            <th class="text-sm w-10 p-2">GF</th>
            <th class="text-sm w-10 p-2">GA</th>
            <th class="text-sm w-10 p-2">GD</th>
            <th class="text-sm w-10 p-2">Pts</th>
          </tr>
        </thead>
        <tbody class="border border-t-main-green">
          <tr v-for="row in tableData" :key="row.position" class="">
            <td class="text-sm w-5 border-x border-b border-dark-gray text-center p-1 py-2">{{ row.position }}</td>
            <td class="text-sm w-full flex flex-row items-center gap-2 border-x border-b border-dark-gray p-2">
              <span><img class="w-5 h-5" :src="row.crest" alt=""></span>{{ row.teamName }}
            </td>
            <td class="text-sm w-10 border-x border-b border-dark-gray text-center p-1 py-2">{{ row.playedGames }}</td>
            <td class="text-sm w-10 border-x border-b border-dark-gray text-center p-1 py-2">{{ row.won }}</td>
            <td class="text-sm w-10 border-x border-b border-dark-gray text-center p-1 py-2">{{ row.draw }}</td>
            <td class="text-sm w-10 border-x border-b border-dark-gray text-center p-1 py-2">{{ row.lost }}</td>
            <td class="text-sm w-10 border-x border-b border-dark-gray text-center p-1 py-2">{{ row.goalsFor }}</td>
            <td class="text-sm w-10 border-x border-b border-dark-gray text-center p-1 py-2">{{ row.goalsAgainst }}</td>
            <td class="text-sm w-10 border-x border-b border-dark-gray text-center p-1 py-2">{{ row.goalDifference }}
            </td>
            <td class="text-sm w-10 border-x border-b border-dark-gray text-center p-1 py-2">{{ row.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const footballStore = useFootballStore();
const data = ref<any>(null);
const loading = ref<boolean>(false);
const toast = useToast();

const tableData = computed(() => {
  return data.value?.standings[0]?.table.map((team: any) => ({
    position: team.position,
    teamName: team.team.shortName,
    crest: team.team.crest,
    playedGames: team.playedGames,
    won: team.won,
    draw: team.draw,
    lost: team.lost,
    points: team.points,
    goalsFor: team.goalsFor,
    goalsAgainst: team.goalsAgainst,
    goalDifference: team.goalDifference,
  })) || [];
});

onMounted(() => {
  fetchStandings();
});

const fetchStandings = async () => {
  if(!footballStore.selectedLeague) return;

  loading.value = true;
  try {
    data.value = await $fetch('/api/standings', {
      params: { league: footballStore.selectedLeague },
    });
  } catch (err) {
    toast.add({ title: 'Error', description: "Failed to fetch data", color: 'red' });
  } finally {
    loading.value = false;
  }
};

watchEffect(() => {
  fetchStandings();
});
</script>
