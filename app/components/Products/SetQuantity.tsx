"use client"

import { CartProductType } from "@/app/product/[Id]/ProductDetails";

interface setQtyProps{
    cartCounter?: boolean;
    cartProduct: CartProductType;
    handleQtyIncrease: () => void;
    handleQtyDecrease: () => void;
}



const SetQuantity:React.FC<setQtyProps> = ({
    cartCounter, cartProduct, handleQtyIncrease, handleQtyDecrease
}) => {
    return ( <div>

    </div> );
}
 
 