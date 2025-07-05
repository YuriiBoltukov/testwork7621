'use client'

import styles from './productCard.module.scss'

interface ProductCardProps {
  id: number
  title: string
  category: string
  price: number
  thumbnail: string
  showButton?: boolean
}

export default function ProductCard({
                                      title,
                                      category,
                                      price,
                                      thumbnail,
                                      showButton = false,
                                    }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <img src={thumbnail} alt={title} className={styles.card_image} />
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_category}>{category}</p>
      <p className={styles.card_price}>${price}</p>
      {showButton && <button className={styles.card_button}>Add to cart</button>}
    </div>
  )
}
