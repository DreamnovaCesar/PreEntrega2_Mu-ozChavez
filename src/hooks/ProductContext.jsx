import { createContext, useState } from "react";

let ProductContext = createContext();

export function CartProvider({children}){

    
    return (
        <ProductContext.Provider value={{item : 1}}>{children}</ProductContext.Provider>
    )
}
export default ProductContext