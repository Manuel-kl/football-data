export default defineAppConfig<any>({
    ui: {
        notifications: {
            wrapper: 'fixed flex flex-col justify-end z-[55]',
            position: 'top-0 bottom-[unset]',
            width: 'w-full sm:w-96',
            container: 'px-4 sm:px-6 py-6 space-y-3 overflow-y-auto'
        },
    },
})
