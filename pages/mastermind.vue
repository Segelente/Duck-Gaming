<template>
  <div class="flex flex-col p-6 gap-4">

    <!-- Past guesses -->
    <div v-for="(entry, rowIndex) in pastGuesses" :key="rowIndex" class="flex flex-col gap-2">
      <div class="flex gap-4">
        <div
            v-for="(colorObj, index) in entry.guess"
            :key="index"
            :class="`w-20 h-20 rounded-full ${getColorValue(colorObj)}`"
        ></div>
      </div>
      <!-- Feedback dots -->
      <div class="flex gap-1 mt-1">
        <span
            v-for="n in entry.feedback.correctPlace"
            :key="'green-' + n"
            class="w-4 h-4 bg-green-500 rounded-full"
        ></span>
        <span
            v-for="n in entry.feedback.correctColour"
            :key="'yellow-' + n"
            class="w-4 h-4 bg-yellow-400 rounded-full"
        ></span>
      </div>
    </div>

    <!-- Current guess -->
    <div class="flex gap-4 mt-4">
      <div
          v-for="(colorObj, index) in currentGuess"
          :key="index"
          :class="`w-20 h-20 rounded-full cursor-pointer ${getColorValue(colorObj)}`"
          @click="changeColor(index)"
      ></div>
    </div>

    <button
        class="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 mt-4"
        @click="submitGuess"
    >
      Submit Guess
    </button>

    <div v-if="winState===2" class="text-green-600 font-bold text-xl mt-4">
      YOU WON!!!!!!
    </div>
    <div v-if="winState===0" class="text-rose-800 font-bold text-xl mt-4">
      YOU LOST :C
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Colors
const colors = [
  { CYAN: "bg-cyan-800" },
  { SKY: "bg-sky-400" },
  { PURPLE: "bg-purple-700" },
  { FUCHSIA: "bg-fuchsia-300" },
  { ROSE: "bg-rose-800" },
  { TEAL: "bg-teal-400" },
  { GREEN: "bg-green-900" }
];

// State
const currentGuess = ref(Array(4).fill(colors[0]));
const pastGuesses = ref([]);
const winState = ref(1);

// Random solution
const selection = Array.from({ length: 4 }, () => colors[Math.floor(Math.random() * colors.length)]);
console.log("Solution:", selection);

// Helpers
function getColorValue(colorObj) {
  return Object.values(colorObj)[0];
}

function changeColor(index) {
  const currentValue = getColorValue(currentGuess.value[index]);
  const currentPos = colors.findIndex(c => getColorValue(c) === currentValue);
  currentGuess.value[index] = colors[(currentPos + 1) % colors.length];
}
let guessAmount = 0;

// Submit guess
function submitGuess() {
  guessAmount += 1;
  if (guessAmount >=8){
    winState.value = 0;
  }
  const guessValues = currentGuess.value.map(getColorValue);
  const solutionValues = selection.map(getColorValue);

  // Check for win
  const isWin = guessValues.every((val, i) => val === solutionValues[i]);
  if (isWin) {
    winState.value = 2;
  }

  // Calculate feedback
  let correctPlace = 0;
  let correctColour = 0;

  const remainingGuess = [];
  const remainingSolution = [];

  guessValues.forEach((val, i) => {
    if (val === solutionValues[i]) {
      correctPlace++;
    } else {
      remainingGuess.push(val);
      remainingSolution.push(solutionValues[i]);
    }
  });

  remainingGuess.forEach(val => {
    const index = remainingSolution.indexOf(val);
    if (index !== -1) {
      correctColour++;
      remainingSolution.splice(index, 1);
    }
  });

  // Save the guess with feedback
  pastGuesses.value.push({
    guess: [...currentGuess.value],
    feedback: { correctPlace, correctColour }
  });

  // Reset current guess
  currentGuess.value = Array(4).fill(colors[0]);
}
</script>
