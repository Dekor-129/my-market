import { useSelector } from 'react-redux'
import CartList from './CartList'
import EmptyCart from './EmptyCart'

export default function CartPage() {
  const cartItems = useSelector((state)=> state.items.cartItems)

  return (
    <>
      <h2 className="text-center">Корзина</h2>
      {cartItems.length > 0 ? <CartList /> : <EmptyCart />}
    </>
  )
}
