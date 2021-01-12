import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function RecipeCard(props) {

    return (
        <Card style={{ minwidth: '18rem' }}>
            <Card.Img variant="top" src={props.image ? props.image : `noimagefound.png`} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button variant="primary">Info</Button>
            </Card.Body>
        </Card>
    );
}