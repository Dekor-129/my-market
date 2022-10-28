import MainContainer from '../../Layouts/MainContainer'
import classes from '../../styles/ProductCard.module.css'


export default function scentedCandles() {
  return (
    <>
    <MainContainer title = 'Ароматические свечи'>
      <div className={classes.container}>
        <div>Ожидается пополнение...</div>
      </div>
    </MainContainer>
    </>
  )
}
