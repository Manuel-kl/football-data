<template>
    <div class="px-6 pt-2 pb-6 bg-light-gray text-white flex flex-col gap-2 justify-center items-center">
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
                        <td class="text-sm p-2 sm:p-3 flex items-center cursor-pointer hover:underline hover:text-main-green" @click="viewPlayer(scorer.player.id)">
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
const loading = ref<boolean>(false);
const page = ref(1);

const paginatedScorers = computed(() => {
    if (!scorers.value) return [];
    const start = (page.value - 1) * 10;
    const end = start + 10;
    return scorers.value.scorers.slice(start, end);
});

onMounted(() => {
    fetchScorers();
});

const fetchScorers = async () => {
    if (!footballStore.selectedLeague) return;
    loading.value = true;
    try {
        scorers.value = await $fetch('/api/scorers', {
            params: { league: footballStore.selectedLeague, limit: 300 },
        })
    } catch (err) {
        toast.add({ title: 'Error', description: "Failed to fetch data", color: 'red' });
    } finally {
        loading.value = false;
    }
};

watchEffect(() => {
    fetchScorers();
});

const viewPlayer = (player: string) => {
    footballStore.setPlayer(player);
    router.push('player-stats');
};

</script>