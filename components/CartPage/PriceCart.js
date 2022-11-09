import { Col } from 'react-bootstrap'

export default function PriceCart({elem}) {
  return (
    <Col className="text-center  align-self-center">{elem.parameter.coloring ? elem.currentPrice + elem.coloringPrice : elem.currentPrice } Р</Col>
  )
}
