import React, { useState, useEffect } from 'react';
import { Navbar, Container, Button, Row, Col, ButtonGroup, ToggleButton } from 'react-bootstrap';
import dog from './dog.png';
import './App.css';

const App = () => {
  const [radioValue, setRadioValue] = useState('1');
  const [theme, setTheme] = useState('dark');

  const radios = [
    { name: 'About', value: '1' },
    { name: 'Skills', value: '2' },
    { name: 'Works', value: '3' },
    { name: 'Contact', value: '4' },
  ];

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    // Store the selected theme in local storage
    localStorage.setItem('theme', newTheme);
    // Update the theme in the HTML attribute
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  };

  // Retrieve theme from local storage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      // Update the theme in the HTML attribute
      document.documentElement.setAttribute('data-bs-theme', savedTheme);
    }
  }, []);

  // Icon to display based on the selected theme
  const themeIcon = theme === 'dark' ? (
    <i className="bi bi-brightness-high fs-5"></i>
  ) : (
    <i className="bi bi-moon-stars fs-5"></i>
  );

  return (
    <div>
      <Navbar className="bg-transparent shadow mb-4">
        <Container>
          <Navbar.Brand href="./" className='fs-3'>Portfolio</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button variant="outline-info rounded-circle" onClick={toggleTheme}>{themeIcon}</Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className='p-3'>
        <Row className='g-2 mt-5'>
          <Col xs={12} sm={12} md={12} lg={4} className='p-3 bg-black text-center d-grid align-items-center justify-content-center shadow rounded position-relative' id='intro'>
            <img src={dog} className='shadow rounded position-absolute top-0 start-50 translate-middle' alt="" id='profile-img' />
            <Row className="g-2 mt-5">
              <Col sm={12} className='d-flex align-items-center justify-content-center'>
                <Row className="g-2 fs-3 fw-bold text-white">Mangesh Deshpande</Row>
              </Col>
            </Row>
            <Row className="g-2 mt-3">
              <Col sm={12} className='d-flex align-items-center justify-content-center'>
                <Row className="g-2 rounded p-2 fst-italic text-dark" id='role'>Full Stack Developer</Row>
              </Col>
            </Row>
            <Row className="g-2 mt-3">
              <Col sm={12}>
                <Row className="row-cols-2 row-cols-lg-5 g-2 g-lg-3 d-flex align-items-center justify-content-center">
                  <Col>
                    <a href="https://www.google.com" className="p-1 bg-body-tertiary rounded d-flex align-items-center justify-content-center" target='_blank' rel='noreferrer'>
                      <i class="btn bi bi-github"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="https://www.google.com" className="p-1 bg-body-tertiary rounded d-flex align-items-center justify-content-center" target='_blank' rel='noreferrer'>
                      <i class="btn bi bi-linkedin text-primary"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="https://www.google.com" className="p-1 bg-body-tertiary rounded d-flex align-items-center justify-content-center" target='_blank' rel='noreferrer'>
                      <i class="btn bi bi-twitter-x"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="https://www.google.com" className="p-1 bg-body-tertiary rounded d-flex align-items-center justify-content-center" target='_blank' rel='noreferrer'>
                      <i class="btn bi bi-instagram text-danger"></i>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="g-2 mt-3">
              <Col sm={12}>
                <Row className="g-2">
                  <div className='bg-body-tertiary p-4 rounded'>
                    <div className='d-flex align-items-center'>
                      <i class="bi bi-phone bg-black p-2 rounded me-4 text-info"></i>
                      <div id='p-details'>
                        <p className='float-start'>Phone</p><br />
                        <p className='float-start'>+91 9876543210</p>
                      </div>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center'>
                      <i class="bi bi-envelope-at bg-black p-2 rounded me-4 text-info"></i>
                      <div id='p-details'>
                        <p className='float-start'>E-Mail</p><br />
                        <p className='float-start'>example@mail.com</p>
                      </div>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center'>
                      <i class="bi bi-geo-alt bg-black p-2 rounded me-4 text-info"></i>
                      <div id='p-details'>
                        <p className='float-start'>Location</p><br />
                        <p className='float-start'>Mumbai, Maharashtra</p>
                      </div>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center'>
                      <i class="bi bi-calendar3 bg-black p-2 rounded me-4 text-info"></i>
                      <div id='p-details'>
                        <p className='float-start'>Date of birth</p><br />
                        <p className='float-start'>Jan 01, 2000</p>
                      </div>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
            <Row className="g-2 mt-3 mb-2">
              <Col sm={12} className='d-flex align-items-center justify-content-center'>
                <Row className="g-2">
                  <Button variant='info'>View Resume</Button>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={{ span: 7, offset: 1 }} className='p-3 bg-black text-white shadow rounded'>
            <div className='bg-body-tertiary p-3 rounded'>
              <ButtonGroup className='d-flex align-items-center justify-content-center'>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant='outline-info'
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                    className='p-2 me-2 fw-bold rounded'
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
