import "./Keyboard.css";
import { KEYS } from "../keys";

type KeyboardProps = {
  addGuessedLetter: (key: string) => void;
  activeLetter: string[];
  inactiveLetter: string[];
  disabled: boolean;
};

const Keyboard = ({
  addGuessedLetter,
  activeLetter,
  inactiveLetter,
  disabled,
}: KeyboardProps) => {
  return (
    <div className="Keyboard">
      {KEYS.map((key) => {
        const isActive = activeLetter.includes(key);
        const isInactive = inactiveLetter.includes(key);
        return (
          <button
            key={key}
            className={`btns ${isActive && "active"} ${
              isInactive && "inactive"
            } `}
            onClick={() => addGuessedLetter(key)}
            disabled={isActive || isInactive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
