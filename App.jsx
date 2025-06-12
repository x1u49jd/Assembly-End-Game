import React from "react"
import { languages } from "./languages"
import { getFarewellText } from "./utils"

export default function Hangman() {
    // State values
    const [currentWord, setCurrentWord] = React.useState("react");
    const [guessedLetters, setGuessedLetters] = React.useState([]);
    
    // Derived values
    const wrongGuessCount = guessedLetters.filter(function(letter){return !currentWord.includes(letter)}).length;
    const isGameWon = currentWord.split("").every(function(letter){return guessedLetters.includes(letter)})
    const isGameLost = wrongGuessCount >= languages.length - 1 ? true : false;
    const isGameOver = isGameWon || isGameLost

    // Static values
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

   function addGuessedLetter(letter) {
    setGuessedLetters(function(prev) {
        return prev.includes(letter) ? prev : [...prev, letter]
    });
    console.log(guessedLetters);
}


   const letterElements = currentWord.split("").map(function(letter, index) {
    return <span key={index}>{guessedLetters.includes(letter) ? letter.toUpperCase() : ""}</span> 
   })

    const languageElements = languages.map(function(language, index){

        const isLanguageLost = index < wrongGuessCount;

        const styles = {
            backgroundColor: language.backgroundColor,
            color: language.color
        }

        return (
            <span 
            className={isLanguageLost ? "lost" : ""}
            key={language.name} style={styles}>{language.name}
            </span>
        )
    });

    const keyboardElements = alphabet.split("").map(function(letter){

        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)

        return ( 
            <button 
            className={isCorrect ? "correct" : isWrong ? "wrong" : ""}
            onClick={function(){addGuessedLetter(letter)}}
            key={letter}
            >
            {letter.toUpperCase()}
            </button> )
    })


    return (
        <main>
           <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the 
                programming world safe from Assembly!</p>
            </header>
            <section className={!isGameOver ? "status" : isGameWon ? "status won" : isGameLost ? "status lost" : ""}>
                 {!isGameOver ? (
                    <>
                      <h3>Keep going!</h3>
                      <p>The game is still ongoing. Good luck!</p>
                    </>
                  ) : isGameWon ? (
                    <>
                      <h3>You Win!</h3>
                      <p>Well done! 🎉</p>
                    </>
                  ) : isGameLost ? (
                    <>
                      <h3>Game Over!</h3>
                      <p>You lose! Better start learning Assembly 😭</p>
                    </>
                  ) : (
                    null
                  )}
            </section>

            <section className="languages">
                {languageElements}
            </section>
            <section className="word">
                {letterElements}
            </section>
            <section className="keyboard">
                {keyboardElements}
            </section>
            {isGameOver && <button className="newGame">New Game</button>}
        </main>
    )
}
