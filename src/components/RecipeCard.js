import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function RecipeCard(props) {

    return (
        <Card style={{ minwidth: '18rem' }}>
            <Card.Img variant="top" src={props.image ? `/images/${props.image}` : `/images/noimagefound.png`} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Link to={`/recipe/${props.id}`}>
                    <Button variant="primary">Info</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}