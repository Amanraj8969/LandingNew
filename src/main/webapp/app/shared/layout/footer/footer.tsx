import React from 'react';
import { Translate } from 'react-jhipster';
import { Col, Row } from 'reactstrap';
import './footer.scss'; // Import the SCSS file

const Footer = () => (
  <div className="footer">
    <Row>
      <Col md="4">
        <h4>Navigation</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </Col>
      <Col md="4">
        <h4>Popular Courses</h4>
        <ul>
          <li><a href="/courses/kathak">Kathak Dance</a></li>
          <li><a href="/courses/bharatnatyam">Bharatnatyam</a></li>
          <li><a href="/courses/singing">Singing</a></li>
          <li><a href="/courses/other-dance-forms">Other Dance Forms</a></li>
        </ul>
      </Col>
      <Col md="4">
        <h4>Contact Us</h4>
        <p>123 Hobby Street, Classical City</p>
        <p>Email: info@classical.com</p>
        <p>Phone: +123 456 7890</p>
      </Col>
    </Row>
    <Row>
      <Col md="12" className="text-center">
        <p className="copyright">
          <Translate contentKey="footer.copyright">
            © 2024, Classical.com. All rights reserved.
          </Translate>
        </p>
      </Col>
    </Row>
  </div>
);

export default Footer;
