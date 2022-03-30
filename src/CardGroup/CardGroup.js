import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const CardGroup = () => {
    return (
        <div>
            <h1>This is my Card</h1>
            <Button variant="primary">My Button</Button>
            <br></br>
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
            <br/>
            
        </div>
    );
};

export default CardGroup;