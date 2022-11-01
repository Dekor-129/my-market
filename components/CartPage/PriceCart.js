import { Col } from 'react-bootstrap'

export default function PriceCart(props) {
  return (
    <Col className="text-center  align-self-center">{props.elem.currentPrice} Р</Col>
  )
}
