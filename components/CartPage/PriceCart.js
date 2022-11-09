import { Col } from 'react-bootstrap'

export default function PriceCart({elem, cartItems }) {
  const arr1 =  cartItems.filter((el)=> el.parameter.coloring === false)
  const arr2 =  cartItems.filter((el)=> el.parameter.coloring === true)

  return (
    <Col className="text-center  align-self-center">
      {
        arr1.length > 0 &&  arr2.length > 0
        ? elem.currentPrice + ' - ' + (elem.currentPrice + elem.coloringPrice)
        : arr1.length > 0
        ? elem.currentPrice
        : elem.currentPrice + elem.coloringPrice
      } Р
    </Col>
  )
}
