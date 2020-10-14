import React from 'react';
import styles from './ImageContainer.module.css';
import appStyles from '../../App.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { properties } from '../../properties';
import classNames from 'classnames';
import Button from 'react-bootstrap/Button';
import AddCircle from '@material-ui/icons/AddCircle';
import SubtractCircle from '@material-ui/icons/RemoveCircle';
import FormControl from 'react-bootstrap/FormControl';

const imageContainer = (props) => {
    return (
        <div>
            <Row>
                <Col xs={2}></Col>
                <Col xs={8} className={appStyles["text-center"]}><h4><b>{properties.originalImage}</b></h4></Col>
                <Col xs={2}></Col>
            </Row>
            <Row className={styles.paddingBottom1p}>
                <Col xs={2}></Col>
                <Col xs={8} className={classNames(styles["width-100p-height-450px"], styles.border)}><img src={props.image}></img></Col>
                <Col xs={2}></Col>
            </Row>
            <Row className={styles.paddingBottom1p}>
                <Col xs={4}></Col>
                <Col xs={4}>
                    <Row>
                        <Col xs={4} className={appStyles["text-center"]}><Button variant="secondary"><AddCircle /></Button></Col>
                        <Col xs={4} className={appStyles["text-center"]}><FormControl readOnly={true}></FormControl></Col>
                        <Col xs={4} className={appStyles["text-center"]}><Button variant="secondary"><SubtractCircle /></Button></Col>
                    </Row>
                </Col>
                <Col xs={4}></Col>
            </Row>
            <Row>
                <Col xs={4}></Col>
                <Col xs={4} className={appStyles["text-center"]}>
                    <Button variant="danger" onClick={props.click}>{properties.compress}</Button>
                </Col>
                <Col xs={4}></Col>
            </Row>
        </div>
    );
}

export default imageContainer;