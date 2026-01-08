import React, { type ReactElement, memo } from 'react'
import type { ProductType } from '../context/ProductProvider'
import type{ ReducerAction, ReducerActionType, CartItemType } from '../context/CartProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faShare, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

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
      payload: { ...product, qty: 1 } as CartItemType,
    })

  const itemInCart = inCart ?'': null

  const content =
      <div className='box'>
        <div className='image'>
      <img src={img} alt={product.name} className="product__img" />
      <div className='icons'>
        <a href='#'><FontAwesomeIcon icon={faHeart} /></a>
        <a onClick={onAddToCart} className="cart-btn">
  <FontAwesomeIcon icon={faCartShopping} /></a>
        <a href='#'><FontAwesomeIcon icon={faShare} /></a>
      </div>
      <div className='content'>
      <h3 >{product.name}</h3>
      <div className='price'>
        {new Intl.NumberFormat('en-LK', {
          style: 'currency',
          currency: 'LKR',
        }).format(product.price)}
        {itemInCart}
        </div>
        </div>
      </div>
      </div>

    return content
}

function areProductsEqual({ product: prevProduct , inCart:
    prevInCart}: PropsType, {product: nextProduct, inCart:
    nextInCart}: PropsType){
        return(
            Object.keys(prevProduct).every(key => {
                return prevProduct[key as keyof ProductType]===
                nextProduct[key as keyof ProductType]
            }) && prevInCart === nextInCart
        )
    }
    
const MemoizedProduct = memo<typeof Product> (Product,
    areProductsEqual)

export default MemoizedProduct
