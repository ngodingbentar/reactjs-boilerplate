import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../services/main.service'
import { useDispatch, useSelector } from 'react-redux'
import { doCounter, minCounter } from '../redux/slices/countSlice'

interface IProduct {
  title: string,
}

function HomePage() {
  const [products, setProducts] = useState([] as IProduct[] )
  const counter = useSelector((state) => state?.counter.data)
  const dispatch = useDispatch()

  useEffect(() => {
    getAllProducts((data) => {
      setProducts(data)
    })
  },[])

  return (
    <div className='p-8'>
      <div className='bg-red-100 mt-4 justify-center flex'>Products</div>
      <div className='p-8'>
        <p>counter : {counter}</p>
        <button className='' onClick={() => dispatch(doCounter())}>plus</button>
        <button className='ml-4' onClick={() => dispatch(minCounter())}>min</button>
      </div>
      <div>
        {products.length > 0 && products.map((item) => (
          <div key={item.id} >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage