import '../styles/common/Nav.css'
import { Button, Container,Form,Nav,Navbar,NavDropdown } from "react-bootstrap";

export default () => {
    
    return(
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand href='/'>지기</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto my-2 my-lg-0" style={{maxHeight:'100px'}} basic-navbar-nav>
                    <Nav.Link href='/Service'>서비스 안내</Nav.Link>
                    <Nav.Link href='/HowUse'>이용방법</Nav.Link>
                    <Nav.Link href='/MyPage'>마이페이지</Nav.Link>
                    <Nav.Link href='/Event'>이벤트</Nav.Link>
                    <Nav.Link href='/Support'>고객지원</Nav.Link>
                    </Nav>
                    <Form className='d-flex'>
                        <Button variant='outline-success'>login</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}