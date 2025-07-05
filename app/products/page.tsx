'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { useProductStore } from '@/store/productStore';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './productsPage.module.scss';

export default function ProductsPage() {
  const { user } = useAuthStore()
  const { products, fetchProducts, isLoading, error } = useProductStore()
  const router = useRouter()

  useEffect(() => {
    if (!user) router.push('/login')
  }, [user, router])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  if (!user) return null

  return (
    <div className={styles.page}>
      <h1 className={styles.page_title}>Products</h1>

      {isLoading && <p>Loading...</p>}
      {error && <p className={styles.page_error}>{error}</p>}

      <div className={styles.page_productsList}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
            thumbnail={product.thumbnail}
            showButton={!!user}
          />
        ))}
      </div>
    </div>
  )
}
