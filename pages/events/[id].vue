<template lang="pug">
div.h-screen.bg-blue-900.text-white.font-bold.text-5xl EVENT {{ id }}
  p
    nuxt-link(to="/events")
      IconsHome
</template>
<script setup>

const router = useRoute()
const { id } = router.params

</script>