import React, { Component } from 'react';

import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';
import './style.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      displayMonsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users, displayMonsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });
    this.setState({ displayMonsters: filteredMonsters });
  };

  render() {
    const { onSearchChange } = this;
    console.log(this.state);
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>

        <h3 className="app-author">
          written by <a href="https://github.com/rmne">@Romance</a>
        </h3>

        <SearchBox
          className="monsters-search-box"
          placeholder="search monsters"
          onChangeHandler={this.onSearchChange}
        />
        <CardList monsters={this.state.displayMonsters} />
      </div>
    );
  }
}

export default App;
