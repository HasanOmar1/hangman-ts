import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (key: string) => {
      if (guessedLetters.includes(key) || isWinner || isLoser) return;

      setGuessedLetters((prev) => [...prev, key]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="top-text">
        {isLoser && "LOSER"}
        {isWinner && "WINNER! , Refresh to try again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
      />

      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isLoser || isWinner}
          activeLetter={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetter={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
