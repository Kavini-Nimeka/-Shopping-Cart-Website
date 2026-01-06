import { createContext, useState, useEffect, type ReactElement } from "react"

export type ProductType = {
            sku : string,
            name: string,
            price: number,
}

const initState: ProductType[] = []

// const initState: ProductType[] = [
//         {
//             "sku": "item001",
//             "name": "Widget",
//             "price": 9.99
//         },
//         {
//             "sku": "item002",
//             "name": "Premium Widget",
//             "price": 19.99
//         },
//         {
//             "sku": "item003",
//             "name": "Delux Widget",
//             "price": 29.99
//         }

//     ]

 export type UseProductsContextType = { products: ProductType[] } 
 
 const initContextState: UseProductsContextType = { products: []}

 const ProductsContext = createContext<UseProductsContextType>
 (initContextState)

 type ChildrenType = { children?: ReactElement  | ReactElement[]}

 export const ProductProvider = ({ children}: ChildrenType): 
    ReactElement => {
    const[products, setProducts] = useState<ProductType[]>
    (initState)

    useEffect(() =>{
        const fetchProduct = async(): Promise<ProductType[]> =>{
            const data = await fetch('http://localhost:3500/products').then(res => {
                return res.json()
            }).catch(err => {
                if(err instanceof Error) console.log(err.message)
            })
        return data
        }

        fetchProduct().then(products => setProducts(products))
    })

    return(
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
 }

 export default ProductsContext