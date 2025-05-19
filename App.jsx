import React from "react"
import { languages } from "./languages"

export default function Hangman() {

    const [currentWord, setCurrentWord] = React.useState("react");

   
   const letterElements = currentWord.split("").map(function(letter, index){
    return <span key={index}>{letter.toUpperCase()}</span> 
   })

   console.log(letterElements)

    const languageElements = languages.map(function(language){
        const styles = {
            backgroundColor: language.backgroundColor,
            color: language.color
        }

        return (
            <span key={language.name} style={styles}>{language.name}</span>
        )
    });


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
        </main>
    )
}
