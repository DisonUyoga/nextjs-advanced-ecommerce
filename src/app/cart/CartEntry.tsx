'use client'

import { cartItemWithProducts } from '@/lib/db/cart'
import { formatPrice } from '@/lib/format'
import Image from 'next/image'
import Link from 'next/link'
import { useTransition } from 'react'
import { toast } from 'react-hot-toast'

interface CartEntryProps {
  cartItem: cartItemWithProducts
  // eslint-disable-next-line no-unused-vars
  setProductsQuantity: (productId: string, quantity: number) => Promise<void>
}

export default function CartEntry({
  cartItem: { product, quantity },
  setProductsQuantity,
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition()
  // eslint-disable-next-line no-undef
  const quantityOptions: JSX.Element[] = []

  for (let i = 0; i <= 99; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    )
  }
  return (
    <div className=''>
      <div
        className='flex flex-w
      rap items-center gap-3'
      >
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          className='rounded-lg'
        />
        <div className=''>
          <Link href={'/product/' + product.id} className='font-bold'>
            {product.name}
          </Link>
          <div className=''>{formatPrice(product.price)}</div>
          <div className='my-1 flex items-center gap-2'>
            Quantity:{' '}
            <select
              className='select select-bordered w-full max-w-[80px]'
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value)
                startTransition(async () => {
                  await setProductsQuantity(product.id, newQuantity)
                  toast.success(
                    newQuantity > 0
                      ? `${newQuantity} items added`
                      : 'one item added'
                  )
                })
              }}
            >
              {quantityOptions}
            </select>
          </div>
          <div className='flex items-center'>
            Total: {formatPrice(product.price * quantity)}
          </div>
          {isPending && <span className='loading loading-spinner loading-sm' />}
        </div>
        <div className='divider' />
      </div>
    </div>
  )
}
