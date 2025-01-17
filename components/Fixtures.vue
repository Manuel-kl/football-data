<template>
    <div class="p-6 bg-main-bg-color text-white">
        <div v-for="match in fixtures" :key="match.id" class="mb-6 p-4 bg-dark-gray rounded-lg shadow-lg sm:w-[60%]">
            <h2 class="text-xl font-semibold">{{ formatDate(match.utcDate) }}</h2>
            <div class="flex items-center justify-between mt-2">
                <div class="flex items-center">
                    <img :src="match.homeTeam.crest" alt="Home Team Crest" class="w-12 h-12 mr-2" />
                    <span class="text-lg">{{ match.homeTeam.name }}</span>
                </div>
                <span class="text-lg">vs</span>
                <div class="flex items-center">
                    <img :src="match.awayTeam.crest" alt="Away Team Crest" class="w-12 h-12 ml-2" />
                    <span class="text-lg">{{ match.awayTeam.name }}</span>
                </div>
            </div>
            <p class="mt-2 text-yellow">Status: {{ match.status }}</p>
        </div>
    </div>
</template>

<script setup>

// Dummy fixtures data
const fixtures = ref([
    {
        id: 1,
        utcDate: "2025-01-25T15:00:00Z",
        status: "TIMED",
        homeTeam: {
            name: "Liverpool FC",
            crest: "https://crests.football-data.org/64.png"
        },
        awayTeam: {
            name: "Ipswich Town FC",
            crest: "https://crests.football-data.org/349.png"
        }
    },
    {
        id: 2,
        utcDate: "2025-01-25T15:00:00Z",
        status: "TIMED",
        homeTeam: {
            name: "Wolverhampton Wanderers FC",
            crest: "https://crests.football-data.org/76.png"
        },
        awayTeam: {
            name: "Arsenal FC",
            crest: "https://crests.football-data.org/57.png"
        }
    },
    {
        id: 3,
        utcDate: "2025-01-26T14:00:00Z",
        status: "TIMED",
        homeTeam: {
            name: "Manchester City FC",
            crest: "https://crests.football-data.org/65.png"
        },
        awayTeam: {
            name: "Chelsea FC",
            crest: "https://crests.football-data.org/61.png"
        }
    },
]);

// Function to format the date
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>