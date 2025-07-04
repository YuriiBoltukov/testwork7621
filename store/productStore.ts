import { create } from 'zustand'
import axios from 'axios'

interface Product {
  id: number
  title: string
  price: number
  category: string
  thumbnail: string
}

interface ProductState {
  products: Product[]
  isLoading: boolean
  error: string | null
  fetchProducts: () => Promise<void>
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    set({ isLoading: true, error: null })
    try {
      const res = await axios.get('https://dummyjson.com/products?limit=12')
      set({ products: res.data.products })
    } catch (e) {
      set({ error: 'Failed to load products' })
    } finally {
      set({ isLoading: false })
    }
  },
}))
