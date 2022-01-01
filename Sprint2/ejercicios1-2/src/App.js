import './styles/login.scss'

import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">    
      <Row className='align-items-center'>
        <Col sm={3}>
          <LeftSide></LeftSide>
        </Col>
        <Col id='colR' sm={9}>
          <RightSide></RightSide>
          </Col>
      </Row>            
    </div>
  );
}

export default App;
