import React from 'react';
import styles from './Header.module.css';
import appStyles from '../../App.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { properties } from '../../properties';
import classNames from 'classnames';

const header = (props) => {
    return (
        <Row className={appStyles["padding-1p"]}>
            <Col xs={4}></Col>
            <Col xs={4} className={classNames(styles.headerBox, appStyles["text-center"])}><h1>{properties.imageCompression}</h1>
            </Col>
            <Col xs={4}></Col>
        </Row>
    );
}

export default header;
