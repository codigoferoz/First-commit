import React from "react";
import { Navbar, Image, Container, NavDropdown, Nav, Row, Col, Table, Form, FormControl, Button, FloatingLabel, Badge, FormSelect } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import { WithContext as ReactTags } from "react-tag-input";

import { SKILLS } from './skills';
import './style.css';


//Sort section

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig,] = React.useState(config);
  
    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);
  
    const requestSort = (key) => {
      let direction = "ascending";
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === "ascending"
      ) {
        direction = "descending";
      }
      setSortConfig({ key, direction });
    };
  
    return { items: sortedItems, requestSort, sortConfig };
  };


//Tags section

const suggestions = SKILLS.map(skill => {
    return {
      id: skill,
      text: skill
    };
  });
  
  const KeyCodes = {
    comma: 188,
    enter: 13
  };
  
  const delimiters = [KeyCodes.comma, KeyCodes.enter];
  
  const TablePage = (props) => {
    const [tags, setTags] = React.useState([
      { id: 'HTML&CSS', text: 'HTML&CSS' },
      { id: 'REACT', text: 'REACT' },
      { id: 'ANGULAR', text: 'ANGULAR' }
    ]);
  
    const handleDelete = i => {
      setTags(tags.filter((tag, index) => index !== i));
    };
  
    const handleAddition = tag => {
      setTags([...tags, tag]);
    };
  
    const handleDrag = (tag, currPos, newPos) => {
      const newTags = tags.slice();
  
      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);
  
      // re-render
      setTags(newTags);
    };
  
    const handleTagClick = index => {
      console.log('The tag at index ' + index + ' was clicked');
    };

    // sort table
    const { items, requestSort, sortConfig, } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };


  // Table section
    
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    Open Bootcamp <b style={{color:"#32D4A4"}}> | Alumnos </b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                
                <Navbar.Collapse id="navbarScroll">
                
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '60px', paddingLeft:"80px" }}
                        navbarScroll
                    >   
                    </Nav>
                    <Image className="roundedCircle" src="./img/img_avatar.png" style={{width:"3vh" ,height: "3vh", borderRadius:"50%"}}></Image> 
                    <NavDropdown title="UserName" style={{fontSize:"small", color:"gray", paddingLeft:"20px"}}>
                        <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
                        
                        </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Container fluid>
            <Row>
                <Col sm={9} style={{paddingLeft:"80px"}}>
                    <Row className="align-items-center">
                        <Col md={1}>
                        
                        <h6 style={{textAlign:"right", fontSize:"medium", marginBottom:"0px"}}>Alumnos</h6>
                        
                        </Col>
                        <Col md={6}>
                            
                            <Form className="d-flex" style={{fontFamily:"Arial,FontAwesome"}}>
                                <FormControl plaintext
                                type="search"
                                placeholder="&#xF002; Busca por nombre, email o palabra clave"                    
                                className="me-2"
                                aria-label="Search"
                                vertical-align="top"
                                font-size="small" 
                                color="gray"                                                    
                                />  
                                
                            </Form>
                            
                        </Col>
                       
                        <Col><h6 style={{textAlign:"right", fontSize:"small", marginBottom:"0px"}}>+ Añadir Alumnos</h6></Col>
                       
                    </Row>
                    <Table borderless hover size="sm">                    
                        <thead style={{border:"none", color:"#898c8b",fontFamily:"Arial,FontAwesome", textAlign:"left", fontSize:"small"}}>
                            <tr >
                            <th>
                                <button
                                type="button"
                                onClick={() => requestSort("name")}
                                className={getClassNamesFor("name")}
                                style={{border:"none", color:"#898c8b",fontFamily:"Arial,FontAwesome", textAlign:"left", fontSize:"small"}}
                                >
                                Nombre &#xf175;&#xf176;
                                </button>
                            </th>
                            <th>
                                <button
                                type="button"
                                onClick={() => requestSort("city")}
                                className={getClassNamesFor("city")}
                                style={{border:"none", color:"#898c8b",fontFamily:"Arial,FontAwesome", textAlign:"left", fontSize:"small"}}
                                >
                                Ciudad &#xf175;&#xf176;
                                </button>
                            </th>
                            <th>
                                <button
                                type="button"
                                onClick={() => requestSort("country")}
                                className={getClassNamesFor("country")}
                                style={{border:"none", color:"#898c8b",fontFamily:"Arial,FontAwesome", textAlign:"left", fontSize:"small"}}
                                >
                                País &#xf175;&#xf176;
                                </button>
                            </th>
                            <th>
                                <button
                                type="button"
                                onClick={() => requestSort("phone")}
                                className={getClassNamesFor("phone")}
                                style={{border:"none", color:"#898c8b",fontFamily:"Arial,FontAwesome", textAlign:"left", fontSize:"small"}}
                                >
                                Teléfono &#xf175;&#xf176;
                                </button>
                            </th>  
                                <th>
                                <button
                                type="button"
                                onClick={() => requestSort("email")}
                                className={getClassNamesFor("email")}
                                style={{border:"none", color:"#898c8b",fontFamily:"Arial,FontAwesome", textAlign:"left", fontSize:"small"}}
                                >
                                Correo Electrónico &#xf175;&#xf176;
                                </button>
                            </th>
                                <th>
                                <button
                                type="button"
                                onClick={() => requestSort("tags")}
                                className={getClassNamesFor("tags")}
                                style={{border:"none", color:"#898c8b",fontFamily:"Arial,FontAwesome", textAlign:"left", fontSize:"small"}}
                                >
                                Etiquetas &#xf175;&#xf176;
                                </button>
                            </th>                            
                            </tr>
                        </thead>

                        <tbody style={{border:"none",fontFamily:"Arial,FontAwesome", textAlign:"left", fontSize:"small"}}>
                            {items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.city}</td>
                                <td>{item.country}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.tags}</td>
                            </tr>
                            ))}
                        </tbody> 

                    </Table>

                </Col>
                <Col sm={3} style={{paddingRight:"100px"}}>
                    <Form>
                        <Row className="g-2">

                            <Col md style={{marginTop:"30px"}}>
                                <FloatingLabel>
                                <h6> Filtros de Búsqueda </h6>
                                </FloatingLabel>
                            </Col>

                            <Col md style={{marginTop:"30px"}}>
                                <FloatingLabel>
                                <h6 style={{color:"#32D4A4",fontFamily:"Arial,FontAwesome", textAlign:"center"}}> &#xf014; </h6>
                                </FloatingLabel>
                            </Col>

                        </Row>
                        
                        {/* inicio tags*/}
                        <Form.Group style={{textAlign:"left"}}>
                        <h6 style={{textAlign:"left", fontSize:"small", marginBottom:"10px", marginTop:"20px"}}>Etiquetas</h6>
                        <div className="app">
                        
                        <div>
                            <FormSelect size="sm" style={{fontSize:"small", color:"gray"}}>
                            <option>Escribe para buscar</option>
                            <ReactTags
                            tags={tags}
                            suggestions={suggestions}
                            delimiters={delimiters}
                            handleDelete={handleDelete}
                            handleAddition={handleAddition}
                            handleDrag={handleDrag}
                            handleTagClick={handleTagClick}
                            inputFieldPosition="top"
                            autocomplete
                            />
                            </FormSelect>
                        </div>
                        </div>

                        </Form.Group>
                        {/* fin tags*/}

                        <Form.Group className="mb-3" style={{textAlign:"left"}}>
                            <Form.Label style={{fontSize:"small", marginBottom:"10px", marginTop:"20px"}}>País</Form.Label>
                            <Form.Select size="sm" style={{fontSize:"small", color:"gray"}}>
                              <option>Seleccione el País</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" style={{textAlign:"left"}}>
                            <Form.Label style={{fontSize:"small", marginBottom:"10px", marginTop:"20px"}}>Ciudad</Form.Label>
                            <Form.Select size="sm" style={{fontSize:"small", color:"gray"}}>
                              <option>Seleccione la Ciudad</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>

                        <Form className="mb-3" style={{textAlign:"left", fontSize:"small"}}>
                        <Form.Label style={{marginBottom:"10px", marginTop:"20px"}}>Presencial / a distancia</Form.Label>
                          {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check 
                                type={type}
                                id={`default-${type}`}
                                label={`Presencial`}
                              />

                              <Form.Check                                
                                type={type}
                                label={`En remoto`}
                                id={`disabled-default-${type}`}
                              />
                            </div>
                          ))}
                      </Form>

                      <Form className="mb-3" style={{textAlign:"left", fontSize:"small"}}>
                        <Form.Label style={{marginBottom:"10px", marginTop:"20px"}}>Posibilidad traslado</Form.Label>
                          {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check 
                                type={type}
                                id={`default-${type}`}
                                label={`Sí`}
                              />

                              <Form.Check                                
                                type={type}
                                label={`No`}
                                id={`disabled-default-${type}`}
                              />
                            </div>
                          ))}
                      </Form>

                    </Form>
                </Col>
            </Row>
            
        </Container>
        </>
    )
}

