import React, { Component } from "react";
import Person from './Person/Person';
import AuthContext from '../../context/auth-context';

class Persons extends Component {

    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    componentWillUnmount() {
        console.log('[Persons.js Component will unmount]')
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.persons != this.props.persons) {
            return true;
        }
        else {
            return false;
        }
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('[Persons.js] getSnapShotBeforeUpdate');
    // }
    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate');
    }


    render() {
        console.log('[Persons.js] rendering.....');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
            />
        })
    }
}
export default Persons;