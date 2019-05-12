import React from "react";
{/* <Jokes question="How funny is this?" punchline="I don't know not funny at all"/>
      <Jokes  punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."/>
      <Jokes question="Did you hear about the claustrophobic astronaut?" punchline="He just needed a little space."/> */}
    // }

export default function Jokes(props) {
    let question = props.question;
    console.log(question)
    function ask() {
        if (question !== undefined) {
            return question 
            } else return  "Say something funny";
        } 

    return (
        <div>
            <p style={{display: !props.question && "none"}}>Question: {ask()}</p>
            <p style={{color: !props.question && "#888888"}}>PunchLine: {props.punchline}</p>
        </div>
    );
    }