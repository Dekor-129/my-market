import { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function MyForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    tel: '',
    comment: ''
  })

  const handleSubmit = async (event)=> {
    event.preventDefault()

    let response = await fetch('localhost:3006', {
      method: 'POST',
      body: JSON.stringify(form)
    });
    const result = await response.json()
    console.log(result.message);
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
      <Button type='submit'>Отправить</Button>
    </Form>
  );
}