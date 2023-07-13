<template lang="pug">
NuxtLayout
  footer.absolute.bottom-0.w-full
    section.bg-white
      div.max-w-screen-xl.px-4.py-12.mx-auto.space-y-8.overflow-hidden(class="sm:px-6 lg:px-8")
        nav.flex.flex-wrap.justify-center.-mx-5.-my-2.justify-around
            NuxtLink.text-base.text-gray-500(class="hover:text-gray-900" to="/") Home
            NuxtLink.text-base.text-gray-500(class="hover:text-gray-900" to="events") Events
  NuxtPage
</template>
