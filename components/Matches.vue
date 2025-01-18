<template>
    <div class="px-6 py-2 bg-main-bg-color text-white flex flex-col gap-2  items-center">
        <div v-if="loading">
            <Loading />
        </div>
        <div v-if="data && data.length > 0" v-for="match in data" :key="match.id"
            class="p-2 sm:p-4 bg-dark-gray rounded-lg shadow-lg w-[90%] sm:w-[70%]"
            :class="getMatchClass(match.status)">
            <div class="flex flex-col sm:grid grid-cols-6 sm:items-center">
                <div class="flex flex-row justify-between items-center col-span-2">
                    <div class="flex items-center">
                        <img :src="match.homeTeam.crest" alt="Home Team Crest" class="w-5 sm:w-8 h-5 sm:h-8 mr-1" />
                        <span class="text-sm sm:text-lg">{{ match.homeTeam.shortName }}</span>
                    </div>
                </div>

                <div class="col-span-2 flex justify-end sm:justify-center items-end sm:items-center gap-2">
                    <div class="flex sm:flex-col">
                        <span v-if="match.status === 'PAUSED'" class="text-sm sm:text-lg pl-2 sm:px-2">HT</span>
                        <span v-if="match.status === 'FINISHED'" class="text-sm sm:text-lg pl-2 sm:px-2">FT</span>
                        <span v-if="match.status === 'POSTPONED'" class="text-sm sm:text-lg pl-2 sm:px-2">Post.</span>
                        <span v-if="match.status === 'SUSPENDED'"
                            class="text-sm sm:text-lg pl-2 sm:px-2">Suspended</span>
                        <span v-if="match.status === 'CANCELLED'"
                            class="text-sm sm:text-lg pl-2 sm:px-2">Cancelled</span>

                    </div>
                    <div>
                        <span
                            v-if="match.status === 'IN_PLAY' || match.status === 'FINISHED' || match.status === 'PAUSED'"
                            class="text-sm sm:text-lg sm:px-2 text-white">{{ match.score.fullTime.home }} - {{
                                match.score.fullTime.away }}
                        </span>
                    </div>
                    <div class="text-right sm:text-left"
                        v-if="match.status === 'SCHEDULED' || match.status === 'TIMED'">
                        <span class="text-sm sm:text-lg">{{ new Date(match.utcDate).toLocaleTimeString(undefined, {
                            hour: '2-digit', minute: '2-digit'
                        }) }}</span>
                    </div>
                </div>

                <div class="flex items-center col-span-2">
                    <img :src="match.awayTeam.crest" alt="Away Team Crest" class="w-5 sm:w-8 h-5 sm:h-8 mr-1" />
                    <span class="text-sm sm:text-lg">{{ match.awayTeam.shortName }}</span>
                </div>
            </div>
        </div>

        <div v-if="!data || data.length == 0">
            <NoGames />
        </div>
    </div>
</template>

<script lang="ts" setup>
import NoGames from './ErrorPages/NoGames.vue';

const footballStore = useFootballStore();

const data = ref<any>(null);
const loading = ref<boolean>(false);
const toast = useToast();

onMounted(() => {
    fetchFixtures();
});

const fetchFixtures = async () => {
    loading.value = true;
    try {
        const allMatches = await $fetch('/api/matches', {
            params: { league: footballStore.selectedLeague },
        }) as { matches: Array<any> };
        data.value = allMatches.matches.filter((match: any) =>
            new Date(match.utcDate).toISOString().split('T')[0] === footballStore.selectedDate.toISOString().split('T')[0]
        );
    } catch (err) {
        toast.add({ title: 'Error', description: "Failed to fetch data", color: 'red' });
    } finally {
        loading.value = false;
    }
};

watchEffect(() => {
    const league = footballStore.selectedLeague;
    const date = footballStore.selectedDate;
    fetchFixtures();
});

const getMatchClass = (status) => {
    return status === 'IN_PLAY' ? 'shadow shadow-md shadow-main-green blinking-shadow' : '';
};

</script>

<style>
.blinking-shadow {
    animation: blink-shadow 2s infinite;
}

@keyframes blink-shadow {
    0% {
        box-shadow: 0 0 1px rgba(126, 217, 87, 0.5);
    }

    50% {
        box-shadow: 0 0 5px rgba(126, 217, 87, 1);
    }

    100% {
        box-shadow: 0 0 1px rgba(126, 217, 87, 0.5);
    }
}
</style>