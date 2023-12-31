import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { redirect } from 'next/navigation'
import ShoppingCartBtn from './ShoppingCartButton'
import { getCart } from '@/lib/db/cart'
import UserMenuButton from './UserMenuButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions' 

async function searchProducts(formData: FormData) {
  'use server'
  const searchQuery = formData.get('searchQuery')
  if (searchQuery) {
    redirect('/search/?query=' + searchQuery)
  }
}

async function Navbar() {
  const session = await getServerSession(authOptions)
  const cart = await getCart()
  return (
    <div className='bg-base-100'>
      <div className='navbar max-w-7xl m-auto flex-col sm:flex-row gap2'>
        <div className='flex-1'>
          <Link className='btn btn-ghost text-xl normal-case' href='/'>
            <Image src={logo} height={40} width={40} alt='comfort logo' />
            Comfort
          </Link>
        </div>

        <div className='flex-none gap-2'>
          <form action={searchProducts}>
            <div className='form-control'>
              <input
                name='searchQuery'
                placeholder='search'
                className='input input-bordered w-full min-w-[80px]'
              />
            </div>
          </form>
          <ShoppingCartBtn cart={cart} />
          <UserMenuButton session={session} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
