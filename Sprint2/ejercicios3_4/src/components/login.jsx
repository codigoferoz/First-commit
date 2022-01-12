import React from 'react';

import { Form, Button, Stack, Alert, Container, Row, Col, Image } from 'react-bootstrap';

const LoginPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm={3} style={{border:"none"}}>
                    
                        <Form style={{width:"80%", marginLeft:"10%", marginTop:"50%"}}>
                        <h5> Open Bootcamp <b style={{color:"#32D4A4"}}> | Alumnos </b></h5>
                            <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginTop:"10%"}}>
                                <Form.Label style={{fontSize:"90%", fontWeight:"bold"}}>Email</Form.Label>
                                <Form.Control type="email" placeholder="Introduce tu correo" style={{fontSize:"small"}} />                    
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginTop:"10%"}}>
                                <Form.Label style={{fontSize:"90%", fontWeight:"bold"}}>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Introduce tu contraseña" style={{fontSize:"small"}}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{marginTop:"10%"}}>
                                <Stack direction="horizontal" gap={3}>
                                    <Form.Check type="checkbox" label="Recuérdame" style={{fontSize:"80%"}} />
                                    <div className='ms-auto' style={{fontSize:"80%", color:"#32D4A4"}}>He olvidado la contraseña</div>
                                </Stack>
                            </Form.Group>
                                <div className="d-grid gap-2">
                                <Button style={{backgroundColor:"#32D4A4", border:"none"}} size="sm" type="submit">
                                    Iniciar Sesión
                                </Button>                    
                                </div>                
                            </Form>
                            <Alert variant="Light" style={{width:"80%", marginLeft:"7%", marginTop:"30%",color:"#7d8582",fontSize:"80%"}}>
                                <p className='m-0'>Copyright © 2021 Open Bootcamp SL, Imagina Group</p>
                                <p className='m-0'>Todos los derechos reservados.</p>
                                <p className='m-0'>Política de Privacidad.</p>
                                </Alert>                    
                </Col>
                <Col sm={9} id='colR' style={{border:"none", padding:"0rem"}}>
                
            <Image fluid src="./img/bg_login.jpg" style={{border:"none", padding:"0rem", height: "100vh"}}></Image>
        
                </Col>
            </Row>            
</Container>
    )
}

export default LoginPage;