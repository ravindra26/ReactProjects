import React, { useEffect, useRef ,useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';
const cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log("[Cockpit.js] useEffect");
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cockpit clean up work');
        };
    }, []);


    const assignedClasses = [];
    let btnClass = '';
    console.log(props.showPerson);
    if (props.showPerson) {
        btnClass = classes.Red;
    }
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }
    return (

        <div className={classes.Cockpit}>
            <h1>Hi I am a React App</h1>
            <p className={assignedClasses.join(' ')}>this is really working</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons!</button>
                <button onClick={authContext.login}>Login</button>
        </div>
    );
};

export default React.memo(cockpit);