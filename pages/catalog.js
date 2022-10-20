import MainContainer from '../Layouts/MainContainer'
import classes from '../styles/ProductCard.module.css'
import ProductCard from '../components/ProductCard';
import db from '../dataBase/db.json'

export default function Catalog() {
  return (
    <>
    <MainContainer title = 'Каталог'>
      <div>Catalog</div>
      <div className={classes.container}>
        {
          db.map((elem) => {
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
