import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

function Contacts() {
  return (
    <section id="contact" className="gradient-bg" style={{ color: "#fff" }}>
      <Container>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} viewport={{ once: true }}>
          <h2 className="section-title" style={{ color: "#fff" }}>📬 Let’s Work Together</h2>
          <p style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 28px", opacity: .95 }}>
            Have a project, opportunity, or just want to say hi? I’d love to connect.
          </p>
        </motion.div>

        <Row className="align-items-stretch g-4">
          <Col md={5}>
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6 }}
              viewport={{ once: true }}
              style={{
                background: "rgba(255,255,255,0.12)",
                borderRadius: 16, padding: 20, height: "100%"
              }}
            >
              <h5>Contact Details</h5>
              <p>📧 kaleeswaran0711@gmail.com</p>
              <p>📞 +91-6369102812</p>
      
              <p >💼<a href="www.linkedin.com/in/kaleeswaran-eswaran-software-developer/" target="_blank" rel="noopener noreferrer">linkedin.com/in/kaleeswaran</a> </p>
              <p>🌐
                <a href="https://github.com/Kalees-Nov" target="_blank" rel="noopener noreferrer">github.com/kaleeswaran</a>
              </p>
            </motion.div>
          </Col>

          <Col md={7}>
            <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .6 }} viewport={{ once: true }}>
              <Form style={{ background: "rgba(255,255,255,0.12)", borderRadius: 16, padding: 20 }}>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Your Email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={4} placeholder="Your Message" required />
                </Form.Group>
                <Button variant="light" type="submit" style={{ fontWeight: 700, color: "#0d47a1" }}>
                  Send Message
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contacts;
