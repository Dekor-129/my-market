import classes from '../../styles/ProductCard.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Image from 'next/image'

export default function ProductImg({ name, src }) {
  const router = useRouter()
  
  return (
    <Link href={`${router.pathname}/${name}`}>
      <div className='d-flex justify-content-center'>
        <a>
          <Image 
            className={ classes.img } 
            src={ src } 
            width={300}
            height={300}
            
            />
        </a>
      </div>
    </Link>
  )
}
