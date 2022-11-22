import { useState } from "react";
import "./flashcard.scss"

const Flashcard = ({frontText, backText}) => {
      const [isFlipped, setIsFlipped] = useState(false);

      return (
            <div className="flashcard__wrapper w-[500px] h-[420px] cursor-pointer bg-gray-100" onClick={setIsFlipped(!isFlipped)}>
                  <div className="flashcard__front">{frontText}</div>
                  <div className="flashcard__back">{backText}</div>
            </div>
      );
};

export default Flashcard;
