import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function CartList() {
  const cartItems = useSelector((state)=> state.items.cartItems)

  return (
    <Container>
      {
        cartItems.map((elem)=>(
          <Row className='my-5'>
            <Col><img height={150} src={elem.src} /></Col>
            <Col>{elem.text}</Col>
            <Col>{elem.currentPrice} Р</Col>
            <Col>QTY</Col>
            <Col>Total</Col>
          </Row>
        ))
      }
    </Container>
  )
}
