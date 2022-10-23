import MainContainer from '../Layouts/MainContainer'
import classes from '../styles/ProductCard.module.css'
import ProductCard from '../components/ProductCard';
import catalogDB from '../dataBase/catalogDB.json'
import Link from 'next/link'

export default function Catalog() {
  return (
    <>
    <MainContainer title = 'Каталог'>
      <div className='blockPath'>
        <Link href={'/'}>
          <a>Главная / </a>
        </Link>
        <Link href={'/catalog'}>
          <a><span>Каталог</span></a>
        </Link>
      </div>
      <div className={classes.container}>
        {
          catalogDB.map((elem) => {
            return(
              <div key={elem.id}>
                <ProductCard elem={elem}/>
              </div>
            )
          })
        }
      </div>
    </MainContainer>
    </>
  )
}
