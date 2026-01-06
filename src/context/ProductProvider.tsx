import { createContext, useState, type ReactElement } from "react"

export type ProductType = {
  sku: string
  name: string
  price: number
}

const initState: ProductType[] = [
  {
    sku: "item001",
    name: "Tuberose- Eau De Perfume",
    price: 9500,
  },
  {
    sku: "item002",
    name: "Island Rose -Eau De Perfume",
    price: 9200,
  },
  {
    sku: "item003",
    name: "Mirissa Eau De Perfume",
    price: 9500,
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