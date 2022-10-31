import classes from '../../styles/ProductCard.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Image from 'next/image'

export default function ProductImg({ name, src }) {
  const router = useRouter()
  
  return (
    <Link href={`${router.pathname}/${name}`}>
      <a>
        <Image 
          className={ classes.img } 
          src={ src } 
          width={250}
          height={250}
          placeholder={'blur'}
          blurDataURL
          />
      </a>
    </Link>
  )
}
