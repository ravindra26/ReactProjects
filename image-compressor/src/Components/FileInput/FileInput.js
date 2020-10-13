import React from 'react';
import styles from './FileInput.module.css';
import appStyles from '../../App.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { properties } from '../../properties';
import classNames from 'classnames';

const fileInput = () => {
    const dragOver = (e) => {
        e.preventDefault();
    }

    const dragEnter = (e) => {
        e.preventDefault();
    }

    const dragLeave = (e) => {
        e.preventDefault();
    }

    const drop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        console.log(files);
    }


    return (
        <div>
            <Row>
                <Col xs={3}></Col>
                <Col xs={6} className={classNames(appStyles["text-center"], appStyles["padding-1p"])}><input type="file" accept=".jpeg,.jpg,.png"></input></Col>
                <Col xs={3}></Col>
            </Row>
            <Row>
                <h6>{properties.or}</h6>
            </Row>
            <Row>
                <Col xs={12}>
                    <Row>
                        <Col xs={3}></Col>
                        <Col xs={6} className={styles["drag-container"]}
                            onDragOver={dragOver}
                            onDragEnter={dragEnter}
                            onDragLeave={dragLeave}
                            onDrop={drop}
                        >
                            <Row>
                                <h4>{properties.dragnDropImagesHere}</h4>
                            </Row>
                        </Col>
                        <Col xs={3}></Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default fileInput;