import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function AddRecipe() {


    return (
        <div className="addRecipeBox">
            <Form>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter a captivating title for your recipe" />
                    <Form.Text className="text-muted">
                        What's in a name?
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Recipe Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Uploading pictures currently disabled</Form.Label>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}