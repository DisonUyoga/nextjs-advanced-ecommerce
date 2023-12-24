'use server'
import { revalidatePath } from 'next/cache'
import { createCart, getCart } from '@/lib/db/cart'
import { prisma } from '@/lib/db/prisma'

export async function setProductsQuantity(productId: string, quantity: number) {
  const cart = (await getCart()) || (await createCart())
  const articleCart = cart.items.find((item) => item.productId === productId)

  if (quantity === 0) {
    if (articleCart) {
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: {
            delete: { id: articleCart.id },
          },
        },
      })
    }
  } else {
    if (articleCart) {
      await prisma.cart.update({
        where: {
          id: cart.id,
        },
        data: {
          items: {
            update: {
              where: {
                id: articleCart.id,
              },
              data: { quantity },
            },
          },
        },
      })
    } else {
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: {
            create: {
              productId,
              quantity,
            },
          },
        },
      })
    }
  }

  revalidatePath('/cart', 'page')
}
