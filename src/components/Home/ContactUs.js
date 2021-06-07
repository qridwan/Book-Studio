import { Form, Row, Col,Button } from "react-bootstrap";

const ContactUs = () => {
    return (
        <section className='container-fluid my-3'>
            <h2>Contact Us</h2>
            <Form>
                <Row>
                    <Col md={6} sm={6} xs={12} className='mb-3'>
                        <Form.Control placeholder="name" />
                    </Col>
                    <Col md={6} sm={6} xs={12} className='mb-3' >
                        <Form.Control placeholder=" your email" />
                    </Col>
                    <Col md={12} sm={12} xs={12} className='mb-3'>
                        <Form.Control placeholder="subject" />
                    </Col>
                    <Col md={12} sm={12} xs={12} className='mb-3'>
                        <Form.Control placeholder="your message" />
                    </Col>
                    <Button variant="primary">
                        Send Message
                    </Button>
                </Row>
            </Form>
        </section>
    )
}
export default ContactUs;