import MainContainer from '../Layouts/MainContainer'
import classes from '../styles/ProductCard.module.css'
import ProductCard from '../components/ProductCard';
import catalogDB from '../dataBase/catalogDB.json'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap';

export default function Catalog() {
  return (
    <>
    <MainContainer title = 'Каталог'>
      <h2 className="text-center">Каталог</h2>

      <Container>
        <div className='blockPath'>
          <Link href={'/'}>
            <a>Главная / </a>
          </Link>
          <Link href={'/catalog'}>
            <a><span>Каталог</span></a>
          </Link>
        </div>
      </Container>

      <Container>
        <Row>
          {
            catalogDB.map((elem) => {
              return(
                <Col key={elem.id}>
                  <ProductCard elem={elem}/>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </MainContainer>
    </>
  )
}
