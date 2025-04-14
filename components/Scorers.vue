<template>
    <div class="px-6 pt-2 pb-6 bg-light-gray text-white flex flex-col gap-2 justify-center items-center">
        <div class="flex flex-row  w-full sm:w-[60%] overflow-auto">
            <button class="bg-deep-navy text-white p-2" @click="showScorers(null)">All</button>
            <div v-for="team in teams.teams" :key="team.id" class="p-2">
                <img :src="team.crest" class="w-8 h-8 cursor-pointer max-w-none" @click="showScorers(team.id)">
            </div>
        </div>
        <div v-if="loading">
            <Loading />
        </div>
        <div v-if="!loading"
            class="p-2 sm:p-4 bg-deep-navy border border-dark-gray rounded-lg shadow-dark-gray shadow-lg w-full sm:w-[60%] overflow-auto">
            <table class="bg-deep-navy text-white w-full">
                <thead class="">
                    <tr class="bg-dark-gray">
                        <th class="text-sm text-left p-2 rounded-tl-md">Player</th>
                        <th class="text-sm text-center p-2">Games</th>
                        <th class="text-sm text-center p-2">Goals</th>
                        <th class="text-sm text-center p-2">Assists</th>
                        <th class="text-sm text-center p-2 rounded-tr-md">Penalties</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="scorers" v-for="scorer in paginatedScorers" :key="scorer.player.id"
                        class="border-b border-gray-600">
                        <td class="text-sm p-2 sm:p-3 flex items-center cursor-pointer hover:underline hover:text-main-green"
                            @click="viewPlayer(scorer.player.id)">
                            <img :src="scorer.team.crest" alt="Team Crest" class="w-5 h-5 mr-2" />
                            {{ scorer.player.lastName }}
                        </td>
                        <td class="text-sm text-center p-2 sm:p-3">{{ scorer.playedMatches }}</td>
                        <td class="text-sm text-center p-2 sm:p-3">{{ scorer.goals }}</td>
                        <td class="text-sm text-center p-2 sm:p-3">{{ scorer.assists ?? 0 }}</td>
                        <td class="text-sm text-center p-2 sm:p-3">{{ scorer.penalties ?? 0 }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex justify-center p-5">
                <UPagination v-model="page" :page-count="10"
                    :total="scorers && scorers.scorers ? scorers.scorers.length : 0" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const footballStore = useFootballStore();
const toast = useToast();

const scorers = ref<any>(null);
const allScorers = ref<any>(null);
const loading = ref<boolean>(false);
const page = ref(1);
const teams = ref<any>([]);

const paginatedScorers = computed(() => {
    if (!scorers.value) return [];
    const start = (page.value - 1) * 10;
    const end = start + 10;
    return scorers.value.scorers.slice(start, end);
});

onMounted(() => {
    fetchScorers();
    fetchTeams();
});

const fetchScorers = async () => {
    if (!footballStore.selectedLeague) return;
    loading.value = true;
    try {
        const fetchedScorers: Array<[]> = await $fetch('/api/scorers', {
            params: { league: footballStore.selectedLeague, limit: 300 },
        })
        allScorers.value = fetchedScorers;
        scorers.value = {
            ...fetchedScorers,
            scorers: [...fetchedScorers.scorers]
        };
    } catch (err) {
        toast.add({ title: 'Error', description: "Failed to fetch data", color: 'red' });
    } finally {
        loading.value = false;
    }
};

const fetchTeams = async () => {
    const league = localStorage.getItem('league');
    if (!league) return;

    try {
        teams.value = await $fetch('/api/teams', {
            params: { league },
        });
    } catch (error) {
        console.error("Failed to fetch teams", error);
    }
}

watchEffect(() => {
    fetchScorers();
});

const viewPlayer = (player: string) => {
    footballStore.setPlayer(player);
    router.push('player-stats');
};

const showScorers = (teamId: string | null) => {
    page.value = 1;

    if (teamId) {
        scorers.value = {
            ...allScorers.value,
            scorers: allScorers.value.scorers.filter((scorer: any) => scorer.team.id === teamId)
        };
    } else {
        scorers.value = {
            ...allScorers.value,
            scorers: [...allScorers.value.scorers]
        };
    }
}
</script>