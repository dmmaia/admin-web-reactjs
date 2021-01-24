import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>Header</Col>
      </Row>
      <Row className="main-row">
        <Col sm={2} >
          <Card className="vertical-menu">Vertical Menu</Card>
        </Col>
        <Col sm={9}>
          <Card body><div>This is some text within a card body.</div></Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