export default function App() {
    return (
      <div className="App">
        <TablePage
          products={[
            { id: 1, name: "Juan Lopez", city: "Barcelona", country: "España", phone: "(206) 526-4228", email: "trieuvan@mac.com", tags: 98 },
            { id: 1, name: "Marta Sánchez", city: "Munich", country: "Alemania", phone: "(429) 722-5581", email: "violinhi@comcast.net", tags: 98 },
            { id: 1, name: "Cristian Barrera", city: "Buenos Aires", country: "Argentina", phone: "(929) 736-6697", email: "jguyer@verizon.net", tags: 98 },
            { id: 1, name: "Ricardo Martínez", city: "Montevideo", country: "Uruguay", phone: "(577) 386-5473", email: "bhima@verizon.net", tags: 98 },
            { id: 1, name: "Sofía Canvas", city: "Sao Paulo", country: "Brazil", phone: "(346) 372-9820", email: "adillon@sbcglobal.net", tags: 98 },
            { id: 1, name: "Claudia Burgesa", city: "Valencia", country: "España", phone: "(875) 329-7253", email: "crimsane@yahoo.com", tags: 98 },
            { id: 1, name: "Fernanda García", city: "Oregon", country: "USA", phone: "(590) 432-6593", email: "ribet@yahoo.ca", tags: 98 },
            { id: 1, name: "Roberto Fernández", city: "París", country: "Francia", phone: "(433) 691-9768", email: "philen@gmail.com", tags: 98 },
            { id: 1, name: "Bernardo Castro", city: "Kingston", country: "UK", phone: "(264) 451-8682", email: "leslie@gmail.com", tags: 98 },
            { id: 1, name: "Florencia Jiménez", city: "Sidney", country: "Australia", phone: "(706) 867-9965", email: "drezet@yahoo.ca", tags: 98 },
            { id: 1, name: "Roxana Pereyra", city: "Filadelfia", country: "USA", phone: "(608) 905-4274", email: "kdawson@aol.com", tags: 98 },
            { id: 1, name: "Ana Bollero", city: "Amsterdam", country: "Netherlands", phone: "(828) 470-9282", email: "murty@comcast.net", tags: 98 },
            { id: 1, name: "Ernestina Pandulfa", city: "Acapulco", country: "México", phone: "(915) 510-5641", email: "ylchang@aol.com", tags: <Badge bg="success">PHP</Badge>},
            
          ]}
        />
      </div>
    );
  }

