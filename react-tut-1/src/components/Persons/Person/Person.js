import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    static contextType = AuthContext;

    render() {
        console.log('[Person.js] rendering....');
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated!</p>:<p>Please Login</p>}
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} </p>
                <p>{this.props.children}</p>
                <input 
                type="text" onChange={this.props.changed} 
                value={this.props.name}
                //ref={(inputEl)=>{this.inputElement = inputEl}}
                ref = {this.inputElementRef}
                >

                </input>
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);