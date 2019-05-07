import React , { Component }from 'react';
import Table from "./Table.js";
import './App.css';

class App extends Component {
  render() {
  const characters = [
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },
  ]

  return (
    <div className="App">
    <div> Testing Travis CI</div>
      <div className="container">
        <Table characterData={characters}/>
      </div>


    </div >
  );
}
}

export default App;
