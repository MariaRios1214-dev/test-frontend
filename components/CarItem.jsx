import Image from 'next/image'
import styles from '@/styles/cardItem.module.scss'

export default function CardItem ({ item }) {
  return (
    <article key={item.id} className={styles.cardItem__article}>
      <Image className={styles.cardItem__article_img} src={item.picture} width={180} height={180} alt={item.title} />
      <div className={styles.cardItem__article_detail}>
        <p>${item.price.amount}{
        item.free_shipping &&
          <small> imagen carrito</small>
        }
        </p>
        <p>{item.title}</p>
      </div>
      <span>{item.state_name}</span>
    </article>
  )
}
