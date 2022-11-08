import ProductPageImg from '../../../components/ProductPageImg';
import db from '../../../dataBase/db.json'
import MainContainer from '../../../Layouts/MainContainer'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CardButton from '../../../components/ProductCard/CardButton';

export default function Posts({ product, colors }) {
  const [color, setColor] = useState(colors[0])
  const [coloring, setColoring] = useState(product.parameter.coloring)
  const [quantity, setQuantity] = useState([product])

  //console.log(quantity);


  const handleColor = (e)=>{
    setColor(...colors.filter((el)=> el.name === e.target.value))
    product.parameter.colorName = colors.filter((el)=> el.name === e.target.value)[0].name
    product.parameter.color = colors.filter((el)=> el.name === e.target.value)[0].color
  }

  const handleColoring = ()=>{
    setColoring(!coloring)
    product.parameter.coloring = !product.parameter.coloring
  }

  const increment = ()=>{
    setQuantity([...quantity, product])
  }

  const decrement = ()=>{
    if(quantity.length > 1){
      let arr = [...quantity]
      arr.pop()
      setQuantity(arr)
    }
  }

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
            <a><span>{product.name}</span></a>
          </Link>
        </div>
      </Container>

      <Container className='my-4'>
        <Row>
          <Col lg={6}>
            <ProductPageImg src={ product.src }/>
          </Col>
          <Col lg={6}>
            <Col>
              <Tabs
                defaultActiveKey="description"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="description" title="Описание">
                  <p>{product.description}</p>
                </Tab>
                <Tab eventKey="parameter" title="Характеристики">
                  <Container>
                    <Row>
                      <Col>Вес свечи: </Col>
                      <Col>{product.parameter.weight} грамм</Col>
                    </Row>
                    <Row>
                      <Col>Высота свечи: </Col>
                      <Col>{product.parameter.height} см</Col>
                    </Row>
                    <Row>
                      <Col>Цвет: </Col>
                      <Col>
                        <Row>
                          <Col>
                            <div className={'colorIcon ' + color.color}></div>
                          </Col>
                          <Col>
                            <Form.Select onChange={handleColor} size="sm">
                              {
                                colors.map((el)=>(
                                  <option key={el.id}>{el.name}</option>
                                ))
                              }
                              
                            </Form.Select>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>Дополнительное окрашивание</Col>
                      <Col>
                        <Form.Check 
                          type="switch"
                          onChange={handleColoring}
                          id="custom-switch"
                        />
                      </Col>
                    </Row>
                  </Container>
                </Tab>
              </Tabs>
            </Col>
            <Col>
              <Container>
                <Row>
                  <Col>Свеча {product.name}</Col>
                  <Col>+ {product.currentPrice} Р</Col>
                </Row>
                <Row>
                  <Col>Цвет {product.parameter.colorName}</Col>
                  <Col>+ 0 Р</Col>
                </Row>
                {
                  coloring &&
                  <Row>
                    <Col>Дополнительное окрашивание</Col>
                    <Col>+ 50 Р</Col>
                  </Row>
                }
                <Row>
                    <Col>Количество</Col>
                    <Col>
                      <span onClick={decrement}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className ="bi bi-dash-square" viewBox="0 0 16 16">
                          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                      </span>
                      <span className=' mx-2'>
                        {quantity.length}
                      </span>
                      <span onClick={increment}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                      </span>
                    </Col>
                </Row>
                <Row>
                  <Col>Итого</Col>
                  <Col>
                    + {
                      coloring
                      ? quantity.reduce((current, el)=> current + el.currentPrice + 50, 0)
                      : quantity.reduce((current, el)=> current + el.currentPrice, 0)
                    } Р
                  </Col>
                </Row>
                <Row className='justify-content-end'>
                  <Col sm='6'>
                    <CardButton elem={quantity} />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Col>
        </Row>

      </Container>
    </MainContainer>
  )
}
/*
export async function getServerSideProps(context) {
  const router = context.query.id
  const product = await db.filter((elem)=> elem.path === router)[0]
  const color = {
    natural: 'natural',
    black: 'black',
    black: 'yellow'
  }
  return {
    props: { 
      product,
      color
    }, // will be passed to the page component as props
  }
}*/

export async function getStaticPaths() {
  const product = await db
  const paths = product.map((el) => ({
    params: { id: el.path },
  }))
  
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const product = await db.filter((elem)=> elem.path === params.id)[0]

  
  const colors = [
    {
      id: 1,
      name: 'Натуральный',
      color: 'natural',
    },
    {
      id: 2,
      name: 'Черный',
      color: 'black',
    },
    {
      id: 3,
      name: 'Желтый',
      color: 'yellow',
    },
  ]

  return { props: { product, colors } }
}