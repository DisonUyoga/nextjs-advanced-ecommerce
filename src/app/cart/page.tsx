import { getCart } from '@/lib/db/cart'
import CartEntry from './CartEntry'

export const metadata = {
  title: 'Your cart | Comfort',
}

export default async function CartPage() {
  const cart = await getCart()

  return (
    <div className=''>
      <h1 className='mb-5 text-3xl font-bold'>Shopping Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry cartItem={cartItem} key={cartItem.id} />
      ))}
    </div>
  )
}
