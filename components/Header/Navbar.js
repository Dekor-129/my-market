import Link from 'next/link'
import classes from '../../styles/Navbar.module.css'

export default function Navbar() {

  return (
    <nav className= {classes.navbar}>
      <div className= {classes.container}>
        <Link href={'/'}>
          <a className = {classes.block}>Главная</a>
        </Link>
          <Link href={'/catalog'}>
            <a className= {classes.block}>Каталог</a>
          </Link>
          <Link href={'/delivery'}>
            <a className= {classes.block}>Доставка</a>
          </Link>
          <Link href={'/about'}>
            <a className= {classes.block}>О нас</a>
          </Link>
          <Link href={'/contacts'}>
            <a className= {classes.block}>Контакты</a>
          </Link>
      </div>
    </nav>
  )
}
