import CardItem from '@/components/CarItem'

const list = [
  {
    id: 'MLA1364102075',
    title: 'Funda Silicone Cover Apple Silicone Case Soft White Con Diseño Liso Para Apple iPhone iPhone 11 Por 1 Unidad - Distribuidor Autorizado',
    price: {
      currency: 'ARS',
      amount: 68938,
      decimals: Number
    },
    picture: 'https://http2.mlstatic.com/D_NQ_NP_850683-MLA45716800336_042021-V.webp',
    condition: 'new',
    free_shipping: true,
    state_name: 'Capital Federal'
  },
  {
    id: 'MLA632938595',
    title: 'Jgox9 Herramienta Destornillador Apple iPhone iPad iPod Htec',
    price: {
      currency: 'ARN',
      amount: 3521,
      decimals: 58
    },
    picture: 'https://http2.mlstatic.com/D_NQ_NP_850683-MLA45716800336_042021-V.webp',
    condition: 'new',
    free_shipping: true,
    state_name: 'Capital Federal'
  }
]

export default function Items () {
  return (
    <section>
      {list.map(item =>
        <CardItem item={item} key={item.id} />
      )}
    </section>
  )
}
