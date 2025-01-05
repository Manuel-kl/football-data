<template>
  <nav class="flex justify-between p-4 bg-main-bg-color border-b border-dark-gray">
    <router-link to="/"
      class="border-r-main-green hover:border-r-white hover:border-b-main-green border-r-2 border-b-2 px-2 sm:px-5 flex items-center rounded-md font-bold">
      <h1 class="text-white hover:text-yellow text-lg sm:text-lg">
        Football<span class="text-yellow hover:text-white p-0 m-0">Data</span>
      </h1>
    </router-link>

    <div>
      <USelectMenu v-model="selected" :options="leagues" @update:model-value="updateLeague()" class="w-[170px] sm:w-[250px]" searchable
        searchable-placeholder="League name">
        <template #leading>
          <UAvatar v-bind="selected.avatar" size="2xs" />
        </template>
        <template #option-empty="{ query }">
          <q>{{ query }}</q> N/A
        </template>
      </USelectMenu>
    </div>
  </nav>
</template>
<script setup lang="ts">
import type { Avatar } from '#ui/types'

interface Selected {
  label: string
  avatar: Avatar
}

const leagues = [
  {
    label: 'Premier League',
    code: 'PL',
    avatar: {
      src: 'https://crests.football-data.org/770.svg'
    }
  },
  {
    label: 'Bundesliga',
    code: 'BL1',
    avatar: {
      src: 'https://crests.football-data.org/759.svg'
    }
  },
  {
    label: 'Serie A',
    code: 'SA',
    avatar: {
      src: 'https://crests.football-data.org/784.svg'
    }
  },
  {
    label: 'La Liga',
    code: 'PD',
    avatar: {
      src: 'https://crests.football-data.org/760.svg'
    }
  },
  {
    label: "Eredivisie",
    code: 'DED',
    avatar: {
      src: 'https://crests.football-data.org/8601.svg'
    }
  },
  {
    label: "Campeonato Brasileiro Série A",
    code: 'BSA',
    avatar: {
      src: 'https://crests.football-data.org/764.svg'
    }
  },
  {
    label: "Primera Division",
    code: 'PD',
    avatar: {
      src: 'https://crests.football-data.org/760.svg'
    }
  },
  {
    label: "Ligue 1",
    code: 'FL1',
    avatar: {
      src: 'https://crests.football-data.org/773.svg'
    }
  },
  {
    label: "Championship",
    code: 'ELC',
    avatar: {
      src: 'https://crests.football-data.org/770.svg'
    }
  },
  {
    label: "Primeira Liga",
    code: 'PPL',
    avatar: {
      src: 'https://crests.football-data.org/765.svg'
    }
  },
  {
    label: "European Championship",
    code: 'EC',
    avatar: {
      src: 'https://crests.football-data.org/EUR.svg'
    }
  },
  {
    label: "Copa Libertadores",
    code: 'CLI',
    avatar: {
      src: 'https://crests.football-data.org/CLI.svg'
    }
  }
]

const selected = ref<Selected>(leagues[0])

const footballStore = useFootballStore();

const updateLeague = () => {
  footballStore.selectedLeague = selected.value.code;
}

</script>