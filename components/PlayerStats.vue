<template>
    <div class="bg-deep-navy p-4 sm:p-6 rounded-lg shadow-lg">
        <div class="text-xs text-faded-gray mb-4 text-right">
            Last Updated: {{ formatDate(playerData.lastUpdated) }}
        </div>
        <div class="grid grid-cols-1 gap-4 sm:gap-6">
            <div class="col-span-full">
                <div class="bg-main-bg-color p-4 sm:p-6 rounded-lg mb-4">
                    <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                        <img :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=${playerData.name}`"
                            alt="Player Photo"
                            class="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 sm:border-3 border-main-green shadow-lg">
                        <div class="space-y-2 sm:space-y-3 text-center sm:text-left">
                            <div>
                                <h1 class="text-2xl sm:text-3xl font-bold text-white mb-1">{{ playerData.name }}</h1>
                                <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
                                    <span class="px-3 py-1 bg-light-gray rounded-full text-main-green text-sm">
                                        {{ playerData.position }}
                                    </span>
                                    <span class="text-yellow font-bold">#{{ playerData.shirtNumber }}</span>
                                </div>
                            </div>
                            <div
                                class="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-faded-gray">
                                <div class="flex items-center gap-2">
                                    <img :src="playerData.currentTeam.crest" alt="Team crest" class="w-5 h-5">
                                    <span>{{ playerData.currentTeam.name }}</span>
                                </div>
                                <div class="hidden sm:block">|</div>
                                <div class="flex flex-col items-center sm:items-start">
                                    <span class="text-xs text-main-green">Nationality</span>
                                    <span>{{ playerData.nationality }}</span>
                                </div>
                                <div class="hidden sm:block">|</div>
                                <div class="flex flex-col items-center sm:items-start">
                                    <span class="text-xs text-main-green">Date of Birth</span>
                                    <span>{{ formatDate(playerData.dateOfBirth) }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="bg-main-bg-color p-4 rounded-lg">
                        <h3 class="text-main-green font-semibold mb-2">Current Club Details</h3>
                        <div class="space-y-2 text-sm">
                            <p class="text-white">Club: <span class="text-faded-gray">{{ playerData.currentTeam.name }}
                                    ({{ playerData.currentTeam.tla }})</span></p>
                            <p class="text-white">Founded: <span class="text-faded-gray">{{
                playerData.currentTeam.founded }}</span></p>
                            <p class="text-white">Venue: <span class="text-faded-gray">{{ playerData.currentTeam.venue
                                    }}</span></p>
                            <p class="text-white">Address: <span class="text-faded-gray">{{
                playerData.currentTeam.address }}</span></p>
                        </div>
                    </div>

                    <div class="bg-main-bg-color p-4 rounded-lg">
                        <h3 class="text-main-green font-semibold mb-2">Team Colors</h3>
                        <p class="text-faded-gray text-sm">{{ playerData.currentTeam.clubColors }}</p>
                    </div>

                    <div class="bg-main-bg-color p-4 rounded-lg">
                        <h3 class="text-main-green font-semibold mb-2">Links</h3>
                        <a :href="playerData.currentTeam.website" target="_blank"
                            class="inline-flex items-center gap-2 text-grass-green hover:text-main-green transition-colors">
                            <span>Official Website</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="bg-main-bg-color p-4 rounded-lg">
                    <h2 class="text-lg font-semibold text-white mb-3">Goals</h2>
                    <div class="text-2xl sm:text-3xl font-bold text-main-green">12</div>
                    <p class="text-sm text-faded-gray">2023/24 Season</p>
                </div>

                <div class="bg-main-bg-color p-4 rounded-lg">
                    <h2 class="text-lg font-semibold text-white mb-3">Assists</h2>
                    <div class="text-3xl font-bold text-grass-green">8</div>
                    <p class="text-sm text-faded-gray">2023/24 Season</p>
                </div>

                <div class="bg-main-bg-color p-4 rounded-lg">
                    <h2 class="text-lg font-semibold text-white mb-3">Matches</h2>
                    <div class="text-3xl font-bold text-teal">24</div>
                    <p class="text-sm text-faded-gray">2023/24 Season</p>
                </div>

                <div class="col-span-full bg-main-bg-color p-4 rounded-lg">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div class="stat-item">
                            <p class="text-faded-gray text-sm sm:text-base">Minutes Played</p>
                            <p class="text-base sm:text-lg font-semibold text-white">2,160</p>
                        </div>
                        <div class="stat-item">
                            <p class="text-faded-gray">Shot Accuracy</p>
                            <p class="text-lg font-semibold text-white">68%</p>
                        </div>
                        <div class="stat-item">
                            <p class="text-faded-gray">Pass Completion</p>
                            <p class="text-lg font-semibold text-white">87%</p>
                        </div>
                        <div class="stat-item">
                            <p class="text-faded-gray">Tackles Won</p>
                            <p class="text-lg font-semibold text-white">45</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const footballStore = useFootballStore();
const playerData = ref<any>(null);
const loading = ref<boolean>(false);
const toast = useToast();

onMounted(() => {
  fetchPlayerData();
});

const fetchPlayerData = async () => {
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
</script>

<style scoped>
.stat-item {
    @apply p-3 bg-light-gray rounded-lg;
}
</style>