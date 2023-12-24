import { prisma } from '@/lib/db/prisma'
import FormSubmitButton from '@/components/FormSubmitButton'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
export const metadata = {
  title: 'Comfort | add product',
}
async function addProduct(formData: FormData) {
  'use server'
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/api/auth/signin/callbackUrl=add-product')
  }
  const name = formData.get('name')?.toString()
  const description = formData.get('description')?.toString()
  const imageUrl = formData.get('imageUrl')?.toString()
  const price = Number(formData.get('price') || 0)
  if (!name || !description || !imageUrl || !price) {
    throw Error('Missing required fields')
  }

  await prisma.product.create({
    data: {
      name,
      description,
      imageUrl,
      price,
    },
  })

  redirect('/')
}

async function AddProductPage() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/api/auth/signin/callbackUrl=add-product')
  }
  return (
    <div>
      <h1 className='text-lg mb-3 font-bold'>Add product</h1>
      <form action={addProduct}>
        <input
          type='text'
          name='name'
          placeholder='name'
          required
          className='input bordered input mb-3 w-full'
        />
        <textarea
          name='description'
          required
          placeholder='Description'
          className='textarea-bordered textarea mb-3 w-full'
        />
        <input
          type='url'
          placeholder='image URL'
          name='imageUrl'
          required
          className='input bordered input mb-3 w-full'
        />

        <input
          type='number'
          required
          name='price'
          placeholder='price'
          className='input bordered input mb-3 w-full'
        />
        <FormSubmitButton className='btn-block uppercase'>
          add product
        </FormSubmitButton>
      </form>
    </div>
  )
}

export default AddProductPage
