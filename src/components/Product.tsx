import React, { useState } from 'react'
import { IProduct } from '../models'

interface ProductProbs {
   product: IProduct
}

function Product(probs: ProductProbs) {
   const [details, setDetails] = useState(false)
   return (
      <div style={{ border: '1px solid black', textAlign: 'center' }}>
         <h3>{probs.product.title}</h3>
         <p>Category: {probs.product.category}</p>
         <button onClick={
            () => setDetails(prev => !prev)}>
            {details ? 'Hide' : 'Show'} Details
         </button><br />
         {details && <div>
            <p>
               {probs.product.description}
            </p>
            <p>
               Rate: {probs.product.rating.rate} / 5.0
            </p>
         </div>}
         <br />
         <img src={probs.product.image} alt="img" style={{ width: "140px" }} />
         <p>${probs.product.price}</p>
      </div >)
}

export default Product