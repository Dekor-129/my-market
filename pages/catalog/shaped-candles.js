import MainContainer from '../../Layouts/MainContainer'
import classes from '../../styles/ProductCard.module.css'
import ProductCard from '../../components/ProductCard';
import db from '../../dataBase/db.json'
import Link from 'next/link'

export default function shapedCandles() {
  return (
    <>
    <MainContainer title = 'Формовые свечи'>
      <div className='blockPath'>
        <Link href={'/'}>
          <a>Главная / </a>
        </Link>
        <Link href={'/catalog'}>
          <a>Каталог / </a>
        </Link>
        <Link href={'/catalog/shaped-candles'}>
          <a><span>Форменые свечи</span></a>
        </Link>
      </div>
      <div className={classes.container}>
        {
          db.map((elem) => {
            return(
              <div key={elem.id}>
                <ProductCard setButton elem={elem}/>
              </div>
            )
          })
        }
      </div>
    </MainContainer>
    </>
  )
}
