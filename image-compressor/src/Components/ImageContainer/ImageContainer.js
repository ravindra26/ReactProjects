import React from 'react';
import styles from './ImageContainer.module.css';
import appStyles from '../../App.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { properties } from '../../properties';
import classNames from 'classnames';

const imageContainer = (props) => {
    return (
        <div>
            <Row>
                <Col xs={2}></Col>
                <Col xs={8} className={styles["width-100p-height-450px"]}><img src={props.image}></img></Col>
                <Col xs={2}></Col>
            </Row>
        </div>
    );
}

export default imageContainer;