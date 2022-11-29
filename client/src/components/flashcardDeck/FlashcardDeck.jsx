import { useState, useEffect, useCallback } from "react";
import Flashcard from '../flashcard/Flashcard'

const FlashcardDeck = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleKeyDown = (event) => {
        const { key, keyCode } = event;
        if(key === 'ArrowLeft' || key === 'ArrowRight'){
            //console.log('clicked: ', key)
            const timer = setTimeout(()=> {
                setIsFlipped(!isFlipped)
            }, 200);
            return ()=> clearTimeout(timer);
        }
    };
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown); //Może zmienić na keyup

        // cleanup this component
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return(
        <div className="flashcard_deck__wrapper bg-gray-900 h-screen w-screen flex justify-center items-center">
            <Flashcard frontText="window" backText="okno"/>
        </div>
    );
};
      
export default FlashcardDeck;