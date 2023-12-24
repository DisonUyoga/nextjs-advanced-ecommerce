'use client'

import { ShoppingCart } from '@/lib/db/cart'
import { formatPrice } from '@/lib/format'
import { FaShoppingCart } from 'react-icons/fa'
import Link from 'next/link'

interface ShoppingCartButton {
  cart: ShoppingCart | null
}

function ShoppingCartBtn({ cart }: ShoppingCartButton) {
  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='btn-ghost btn-circle btn'>
        <div className='indicator'>
          <FaShoppingCart className='h-5 w-5' />
          <span className='badge badge-xs indicator-item mb-2 text-xs'>
            {cart?.size || 0}
          </span>
        </div>
      </label>
      <div className='card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow z-30'>
        <div className='card-body'>
          <span className='text-sm font-bold'>{cart?.size || 0} items</span>
          <span className='text-secondary'>
            subtotal:{formatPrice(cart?.subtotal || 0)}
          </span>

          <div className='card-actions'>
            <Link className='btn btn-primary btn-block' href='/cart'>
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartBtn
