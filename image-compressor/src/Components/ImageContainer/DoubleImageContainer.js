import React from 'react';
import styles from './ImageContainer.module.css';
import appStyles from '../../App.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { properties } from '../../properties';
import classNames from 'classnames';

const doubleImageContainer = (props) => {
    return (
        <div>
            <Row>
                <Col xs={12}>
                    <Row>
                        <Col xs={6}>
                            <h1>{properties.conpressedImage}</h1>
                        </Col>
                        <Col xs={6}>
                            <h1>{properties.originalImage}</h1>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={styles.padding1p}> 
                <Col xs={12}>
                    <Row>
                        <Col xs={6}>
                            <img src={props.originalImage} className={styles["width-100p-height-300px"]} />
                        </Col>
                        <Col xs={6}>
                            <img src={props.compressedImage} className={styles["width-100p-height-300px"]} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Row>
                        <Col xs={6} className={appStyles["text-center"]}>

                        </Col>
                        <Col xs={6} className={appStyles["text-center"]}>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default doubleImageContainer;