import React from 'react';
import styles from './ImageContainer.module.css';
import appStyles from '../../App.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { properties } from '../../properties';
import Button from 'react-bootstrap/Button';
import AddCircle from '@material-ui/icons/AddCircle';
import SubtractCircle from '@material-ui/icons/RemoveCircle';
import GetApp from '@material-ui/icons/GetApp';
import FormControl from 'react-bootstrap/FormControl';
import { triggerBase64Download } from 'react-base64-downloader';

const doubleImageContainer = (props) => {
    return (
        <div>
            <Row>
                <Col xs={12}>
                    <Row>
                        <Col xs={6} className={appStyles["text-center"]}>
                            <h4><b>{properties.originalImage}</b></h4>
                        </Col>
                        <Col xs={6} className={appStyles["text-center"]}>
                            <h4><b>{properties.conpressedImage}</b></h4>
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
                            <Row className={styles.paddingBottom1p}>
                                <Col xs={4} className={appStyles["text-center"]}><Button variant="secondary" onClick={props.incComp}><AddCircle /></Button></Col>
                                <Col xs={4} className={appStyles["text-center"]}><FormControl readOnly={true} className={appStyles["text-center"]} value={props.value}></FormControl></Col>
                                <Col xs={4} className={appStyles["text-center"]}><Button variant="secondary" onClick={props.decComp}><SubtractCircle /></Button></Col>
                            </Row>
                            <Row>
                                <Col xs={4}></Col>
                                <Col xs={4} className={appStyles["text-center"]}>
                                    <Button variant="danger" onClick={props.click}>{properties.compress}</Button>
                                </Col>
                                <Col xs={4}></Col>
                            </Row>
                        </Col>
                        <Col xs={6} className={appStyles["text-center"]}>
                            <Row>
                                <Col xs={4}></Col>
                                <Col xs={4} className={appStyles["text-center"]}>
                                    <Button variant="success" onClick={() => triggerBase64Download(props.compressedImage, 'compressedImage_'+new Date().valueOf())}><GetApp></GetApp>{properties.download}</Button>
                                </Col>
                                <Col xs={4}></Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default doubleImageContainer;