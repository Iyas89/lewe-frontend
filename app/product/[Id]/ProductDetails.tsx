"use client";

import SetColor from "@/app/components/Products/SetColor";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";

interface ProductDetailProps{
    product: any
}

export type CartProductType = {
  id: string,
  name: string,
  description: string,
  category: string,
  selectedImg: selectedImgType,
  quantity: number,
  price: number
}

export type selectedImgType = {
  color:string,
  colorCode: string,
  image: string
}

const Horizontal = () => {
    return <hr className="w-[40%] my-2"/>
}

const ProductDetails:React.FC<ProductDetailProps> = ({product}) => {


  const [cartProduct, setCartProduct] = useState<CartProductType>({
  id: product.id,
  name: product.name,
  description: product.description,
  category: product.category,
  selectedImg: {...product.images[0]},
  quantity:1,
  price: product.price,
  })

    const productRating = product.reviews.reduce((acc: number, item: any) => 
    item.rating + acc, 0) / product.reviews.length;



    const handleColorSelect = useCallback((value: selectedImgType)=> {
      setCartProduct((prev) => {
        return {...prev, selectedImg: value}
      })
    }, [cartProduct.selectedImg])


  return ( 
   <div 
    className="
    grid grid-cols-1 
    md:grid-cols-2
    gap-12
    ">
     <div>Image</div>
     <div className="flex flex-col gap-1 text-slate-500 text-sm">
         <h2 className="text-2xl font-medium text-slate-700">{product.name}</h2>
         <div className="flex flex-col gap-2">
           <div className="flex items-center gap-2">
              <Rating value={productRating} readOnly/>
              <div>{product.reviews.length} reviews</div>
           </div>
           <Horizontal/>
           <div className="text-justify">{product.description}</div>
           <Horizontal/>
           <div>
             <span className="font-semibold">CATEGORY:</span>{product.category}
           </div>
           <Horizontal/>
           
            <SetColor
             images={product.images}
             cartProduct={cartProduct}
             handleColorSelect={handleColorSelect}
            />
              
           
           <Horizontal/>
           <div>quantity</div>
           <Horizontal/>
           <div>add to cart</div>
         </div>
     </div>
   </div> 
    );
}
 
export default ProductDetails;