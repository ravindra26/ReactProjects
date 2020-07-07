import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';
import authContext from '../context/auth-context';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id: "legendKiller", name: "Ravindra", age: 23 },
        { id: "captionKool", name: "MS Dhoni", age: 37 },
        { id: "punter", name: "Ricky Ponting", age: 43 }
      ],
      showPersons: false,
      authenticated: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  componentDidMount() {
    console.log('[App.js] component mounted');
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

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log('[App.js] render');
    let personsDiv = null;
    if (this.state.showPersons) {
      personsDiv = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }
    return (
      <Aux>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {
            <Cockpit
              showPerson={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersons}
              login={this.loginHandler}
            />}
          {personsDiv}
        </AuthContext.Provider>
      </Aux>);

  }
}

export default withClass(App, classes.App);
