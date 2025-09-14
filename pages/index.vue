<template>
  <section class="snap-start h-screen w-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-200 via-yellow-100 to-pink-200">
    <h1 class="text-4xl font-bold text-purple-700 mb-8">Choose a Game!</h1>

    <div class="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
      <!-- Mastermind -->
      <a
          href="/mastermind"
          class="h-60 flex flex-col justify-center items-center p-6 rounded-2xl shadow-xl bg-white/30 backdrop-blur-md text-purple-700 font-semibold text-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
      >
        Mastermind
      </a>

      <!-- Game 2 -->
      <a
          href="#"
          class="h-60 flex flex-col justify-center items-center p-6 rounded-2xl shadow-xl bg-white/30 backdrop-blur-md text-purple-700 font-semibold text-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
      >
        Game 2
      </a>

      <!-- Game 3 -->
      <a
          href="#"
          class="h-60 flex flex-col justify-center items-center p-6 rounded-2xl shadow-xl bg-white/30 backdrop-blur-md text-purple-700 font-semibold text-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
      >
        Game 3
      </a>
    </div>
  </section>
</template>
