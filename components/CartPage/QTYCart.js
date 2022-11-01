import { Col } from 'react-bootstrap'

export default function QTYCart(props) {
  return (
    <Col className="text-center  align-self-center">{props.cartItems.filter((el)=> el.name === props.elem.name).length}</Col>
  )
}
