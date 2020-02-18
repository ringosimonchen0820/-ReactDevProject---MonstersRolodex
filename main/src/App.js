import React, { useState, useEffect, Component } from 'react';
import './App.css';
import axios from 'axios';
import CardList from '../src/components/card-list';

// function App() {
//   //const [monstersData, setMonstersData] = useState([]);
  
//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//       setMonstersData(response.data);
//       console.log("monster's email:", monstersData);
//     })
//     .catch(error => {
//       console.log('ehh error', error)
//     })
//   }, [])

//   return (
//     <div className="App">
//       <header className="App-header">
//         <CardList monsters={monstersData}/>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'asc1'
        },
        {
          name: 'Drakula',
          id: 'asr3'
        },
        {
          name: 'Zombie',
          id: 'asw7'
        }
      ]
    };

    
  }
  
  
  render() {
    return (
      <div className="App">
        <CardList 
          monstersData={ this.state.monsters }
        /> 
      </div>
    )
  }
}
 