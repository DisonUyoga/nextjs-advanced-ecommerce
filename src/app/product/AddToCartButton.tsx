'use client'
import { FaShoppingCart } from 'react-icons/fa'
import { useState, useTransition } from 'react'
import { toast } from 'react-hot-toast'
interface AddToCartButton {
  productId: string
  // eslint-disable-next-line no-unused-vars
  incrementProductQuantity: (productId: string) => Promise<void>
}

function AddToCart({ productId, incrementProductQuantity }: AddToCartButton) {
  const [isPending, startTransition] = useTransition()

  return (
    <div className='flex items-center'>
      <button
        className='btn btn-primary'
        onClick={() => {
          startTransition(async () => {
            await incrementProductQuantity(productId)

            toast.success('product added')
          })
        }}
      >
        <FaShoppingCart />
        Add to Cart
      </button>
      {isPending && <span className='loading loading-spinner loading-md' />}
    </div>
  )
}

export default AddToCart
