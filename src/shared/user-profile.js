import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";

const UserProfile = (props) => {
    return (
        <div className='user-profile'>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={props.avatar} alt={`${props.name}'s avatar`} title={`${props.name}'s avatar`}
                               width={200} rounded />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={props.avatar} alt={`${props.name}'s avatar`} title={`${props.name}'s avatar`}
                               width={200} roundedCircle />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={props.avatar} alt={`${props.name}'s avatar`} title={`${props.name}'s avatar`}
                               width={200} thumbnail />
                    </Col>
                </Row>
            </Container>
            <h2>{props.name}</h2>
            <p>{props.bio}</p>
        </div>
    );
};

export default UserProfile;