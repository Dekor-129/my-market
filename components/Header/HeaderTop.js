import MyButton from "../UI/MyButton";
import Logo from "./Logo";
import classes from '../../styles/HeaderTop.module.css'

export default function HeaderTop() {
  return (
    <div className={classes.headerTop}>
      <Logo />
      <MyButton 
        className = {classes.contactButton} 
        text = 'Напишите нам'
      />
    </div>
  )
}
