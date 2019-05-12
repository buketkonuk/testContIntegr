import React from "react";

export default function Jokes1() {

    const jokeList = [
        { "question": "How funny is this?", "punchline": "I don't know not funny at all" },
        { "punchline": "It’s hard to explain puns to kleptomaniacs because they always take things literally." },
        { "question": "Did you hear about the claustrophobic astronaut?", "punchline": "He just needed a little space." }
    ]
    return (
        <div>
            {jokeList.map(joke =>
                <div>
                    <p>Question: {joke.question}</p>
                    <p>Punchline: {joke.punchline}</p>
                </div>
            )}
        </div>
    )
}