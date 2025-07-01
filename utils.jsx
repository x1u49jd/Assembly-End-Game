import { words } from "./words"

export function getRandomWord(){

    const randomIndex = Math.floor(Math.random( ) * words.length)
    return words[randomIndex]
}

export function getFarewellText(language) {
    const headings = [
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P., ${language}`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}!`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `The end of ${language} as we know it`,
        `Off into the sunset, ${language}`,
        `${language}, it's been real`,
        `${language}, your watch has ended`,
        `${language} has left the building`
    ];
    
    const bodies = [
        `One less language in the race.`,
        `Another one bites the dust.`,
        `So long and thanks for all the bugs.`,
        `It served us well... mostly.`,
        `We hardly knew ye.`,
        `The stack just got smaller.`,
        `Time to uninstall ${language}.`
    ];

    const heading = headings[Math.floor(Math.random() * headings.length)];
    const body = bodies[Math.floor(Math.random() * bodies.length)];


    return (
        <>
            <h3>{heading}</h3>
            <p>{body}</p>
        </>
    );
}