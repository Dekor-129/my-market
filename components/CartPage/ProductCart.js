import { Col, Container, Row } from 'react-bootstrap'
import classes from '../../styles/Cart.module.css'
import Image from 'next/image'

export default function ProductCart(props) {
  return (
    <Col className="text-center  align-self-center">
      <Container>
        <Row >
          <Col className="text-center  align-self-center"><Image className={classes.img} height={150} width={150} src={props.elem.src} /></Col>
          <Col className="text-center  align-self-center">{props.elem.name}</Col>
        </Row>
      </Container>
    </Col> 
  )
}
