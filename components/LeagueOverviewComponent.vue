<template>
    <div class="flex w-full bg-light-gray px-5">
        <div class="flex overflow-auto flex-row w-fit mx-auto gap-4 px-5 p-5 text-white">
            <nuxt-link to="/" exact-active-class="border-yellow text-grass-green"
                class="border-b border-light-gray rounded-md px-2 hover:border-b hover:border-yellow cursor-pointer">Table</nuxt-link>
            <nuxt-link to="/fixtures" exact-active-class="border-yellow text-grass-green"
                class="border-b border-light-gray rounded-md px-2 hover:border-b hover:border-yellow cursor-pointer">
                Fixtures
            </nuxt-link>
            <nuxt-link to="/results" exact-active-class="border-yellow text-grass-green"
                class="border-b border-light-gray rounded-md px-2 hover:border-b hover:border-yellow cursor-pointer">
                Results
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
</template>