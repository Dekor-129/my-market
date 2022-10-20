import classes from '../../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className= {classes.footer}>
      <div className= {classes.block}>
        <div>
          Фигурные свечи
        </div>
        <div>
          Восковые свечи ручной работы
        </div>
      </div>
      <div className= {classes.block}>
        <div>
          КАТАЛОГ
        </div>
      </div>
      <div className= {classes.block}>
        <div>
          ДЛЯ КЛИЕНТА 
        </div>
        <div>
          О нас 
        </div>
      </div>
      <div className= {classes.block}>
        <div>
          КОНТАКТЫ 
        </div>
        <div>
          <a href="tel:+79105755989">+7(999)-999-99-99</a> 
        </div>
      </div>
    </footer>
  )
}
