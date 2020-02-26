import React, { useState, useEffect, Component } from 'react';
import './App.css';
import axios from 'axios';
import CardList from '../src/components/card-list';
import SearchBox from '../src/components/search-box';

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
      console.log(response.data.text);
      this.setState({ monsters: response.data });
    })
    .catch(error => {
      console.log(`no data ${error}`);
    })
  }

  handleChanges = event => {
    this.setState({
      searchField: event.target.value
    });
    console.log(event.target.value);
  }

  render() {
    const { monsters, searchField } = this.state;
      //* equvillent to :
        //* const monsters = this.state.monsters;
        //* const searchField = this .state.searchField;
  
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChanges}
        />
        <CardList 
          monstersData={ filteredMonsters }
        /> 
      </div>
    );
  }
}

export default App;