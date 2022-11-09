import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux'
import { fullDeleteAction } from '../../../store/itemsReducer'
import { useSelector } from 'react-redux'

export default function MyForm({ onClose, showSuccess }) {
  const dispatch = useDispatch()
  const cartItems = useSelector((state)=> state.items.cartItems)
  const sortedCart = useSelector((state)=> state.items.sortedCart)

  const [form, setForm] = useState({
    name: '',
    email: '',
    tel: '',
    comment: ''
  })
  

  const handleSubmit = async (event)=> {
    event.preventDefault()
    if(form.name === false || form.email === false || form.tel === false) {
      return
    }

    const response = await fetch(`https://my-market-psi.vercel.app/api/send`, {
      method: 'POST',
      body: JSON.stringify({
        form,
        cartItems,
        sortedCart
      })

    });
    if(response.ok) {
      onClose(false)
      dispatch(fullDeleteAction())
      showSuccess.handleClose(true)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel 
        controlId="floatingInputName" 
        label="Имя" 
        className="mb-3"
      >
        <Form.Control 
          type="text" 
          placeholder="Имя" 
          value={form.name}
          required
          onChange={(e)=>{
            setForm({...form, name: e.target.value})
          }}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email"
        className="mb-3"
      >
        <Form.Control 
          type="email" 
          placeholder="name@gmail.com" 
          value={form.email}
          required
          onChange={(e)=>{
            setForm({...form, email: e.target.value})
          }}
        />
      </FloatingLabel>
      <FloatingLabel 
        controlId="floatingTel" 
        label="Телефон" 
        className="mb-5 "

      >
        <Form.Control 
          type="tel" 
          placeholder="Телефон"
          value={form.tel}
          required
          onChange={(e)=>{
            setForm({...form, tel: e.target.value})
          }}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Комментарий к заказу"
      >
        <Form.Control 
          as="textarea" 
          placeholder="Комментарий к заказу" 
          style={{ height: '100px' }} 
          value={form.comment}
          onChange={(e)=>{
            setForm({...form, comment: e.target.value})
          }}
        />
        
      </FloatingLabel>
      <Container className='mt-3'>
        <Row className='justify-content-end'>
          <Col sm={2}>
            <Button type='submit'>Отправить</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}