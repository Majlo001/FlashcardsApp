import Flashcard from '../flashcard/Flashcard'

const FlashcardDeck = () => {
      return(
            <div className="flashcard_deck__wrapper bg-gray-900 h-screen w-screen flex justify-center items-center">
                  <Flashcard frontText="window" backText="okno"/>
            </div>
      );
};
      
export default FlashcardDeck;