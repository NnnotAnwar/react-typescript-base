import React, { useEffect, useState } from "react"
import axios from 'axios'
import { IProduct } from "../models"
function useProduct() {
   const [products, setProducts] = useState<IProduct[]>([])
   const [loading, setLoading] = useState(true)
   async function fetchProducts() {
      setLoading(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
      setProducts(response.data)
      setLoading(false)
   }
   useEffect(() => {
      fetchProducts()
   }, [])
   return { loading, products }
}

export default useProduct