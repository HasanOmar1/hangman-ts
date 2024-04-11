import "./HangmanDrawing.css";

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HEAD = <div className="head"></div>;
const BODY = <div className="body"></div>;
const RIGHT_ARM = <div className="right-arm"></div>;
const LEFT_ARM = <div className="left-arm"></div>;
const RIGHT_LEG = <div className="right-leg"></div>;
const LEFT_LEG = <div className="left-leg"></div>;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className="HangmanDrawing">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="top-bar"></div>
      <div className="small-bar"></div>
      <div className="long-bar"></div>
      <div className="bottom-bar"></div>
    </div>
  );
};

export default HangmanDrawing;
