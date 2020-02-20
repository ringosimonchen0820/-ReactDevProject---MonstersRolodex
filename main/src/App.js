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
      monsters: [],
      searchField: ''
    }; 
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      console.log(response.data);
      this.setState({ monsters: response.data });
    })
    .catch(error => {
      console.log(`no data ${error}`);
    })
  }
  
  render() {
    return (
      <div className="App">
        <input 
          type="search" 
          placeholder="Search Monsters" 
          onChange={ e => this.setState({ searchField: e.target.value }) }
        />
        <CardList 
          monstersData={ this.state.monsters }
        /> 
      </div>
    )
  }
}

export default App;