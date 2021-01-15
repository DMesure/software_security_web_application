import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as recipeData from "../api/api_recipe";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";


export default function AddRecipe() {
    const [onSubmit, setOnSubmit] = useState(false);
    const [formData, setFormData] = useState({ name: "", description: "" });
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();
    const history = useHistory();


    const handleSubmit = (prevent) => {
        prevent.preventDefault();
        getAccessTokenSilently().then(accessToken => {
            recipeData.createRecipe(accessToken, formData).then(res => history.push(res)).catch(err => alert("Create recipe failed"));
        }).catch((err) => console.log(err));
        setOnSubmit(true);
    }

    return (
        isAuthenticated ?
            <div className="addRecipeBox" onSubmit={handleSubmit}>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter a captivating title for your recipe"
                            value={formData.name}
                            onChange={(data) => setFormData({ ...formData, name: data.target.value })} />
                        <Form.Text className="text-muted">
                            What's in a name?
                </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Recipe Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={formData.description}
                            onChange={(data) => setFormData({ ...formData, description: data.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Uploading pictures currently disabled</Form.Label>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </div>
            :
            <div>
                <h2>Please log in first</h2>
            </div>
    );
}