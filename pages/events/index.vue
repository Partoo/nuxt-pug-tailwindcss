<template lang="pug">
div.h-screen.bg-blue-900.text-white.font-bold.text-5xl EVENTS
  ul
    li(v-for="event in events" :key="event.id")
      nuxt-link(:to="`/events/${event.id}`" class="text-blue-300") {{ event.title }}
</template>
<script setup>
const events = [
  { id: 1, title: 'Event 1' },
  { id: 2, title: 'Event 2' },
  { id: 3, title: 'Event 3' },
]
</script>