import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import appStyles from '../../App.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { properties } from '../../properties';
import classNames from 'classnames';

const Header = (props) => {

    return (
        <div>
            <Row className={appStyles["padding-1p"]}>
                <Col xs={4}></Col>
                <Col xs={4} className={classNames(styles.headerBox, appStyles["text-center"])}><h1>{properties.imageCompression}</h1>
                </Col>
                <Col xs={4}></Col>
            </Row>
            <Row>
                <ProgressBar animated variant="success" now={100} className={props.showProgress ? appStyles["width-100p"] : appStyles["width-0p"]} />
            </Row>
        </div>
    );
}
export default Header;
