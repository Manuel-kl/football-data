<template>
    <div class="flex flex-col items-center sm:flex-row-reverse w-full bg-light-gray px-5">
        <UPopover v-if="$route.path === '/matches'" :popper="{ placement: 'bottom-start' }"
            class="w-fit relative pt-3 sm:pt-0">
            <UButton icon="i-heroicons-calendar-days-20-solid" :label="format(date, 'd MMM, yyy')" />

            <template #panel="{ close }">
                <DatePicker v-model="date" is-required @close="close" @update:date="updateDate" />
            </template>
        </UPopover>
        <div :class="[$route.path === '/matches' ? 'w-[80%]' : 'w-full']">
            <div class="flex overflow-auto flex-row w-fit mx-auto gap-4 px-5 p-2 sm:p-5 text-white">
                <nuxt-link to="/" exact-active-class="border-yellow text-grass-green"
                    class="border-b border-light-gray rounded-md px-2 hover:border-b hover:border-yellow cursor-pointer">Table</nuxt-link>
                <nuxt-link to="/matches" exact-active-class="border-yellow text-grass-green"
                    class="border-b border-light-gray rounded-md px-2 hover:border-b hover:border-yellow cursor-pointer">
                    Matches
                </nuxt-link>
                <nuxt-link to="/scorers" exact-active-class="border-yellow text-grass-green"
                    class="border-b border-light-gray rounded-md px-2 hover:border-b hover:border-yellow cursor-pointer">
                    Scorers
                </nuxt-link>
                <!-- <nuxt-link to="/teams" exact-active-class="border-yellow text-grass-green"
                class="border-b border-light-gray rounded-md px-2 hover:border-b hover:border-yellow cursor-pointer">
                Teams
            </nuxt-link> -->
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { format } from 'date-fns'
const date = ref(new Date());
const footballStore = useFootballStore();

const updateDate = (newDate: Date) => {
    date.value = newDate;
    footballStore.setDate(newDate);
}

onMounted(() => {
    const selectedDate = localStorage.getItem('date');
    if (selectedDate) {
        date.value = new Date(selectedDate);
    }

    footballStore.setDate(date.value);
})
</script>
