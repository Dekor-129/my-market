import MainContainer from '../../Layouts/MainContainer'
import classes from '../../styles/ProductCard.module.css'


export default function scentedCandles() {
  return (
    <>
    <MainContainer 
      title = 'Большой выбор ароматических свечей по доступным ценам' 
      description={'Большой выбор ароматических свечей по доступным ценам.'}
      keywords={'ароматические свечи'}
    >
      <div className={classes.container}>
        <div>Ожидается пополнение...</div>
      </div>
    </MainContainer>
    </>
  )
}
