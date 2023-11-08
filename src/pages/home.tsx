import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../services/main.service'

interface IProduct {
  title: string,
}

function HomePage() {
  const [products, setProducts] = useState([] as IProduct[] )

  useEffect(() => {
    getAllProducts((data) => {
      console.log('data', data)
      setProducts(data)
    })
  },[])
  return (
    <div className=''>
      <div className='bg-red-100 mt-4 justify-center flex'>Products</div>
      <div>
        {products.length > 0 && products.map((item) => (
          <div>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage