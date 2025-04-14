<template>
    <div v-if="loading">
        <Loading />
    </div>
    <div v-else-if="playerData" class="min-h-screen bg-gray-900 text-white p-2 sm:p-4">
        <div class="max-w-4xl mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-xl">

            <div class="flex flex-wrap justify-end items-center p-2 text-gray-400 text-sm">
                <div>Last Updated: {{ formatDateTime(playerData.lastUpdated) }}</div>
            </div>

            <div class="flex flex-col sm:flex-row items-center p-6">
                <div
                    class="w-24 h-24 rounded-full bg-red-500 flex items-center justify-center text-white text-4xl font-bold border-4 border-main-green">
                    {{ getInitials(playerData.name) }}
                </div>

                <div class="mt-4 sm:mt-0 sm:ml-6 flex-grow text-center sm:text-left">
                    <h1 class="text-3xl font-bold">{{ playerData.name }}</h1>
                    <div class="text-main-green flex items-center justify-center sm:justify-start">
                        {{ playerData.position }}, {{ playerData.section }}
                        <span class="ml-4 bg-yellow text-black font-bold px-2 py-1 rounded flex items-center">
                            <Shirt class="h-4 w-4 mr-1" />
                            #{{ playerData.shirtNumber }}
                        </span>
                    </div>

                    <div class="mt-4 flex flex-col sm:flex-row items-center text-gray-300">
                        <div class="flex items-center">
                            <div class="mr-1">Current Team</div>
                            <Flag class="h-4 w-4 mr-1" />
                            <span class="flex items-center">
                                <span v-if="playerData.currentTeam.area?.code"
                                    class="mr-1 text-xs border border-gray-600 px-1">
                                    {{ playerData.currentTeam.area.code }}
                                </span>
                                {{ playerData.currentTeam.name }}
                            </span>
                        </div>

                        <div class="hidden sm:block mx-4 text-gray-500">|</div>

                        <div class="flex items-center mt-2 sm:mt-0">
                            <div class="mr-1">Nationality</div>
                            <Flag class="h-4 w-4 mr-1" />
                            <span>{{ playerData.nationality }}</span>
                        </div>

                        <div class="hidden sm:block mx-4 text-gray-500">|</div>

                        <div class="flex items-center mt-2 sm:mt-0">
                            <div class="mr-1">Date of Birth</div>
                            <Calendar class="h-4 w-4 mr-1" />
                            <span>{{ formatDate(playerData.dateOfBirth) }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div class="bg-gray-700 rounded-lg p-4">
                    <h2 class="text-main-green text-xl mb-4">Current Team ({{ playerData.currentTeam.name }}) Details
                    </h2>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="font-medium">Full Name:</span>
                            <span>{{ playerData.firstName }} {{ playerData.lastName }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="font-medium">Short Name:</span>
                            <span>{{ playerData.currentTeam.shortName }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="font-medium">TLA:</span>
                            <span>{{ playerData.currentTeam.tla }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="font-medium">Founded:</span>
                            <span>{{ playerData.currentTeam.founded }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="font-medium">Club Colors:</span>
                            <span>{{ playerData.currentTeam.clubColors }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="font-medium">Address:</span>
                            <span class="text-right max-w-[200px]">{{ playerData.currentTeam.address }}</span>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col items-center justify-center bg-gray-700 rounded-lg p-4">
                    <h2 class="text-main-green text-xl mb-4">Area Information</h2>
                    <div class="space-y-2 w-full mb-4">
                        <div class="flex justify-between">
                            <span class="font-medium">Area Name:</span>
                            <span>{{ playerData.currentTeam.area.name }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="font-medium">Area Code:</span>
                            <span>{{ playerData.currentTeam.area.code }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="font-medium">Contract Start:</span>
                            <span>{{ playerData.currentTeam.contract.start || 'N/A' }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="font-medium">Contract Until:</span>
                            <span>{{ playerData.currentTeam.contract.until || 'N/A' }}</span>
                        </div>
                    </div>
                    <img v-if="playerData.currentTeam.crest" :src="playerData.currentTeam.crest" alt="Team Crest"
                        class="w-16 h-16 mb-4" @error="(e) => { if (e.target) e.target.style.display = 'none'; }" />
                    <a :href="playerData.currentTeam.website" target="_blank"
                        class="flex items-center text-main-green hover:text-green-400 transition-colors">
                        <LinkIcon class="h-4 w-4 mr-2" />
                        {{ playerData.currentTeam.name }} official website
                    </a>
                </div>
            </div>

            <div class="p-6 border-t border-gray-700" v-if="playerData.currentTeam.runningCompetitions?.length">
                <h2 class="text-xl text-main-green mb-4">Running Competitions</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div v-for="competition in playerData.currentTeam.runningCompetitions" :key="competition.id"
                        class="bg-gray-700 p-3 rounded-lg flex items-center">
                        <img v-if="competition.emblem" :src="competition.emblem" :alt="competition.name"
                            class="w-8 h-8 mr-3">
                        <div>
                            <div class="font-medium">{{ competition.name }}</div>
                            <div class="text-gray-400 text-sm">Code: {{ competition.code }}</div>
                            <div class="text-gray-400 text-sm">Type: {{ competition.type }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-900 p-4 text-center text-gray-500">
                <p>Player Profile: {{ playerData.name }}</p>
                <p class="text-sm mt-1">Last Updated: {{ formatDateTime(playerData.lastUpdated) }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Calendar, Flag, Shirt, Link as LinkIcon } from 'lucide-vue-next';

const footballStore = useFootballStore();
const router = useRouter();
const playerData = ref<any>(null);
const loading = ref<boolean>(false);
const toast = useToast();

onMounted(() => {
    const selectedPlayer = localStorage.getItem('player');

    if (selectedPlayer) {
        footballStore.setPlayer(selectedPlayer);
        fetchPlayerData();
    } else {
        router.push('/');
    }
});

const fetchPlayerData = async () => {
    if (!footballStore.selectedPlayer) return;

    loading.value = true;
    try {
        playerData.value = await $fetch('/api/player-stats', {
            params: { playerId: footballStore.selectedPlayer },
        });
    } catch (err) {
        toast.add({ title: 'Error', description: "Failed to fetch data", color: 'red' });
    } finally {
        loading.value = false;
    }
};

watchEffect(() => {
    fetchPlayerData();
});

const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
};

const getInitials = (name: string): string => {
    return name.split(' ').map(part => part.charAt(0)).join('');
};

const formatDateTime = (dateTimeString: string): string => {
    return new Date(dateTimeString).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
};
</script>