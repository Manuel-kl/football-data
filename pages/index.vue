<template>
    <div>
        <NuxtLoadingIndicator/>
        <Standings/>
        <UNotifications />
    </div>
  </template>
  <script setup>
  useHead({
      title: 'sj',
      meta: [
          {
              hid: 'description',
              name: 'description',
              content: 'This is a new test page'
          }
      ]
  })
  </script>