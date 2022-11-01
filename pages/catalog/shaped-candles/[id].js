import ProductPageImg from '../../../components/ProductPageImg';
import db from '../../../dataBase/db.json'
import MainContainer from '../../../Layouts/MainContainer'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useRouter } from 'next/router';

export default function Posts({product}) {
  const router = useRouter()
  
  return (
    <MainContainer title = { product.name }>
      <Container>
        <div className='blockPath'>
          <Link href={'/'}>
            <a>Главная / </a>
          </Link>
          <Link href={'/catalog'}>
            <a>Каталог / </a>
          </Link>
          <Link href={'/catalog/shaped-candles'}>
            <a>Форменые свечи / </a>
          </Link>
          <Link href={`/catalog/shaped-candles/${product.path}`}>
            <a><span>{product.text}</span></a>
          </Link>
        </div>
      </Container>

      <Container className='my-4'>
        <Row>
          <Col lg={6}>
            <ProductPageImg src={ product.src }/>
          </Col>
          <Col lg={6}>
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Home">
                Text
              </Tab>
              <Tab eventKey="profile" title="Profile">
                Text
              </Tab>
            </Tabs>
          </Col>
        </Row>

      </Container>
    </MainContainer>
  )
}

export async function getServerSideProps(context) {
  const router = context.query.id
  const product = await db.filter((elem)=> elem.path === router)[0]

  return {
    props: { product }, // will be passed to the page component as props
  }
}
