<template lang="pug">
NuxtLayout
  header.w-full.bg-white
    div.max-w-screen-xl.px-4.py-12.mx-auto.space-y-8.overflow-hidden(class="sm:px-6 lg:px-8")
      nav.flex.flex-wrap.justify-center.-mx-5.-my-2.justify-around
          NuxtLink.text-base.text-gray-500(class="hover:text-gray-900" to="/") Home
          NuxtLink.text-base.text-gray-500(class="hover:text-gray-900" to="/events") Events
  NuxtPage.p-4
</template>
<style lang="scss">
.page-enter-active, .page-leave-active {
  transition: all 0.5s;
}
.page-enter-from, .page-leave-to {
  opacity: 0;
}
</style>