//import react
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Content } from './components/content';
import { Header } from './components/header';
import { Footer} from './components/footer';
import Navbar from 'react-bootstrap/Navbar';
import  Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


//new class created 
class App extends React.Component {
  render(){
  return (
    <Router>
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='/read' element={<Header></Header>}></Route>
      </Routes>
      {/* <Header></Header>
     <Content></Content>
  <Footer></Footer> */}
    </div>
   </Router>
  );
  }
}

export default App;
