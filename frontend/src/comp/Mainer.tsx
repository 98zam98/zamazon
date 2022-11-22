import React, { FC } from 'react'
import data from '../data'

const Mainer: FC = () => {
  return (
    <main>
      <h1 className="feat">featured products</h1>
      <div className="products">
        {
          data.products.map(
            i => (
              <div className="product" key={i.slug}>
                <a href={`/product/${i.slug}`}  ><img src={i.image} alt={i.name} /></a>

                <div className="info">
                  <a href={`/product/${i.slug}`}  >
                    <p className="name">
                      {i.name}
                    </p>
                  </a >
                  <p className="price">
                    ${i.price}
                  </p>
                  <button>ADD</button>
                </div>
              </div>
            )
          )
        }
      </div>
    </main>
  )
}

export default Mainer