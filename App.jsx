import React from "react"

export default function Hangman() {
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
        </main>
    )
}
