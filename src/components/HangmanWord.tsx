import "./HangmanWord.css";

type Props = {
  wordToGuess: string;
  guessedLetters: string[];
  reveal?: boolean;
};

const HangmanWord = ({
  wordToGuess,
  guessedLetters,
  reveal = false,
}: Props) => {
  return (
    <div className="HangmanWord">
      {wordToGuess.split("").map((letter, index) => (
        <span className="letters-container" key={index}>
          <span
            className="letters"
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
