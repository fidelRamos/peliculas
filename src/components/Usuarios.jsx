import React from "react";
import '../styles/usuarios.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function GridComplexExample() {
  return (
    <>
    <div className="imagen-usuario">
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Nombre</Card.Title>
            <Card.Text>
                recuerde que el peso de la imagen no debe superar el 1mb de peso maximo, deben ser archivos de extencion .jpg
            </Card.Text>
            <Button variant="primary">subir imagen</Button>
        </Card.Body>

    </Card>

    </div>

    <div className="datos-usuarios"> 
    <Form >
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="email" placeholder="" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>direccion</Form.Label>
                <Form.Control placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Pelicula Favorita</Form.Label>
                <Form.Control placeholder="" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>ciudad</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Provincia</Form.Label>
                    <Form.Select defaultValue="Elegir...">
                        <option>Guayaquil</option>
                        <option>Playas</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Editar
            </Button>
        </Form>
        </div>
        
        </>
      
  );

  
}

export default GridComplexExample;
