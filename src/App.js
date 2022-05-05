import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container, Stack, Button, Image } from 'react-bootstrap'

function App() {
  return (
    <Container fluid>
      <div className='welc-page light-panel'>
        <div className='navbar'>
          <Row className='navbar w-100'>
            <Col className='logo-placeholder'>LOGO</Col>
            <Col lg='auto'><Button className='navbar-btn'>Home</Button></Col>
            <Col lg='auto'><Button className='navbar-btn'>About Us</Button></Col>
            <Col lg='auto'><Button className='navbar-btn'>Products</Button></Col>
            <Col lg='auto'><Button className='navbar-btn'>Blog</Button></Col>
            <Col lg='auto'><Button className='navbar-btn'>Contact Us</Button></Col>
            <Col lg='auto'><Button className='navbar-btn hero-btn'>Create Account</Button></Col>
          </Row>
        </div>
        <Stack className='welc-text-stack'>
          <Row className='font-reg'>WELCOME TO OUR PROFILE</Row>
          <Row className='font-bold'>Advanced Business</Row>
          <Row className='font-bold'>Growth Platform</Row>
          <Row className='font-reg'>Automate your marketing, convert more leads, and recruit new partners using one simple CRM solution.</Row>
          <Button className='welc-btn hero-btn'>Create Account</Button>
        </Stack>
      </div>
      <Image className='laptop-img' src='./Images/laptop macbook 1.png' />
      <Container className='desc-panel'>
        <Stack className='desc-panel-text'>
          <Row className='font-bold'>Advanced Business</Row>
          <Row className='font-bold'>Growth Platform</Row>
          <Row className='font-reg'>Automate your marketing, convert more leads, and recruit new partners using one simple CRM solution. Automate your marketing, convert more leads, and recruit new partners using one simple CRM solution. Automate your marketing, convert more leads, and recruit new partners using one simple CRM solution.</Row>
          <Button className='desc-btn hero-btn'>Create Account</Button>
        </Stack>
        <Row className='stats-panel light-panel'>
          <Col>
            <Stack>
              <Col className='font-bold'>100+</Col>
              <Col className='font-reg'>Communities</Col>
            </Stack>
          </Col>
          <Col>
            <Stack>
              <Col className='font-bold'>200K</Col>
              <Col className='font-reg'>Active Users</Col>
            </Stack>
          </Col>
          <Col>
            <Stack>
              <Col className='font-bold'>$15M</Col>
              <Col className='font-reg'>Processed</Col>
            </Stack>
          </Col>
        </Row>
        <Image className='stock-img' src='./Images/stock-img.png' />
      </Container>
    </Container>
  );
}

export default App;
