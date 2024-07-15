import { GameState } from "./pages/GamePage"

export const emptyGameState: GameState = {
  current: undefined,
  guesses: [],
  guessCount: 0,
  colorCounts: {
    greenCount: 0,
    yellowCount: 0,
    redCount: 0,
  },
  wordFound: false,
  wordOfTheDay: "",
};

export const errorMessages = {
    guessing: {
        unknown: "Unknown word",
        duplicate: "Word already used",
        noData: "Data not loaded yet"
    },
    backend: {
        any: "Internal server error"
    }
}

export const languages = {
    english: "english"
}

export const guessServiceDataKey = "word_data";
export const gameStateKey = "state";