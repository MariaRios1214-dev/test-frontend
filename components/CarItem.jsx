import Image from 'next/image'
import styles from '@/styles/cardItem.module.scss'

export default function CardItem ({ item }) {
  return (
    <article key={item.id} className={styles.cardItem__article}>
      <Image className={styles.cardItem__article_img} src={item.picture} width={180} height={180} alt={item.title} />
      <div className={styles.cardItem__article_detail}>
        <p className={styles.detail_price}>${item.price.amount}{
        item.free_shipping &&
          <small> imagen carrito</small>
        }
        </p>
        <p className={styles.detail_title}>{item.title}</p>
      </div>
      <p className={styles.detail_location}>{item.state_name}</p>
    </article>
  )
}
