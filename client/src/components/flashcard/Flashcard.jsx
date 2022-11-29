import React from 'react';
import { useState, useEffect, useCallback } from "react";
import "./flashcard.scss"

const Flashcard = ({frontText, backText}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleKeyDown = (event) => {
        const { key, keyCode } = event;
        if(key === 'ArrowUp' || key === 'ArrowDown' || key === 'Space'){
            //console.log('clicked: ', key)
            const timer = setTimeout(()=> {
                setIsFlipped(!isFlipped)
            }, 200);
            return ()=> clearTimeout(timer);
        }
    };

      
    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown); //Może zmienić na keyup

        // cleanup this component
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div className="flashcard__wrapper w-[500px] h-[420px] cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
            <div className={`flashcard__wrapper-inner w-full h-full text-center ${isFlipped ? "flashcard__wrapper-inner-rotate" : ""}`}>
                <div className="flashcard__front absolute w-full h-full bg-gray-100">
                    <div className="flashcard__top-panel flex w-full h-[40px]">

                    </div>
                    {frontText}
                    <div className="flashcard__bottom-panel flex w-full h-[40px]">
                        
                    </div>
                </div>
                <div className="flashcard__back absolute w-full h-full bg-gray-100">
                    {backText}
                </div>
            </div>
        </div>
    );
};

export default Flashcard;
