<template>
    <div class="flex flex-col items-center justify-center min-h-[400px] p-8 bg-light-gray rounded-lg">
        <div class="relative mb-6">
            <div class="text-6xl mb-2">⚽</div>
            <div class="absolute -top-2 -right-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-white w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
        </div>

        <h2 class="text-2xl font-bold text-white mb-5">
            No matches for this day
        </h2>

        <p class="text-faded-gray italic text-center max-w-md text-sm">
            The beautiful game is taking a breather! No football matches scheduled for this day.
        </p>

        <div class="mt-5 text-white text-sm text-center">
            <p>Try checking other leagues or upcoming match days</p>
        </div>
    </div>
</template>