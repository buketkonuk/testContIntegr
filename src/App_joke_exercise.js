import React, { Component } from 'react';
// import Checkboxes from "./Chekcboxes.js";
import Header from "./components/Header.js";
import TimeofDay from "./TimeofDay";
import './App.css';
// import ContactCard from './ContactCard.js';
// import Jokes from "./Jokes";
// import Jokes1 from "./Jokes1"
import jokesData from "./JokesData";
import Jokes from './Jokes.js';

class App extends Component {
  render() {
    const jokeCompo = jokesData.map(joke => <Jokes question={joke.question} punchline={joke.punchLine}/>)

    return (
      <div className="App">
        <Header />
        <TimeofDay />
        {jokeCompo}
      </div >
    );
  }
}

export default App;
