import React, { FC } from 'react'
import data from '../data'
import { Link } from "react-router-dom";

const Mainer: FC = () => {
  return (
    <main>
      <h1 className="feat">featured products</h1>
      <div className="products">
        {
          data.products.map(
            i => (
              <div className="product" key={i.slug}>
                <Link to={`/product/${i.slug}`}  ><img src={i.image} alt={i.name} /></Link>

                <div className="info">
                  <Link to={`/product/${i.slug}`}  >
                    <p className="name">
                      {i.name}
                    </p>
                  </Link >
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