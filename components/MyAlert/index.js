import Alert from 'react-bootstrap/Alert';
import { motion } from "framer-motion";
import { useSelector } from 'react-redux'
import classes from "../../styles/Alert.module.css"

export default function MyAlert() {
  const alert = useSelector((state)=> state.animate.showAlert)
  const alertVariants = useSelector((state)=> state.animate.alertVariants)

  return (
    <>
      {alert && <motion.div
        initial={alertVariants.hidden}
        animate={alertVariants.visible}
        variants={alertVariants}
        className={classes.alert}
      >
        <Alert >
          Ваш заказ {'success'} Добавлен в корзину!
        </Alert>
      </motion.div>}
    </>
  )
}
