import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import MyForm from '../MyForm';

export default function MyModal({show, onHide, close}) {
  return (
    <Modal
      show = {show}
      onHide= {onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Заполните форму заказа
        </Modal.Title>
        <CloseButton onClick={close} />
      </Modal.Header>
      <Modal.Body>
        <MyForm />
      </Modal.Body>
      {/*<Modal.Footer>
        <Button type='submit' onClick={close}>Отправить</Button>
  </Modal.Footer>*/}
    </Modal>
  );
} 