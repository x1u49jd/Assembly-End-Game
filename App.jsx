import React from "react"
import { languages } from "./languages"

export default function Hangman() {
    // State values
    const [currentWord, setCurrentWord] = React.useState("react");
    const [guessedLetters, setGuessedLetters] = React.useState([]);
    
    // Derived values
    const wrongGuessCount = guessedLetters.filter(function(letter){return !currentWord.includes(letter)}).length;
    console.log("Wrong: " + wrongGuessCount)
  

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
            <section className="status">
                <h3>You win!</h3>
                <p>Well done! 🎉</p>
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
            <button className="newGame">New Game</button>
        </main>
    )
}
