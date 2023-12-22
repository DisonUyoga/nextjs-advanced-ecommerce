export function formatPrice(price: number) {
  return price.toLocaleString('en-KE', {
    style: 'currency',
    currency: 'Ksh',
  })
}
