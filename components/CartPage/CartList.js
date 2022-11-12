import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import classes from '../../styles/Cart.module.css'
import MyModal from './MyModal'
import PriceCart from './PriceCart'
import ProductCart from './ProductCart'
import QTYCart from './QTYCart'
import TrashCart from './TrashCart'

export default function CartList({showSuccess}) {
  const cartItems = useSelector((state)=> state.items.cartItems)
  const sortedCart = useSelector((state)=> state.items.sortedCart)
  const [modalShow, setModalShow] = useState(false)
  //console.log(cartItems);
  //console.log(sortedCart);

  return (
    <>
      <Container className={classes.cartContainer + ' my-5'}>
          <Row className={' m-5' }>
            <Col sm={3} className="text-center  align-self-center">Продукт</Col>
            <Col sm={3} className="text-center  align-self-center">Цена за единицу</Col>
            <Col sm={3} className="text-center  align-self-center">Колличество</Col>
            <Col sm={3} className="text-center  align-self-center">Цена</Col>
          </Row>
        {
          sortedCart.map((elem)=>(
            <Row className={' m-5' } key={elem.id}>
              <ProductCart elem={elem} />
              <PriceCart cartItems={cartItems} elem={elem} /> 
              <QTYCart cartItems={cartItems} elem={elem} /> 
              <TrashCart cartItems={cartItems} elem={elem} />
            </Row>
          ))
        }
      </Container>
      <Container>
        <Row className='justify-content-end'>
            <Col sm={3}>
              <h4  className={'text-center mb-3' }>Итого: {cartItems.reduce((sum, current)=>  sum + (current.parameter.coloring.coloring ? current.currentPrice + current.parameter.coloring.coloringPrice : current.currentPrice) , 0)} Р</h4>
            </Col>
        </Row>
      </Container>
      <Container>
        <Row className='justify-content-end'>
            <Col className='me-4' sm={2}>
              <button onClick={() => setModalShow(true)} className={classes.Cartbutton + ' mb-5'}>Оформить заказ</button>
            </Col>
        </Row>
        <MyModal
          show={modalShow}
          onHide={() => setModalShow(true)}
          onClose={setModalShow}
          showSuccess={showSuccess}
        />
      </Container>
    </>
  )
}
