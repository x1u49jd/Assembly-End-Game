import React from "react"
import { languages } from "./languages"
import { getFarewellText, getRandomWord  } from "./utils"

export default function Hangman() {
  // State values
  const [currentWord, setCurrentWord] = React.useState(function(){return getRandomWord()});
  const [guessedLetters, setGuessedLetters] = React.useState([]);
    
  // Derived values
  const wrongGuessCount = guessedLetters.filter(function(letter){return !currentWord.includes(letter)}).length;
  const isGameWon = currentWord.split("").every(function(letter){return guessedLetters.includes(letter)});
  const isGameLost = wrongGuessCount >= languages.length - 1 ? true : false;
  const isGameOver = isGameWon || isGameLost

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)
  console.log(isLastGuessIncorrect)

  // Static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  
  function addGuessedLetter(letter) {
    setGuessedLetters(function(prev) {
      return prev.includes(letter) ? prev : [...prev, letter]
    });
    console.log(guessedLetters);
  }
  
  // Displays already guessed letters of the word; blanks out the rest, reveals all letters if game is lost
  const letterElements = currentWord.split("").map(function(letter, index) {
    return <span key={index}>{guessedLetters.includes(letter) ? letter.toUpperCase() : isGameOver ? letter.toUpperCase() : ""}</span> 
  })

  // Displays the language list
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
  
  // Displays a keyboard
  const keyboardElements = alphabet.split("").map(function(letter) {
    
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)
    const isWrong = isGuessed && !currentWord.includes(letter)
    
    return ( 
    <button 
    className={isCorrect ? "correct" : isWrong ? "wrong" : ""}
    disabled={isGameOver}
    onClick={function(){addGuessedLetter(letter)}}
    key={letter}
    >
    {letter.toUpperCase()}
    </button> )
  })

  function startNewGame() {
    setCurrentWord(getRandomWord())
    setGuessedLetters([])
  }

  return (
  <main>
      <header>
          <h1>Assembly: Endgame</h1>
          <p>Guess the word within 8 attempts to keep the 
          programming world safe from Assembly!</p>
      </header>

      {/* Sets the game status (won, lost, or in progress) and applies the corresponding CSS style */}
      
      <section className={`status ${isGameWon ? "won": isGameLost ? "lost": isLastGuessIncorrect ? "farewell": ""}`}>
            {isGameWon ? (
              <>
                <h3>You Win!</h3>
                <p>Well done! 🎉</p>
              </>
            ) : isGameLost ? (
              <>
                <h3>Game Over!</h3>
                <p>You lose! Better start learning Assembly 😭</p>
              </>
            ) : isLastGuessIncorrect ? (
              <>
                {getFarewellText(languages[wrongGuessCount - 1].name)}
              </>
            ): (
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
      {isGameOver && <button className="newGame" onClick={startNewGame}>New Game</button>}
  </main>
  )
}
