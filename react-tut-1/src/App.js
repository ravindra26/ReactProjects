import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: "legendKiller", name: "Ravindra", age: 23 },
      { id: "captionKool", name: "MS Dhoni", age: 37 },
      { id: "punter", name: "Ricky Ponting", age: 43 }
    ],
    showPersons: false
  }

  switcNameHandler = (newName) => {
    //console.log("Hello");
    //Dont do this :this.state.persons[0].name= "Ravindra Mohan";
    this.setState({
      persons: [
        { name: newName, age: 23 }
      ]
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });

  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let btnClass = '';
    let personsDiv = null;
    if (this.state.showPersons) {
      personsDiv = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi I am a React App</h1>
        <p className={assignedClasses.join(' ')}>this is really working</p>
        <button
          className={btnClass}
          onClick={this.togglePersons}>Toggle Persons!</button>
        {personsDiv}
      </div>

    );
  }
}

export default App;
