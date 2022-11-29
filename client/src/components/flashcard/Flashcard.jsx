import { useState, useEffect } from "react";
import "./flashcard.scss"
import pencilIcon from "../../assets/icons/pencil-solid.svg"
import starIcon from "../../assets/icons/star-solid.svg"
import volumeIcon from "../../assets/icons/volume.svg"

const Flashcard = ({frontText, backText}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleKeyDownFlashcard = (event) => {
        const { key, keyCode } = event;
        if(key === 'ArrowUp' || key === 'ArrowDown' || key === 'Space'){
            //console.log('clicked: ', key)
            const timer = setTimeout(()=> {
                setIsFlipped(!isFlipped)
            }, 200);
            return ()=> clearTimeout(timer);
        }
    };

      
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDownFlashcard);

        // cleanup this component
        return () => {
            window.removeEventListener('keydown', handleKeyDownFlashcard);
        };
    }, [handleKeyDownFlashcard]);

    return (
        <div className="flashcard__wrapper w-[800px] h-[560px] cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
            <div className={`flashcard__wrapper-inner w-full h-full text-center ${isFlipped ? "flashcard__wrapper-inner-rotate" : ""}`}>
                <div className="flashcard__front absolute w-full h-full bg-gray-100 rounded-3xl">
                    <div className="flashcard__top-panel flex justify-between w-full h-[64px] py-4 px-8">
                        <div className="flashcard__top-panel-left">
                            <div className="flashcard__top-panel-icon h-6 mr-4 cursor-pointer" onClick={() => {console.log("Edit")}}>
                                <img src={volumeIcon} alt="volume" className="h-8"/>
                            </div>
                        </div>
                        <div className="flashcard__top-panel-right flex flex-column">
                            <div className="flashcard__top-panel-icon h-6 cursor-pointer" onClick={() => {console.log("Edit")}}>
                                <img src={pencilIcon} alt="edit" className="h-6"/>
                            </div>
                            <div className="flashcard__top-panel-icon ml-4 h-6 cursor-pointer" onClick={() => {console.log("Star")}}>
                                <img src={starIcon} alt="star" className="h-6"/>
                            </div>
                        </div>
                    </div>
                    <h1 className="flashcard__text">{frontText}</h1>
                    <div className="flashcard__bottom-panel flex w-full h-[48px]">
                        
                    </div>
                </div>
                <div className="flashcard__back absolute w-full h-full bg-gray-100 rounded-3xl">
                    {backText}
                </div>
            </div>
        </div>
    );
};

export default Flashcard;
