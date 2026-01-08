import { createContext, useState, type ReactElement } from "react"

export type ProductType = {
  sku: string
  name: string
  price: number
}

const initState: ProductType[] = [
  {
    sku: "item001",
    name: "Tuberose - Eau De Perfume",
    price: 9500,
  },
  {
    sku: "item002",
    name: "Island Rose - Eau De Perfume",
    price: 9200,
  },
  {
    sku: "item003",
    name: "Mirissa Beach Eau - De Perfume",
    price: 9500,
  },
  {
    sku: "item004",
    name: "Royal Lotus - Eau De Perfume",
    price: 9200,
  },
  {
    sku: "item005",
    name: "Moonlight Blooms - Eau De Perfume",
    price: 14900,
  },
  {
    sku: "item006",
    name: "Blue Men's Eau De Perfume",
    price: 11000,
  },
]

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }


export const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductProvider = ({ children }: ChildrenType): ReactElement => {
  const [products] = useState<ProductType[]>(initState)

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductProvider  