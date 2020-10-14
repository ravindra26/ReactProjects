import React from 'react';
import styles from './FileInput.module.css';
import appStyles from '../../App.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { properties } from '../../properties';
import classNames from 'classnames';

const fileInput = (props) => {
    return (
        <div>
            <Row>
                <Col xs={3}></Col>
                <Col xs={6} className={classNames(appStyles["text-center"], appStyles["padding-1p"])}><input onChange={props.fileChange} type="file" accept=".jpeg,.jpg,.png"></input></Col>
                <Col xs={3}></Col>
            </Row>
            <Row>
                <h6>{properties.or}</h6>
            </Row>
           
        </div>
    );
}

export default fileInput;