import Header from '../components/Header'
import ProductCard from '../components/ProductCard';
import db from '../dataBase/db.json'
import classes from '../styles/ProductCard.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <div>Home</div>
      <div className={classes.container}>
        {
          db.map((elem) => {
            return(
              <div key={elem.id}>
                <Link href={`/${elem.name}`}>
                  <a>
                    <ProductCard elem={elem}/>
                  </a>
                </Link>
              </div>
            )
          })
        }
      </div>
    </>
    
  )
}
