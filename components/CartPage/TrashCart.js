import { Col, Container, Row } from 'react-bootstrap'
import classes from '../../styles/Cart.module.css'
import { useDispatch } from 'react-redux'
import { fullDeleteProductAction } from '../../store/itemsReducer'

export default function TrashCart(props) {
  const dispatch = useDispatch()

  const deleteProduct = ()=> {
    dispatch(fullDeleteProductAction(props.elem));
  }
  return (
    <Col className="text-center  align-self-center">
      <Container>
        <Row >
          <Col className="text-center  align-self-center">
            {props.cartItems.filter((el)=> el.id === props.elem.id).reduce((sum, current)=> sum + current.currentPrice , 0)} P
            <span onClick={deleteProduct} className={"ms-1 " + classes.trashCart}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </span>
          </Col>
        </Row>
      </Container>
    </Col>
  )
}