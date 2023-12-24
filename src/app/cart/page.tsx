import { getCart } from '@/lib/db/cart'
import CartEntry from './CartEntry'
import { setProductsQuantity } from './actions'
import { formatPrice } from '@/lib/format'

export const metadata = {
  title: 'Your cart | Comfort',
}

export default async function CartPage() {
  const cart = await getCart()

  return (
    <div className=''>
      <h1 className='mb-5 text-3xl font-bold'>Shopping Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry
          cartItem={cartItem}
          key={cartItem.id}
          setProductsQuantity={setProductsQuantity}
        />
      ))}
      {!cart?.items.length && (
        <p className='font-bold text-center'>Your cart is empty</p>
      )}
      <div className='flex flex-col items-end sm:items-center'>
        <p className='mb-3 font-bold'>
          Total: {formatPrice(cart?.subtotal || 0)}
        </p>
        <button className='btn btn-primary sm:w-[200px]'>Checkout</button>
      </div>
    </div>
  )
}
