import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";

// hook to utilize products context in pages
export const useProductsContext = () => {
    const context = useContext(ProductsContext)

    // used for debugging
    if (!context) {
        throw Error('useProductsContext must be used inside a ProductsContextProvider')
    }
    return context
}