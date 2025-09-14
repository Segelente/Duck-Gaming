<template>
  <div class="fixed top-4 left-6 flex flex-col gap-4 z-50">
    <!-- Home Icon -->
    <NuxtLink
        to="/"
        class="p-3 rounded-2xl bg-white/80 shadow-lg hover:scale-110 transition-transform backdrop-blur"
    >
      <Home class="w-6 h-6 text-pink-600" />
    </NuxtLink>

    <!-- CV Icon -->
    <NuxtLink
        to="/mastermind"
        class="p-3 rounded-2xl bg-white/80 shadow-lg hover:scale-110 transition-transform backdrop-blur"
    >
      <Book class="w-6 h-6 text-purple-600" />
    </NuxtLink>
  </div>
</template>

<script setup>
import { Home, Book } from "lucide-vue-next";
</script>
