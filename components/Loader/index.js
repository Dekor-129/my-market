import { Container } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner';
import classes from '../../styles/Loader.module.css'

export default function Loader() {
  return (
    <Container className={classes.container}>
      <Spinner className={classes.loader} animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  )
}
