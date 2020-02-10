import React, { useState, useEffect, Component } from 'react';
import './App.css';
import axios from 'axios';

import CardList from '../src/components/card-list';

// function App() {
//   const [monstersData, setMonstersData] = useState([]);
  
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
      name: 'Simon'
    };
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <CardList monsters={monstersData}/> */}
          <p>Hello, {this.state.name}</p>
          <button onClick={() => this.setState({name: 'Shu Fu'})}>Change Name</button>
        </header>
      </div>
    )
  }
}

export default App;
