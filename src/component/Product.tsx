import React, { type ReactElement } from 'react'
import { ProductType } from '../context/ProductProvider'
import { ReducerAction, ReducerActionType } from '../context/CartProvider'

type PropsType = {
  product: ProductType
  dispatch: React.Dispatch<ReducerAction>
  REDUCER_ACTIONS: ReducerActionType
  inCart: boolean
}

const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {

  const img: string = new URL(
    `../images/${product.sku}.jpg`,
    import.meta.url
  ).href

  const onAddToCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.ADD,
      payload: { ...product, qty: 1 },
    })

  const itemInCart = inCart ? ' → In Cart' : null

  return (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="product__img" />
      <p>
        {new Intl.NumberFormat('en-LK', {
          style: 'currency',
          currency: 'LKR',
        }).format(product.price)}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  )
}

export default Product
