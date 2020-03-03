/*
 * @Descripttion: 
 * @version: 
 * @Author: shentong
 * @Date: 2020-02-27 18:57:03
 * @LastEditors: shentong
 * @LastEditTime: 2020-03-03 17:37:28
 */
import React from 'react';
import Header from './components/Header/Header'
import Table from './components/Table/Table'
import Form from './components/Form/Form'
import './App.css';

class App extends React.Component {
  state = {
    characters: [
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
      }
    ]
  }
  removeCharacter = index => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return index !== i
      })
    })
  }
  handleSubmit = character => {
    this.setState({
        characters: [...this.state.characters, character]
    })
  }
  render() {
    const {characters} =  this.state
    return (
      <div className="App container">
        <Header/>
        <Table characterData = {characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App;
