import React from "react"
import { languages } from "./languages"

export default function Hangman() {

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
            <div className="languages">
                {languageElements}
            </div>
        </main>
    )
}
