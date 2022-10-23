import MainContainer from '../../Layouts/MainContainer'
import classes from '../../styles/ProductCard.module.css'

export default function containerCandles() {
  return (
    <>
    <MainContainer title = 'Формовые свечи'>
      <div className={classes.container}>
        <div>Ожидается пополнение...</div>
      </div>
    </MainContainer>
    </>
  )
}
