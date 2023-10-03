import Image from 'next/image'
import styles from '@/styles/itemDetail.module.scss'
import Carrousel from '@/components/Carrousel'
import Button from '@/components/Button'

const fetchItemDetail = async (id) => {
  return fetch('https://api.mercadolibre.com/items/MLA632938595', { cache: 'no-store' })
    .then(res => res.json())
    .catch(() => { throw new Error() })
}
const fetchDescription = async (id) => {
  return fetch('https://api.mercadolibre.com/items/MLA632938595', { cache: 'no-store' })
    .then(res => res.json())
    .catch(() => { throw new Error() })
}
export default async function ItemDetail ({ params }) {
  const { id } = params
  console.log('id', id)

  // const description = await fetchDescription(id)
  // console.log('dsssssss', description)
  const item = await fetchItemDetail(id)
  return (
    <main>
      <section key={item.id} className={styles.section_detail_item}>
        <article className={styles.detail_item}>
          {/* {
          item.pictures.map(picture =>
            <Carrousel picture={picture} key={picture.id} />
          )
        } */}
          <Image src={item.pictures[0].secure_url} width={680} height={500} alt='picture-prod' />
          <div className={styles.detail_item_info}>
            <p className={styles.detail_item_info__conditions}>{`${item.condition} - ${item.sold_quantity} vendidos`}</p>
            <p className={styles.detail_item_info__title}>{item.title}</p>
            <p className={styles.detail_item_info__price}>
              ${item.price}
            </p>
            <Button textTitle='Comprar' />
          </div>
        </article>
        <article className={styles.description_item}>
          <p>{item.title}</p>
          <p>{item.title}</p>
        </article>
      </section>
    </main>
  )
}
