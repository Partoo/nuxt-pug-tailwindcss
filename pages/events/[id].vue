<template lang="pug">
div.flex.justify-center.items-center.h-screen.bg-blue-900.text-white.font-bold.text-5xl EVENT {{ id }}
</template>
<script setup>
import {useNuxtApp} from "#app";

const router = useRoute()
const { id } = router.params

</script>