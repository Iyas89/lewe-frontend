import { products } from "@/Utiles/products"
import Container from "./components/Container"
import HomeBanner from "./components/HomeBanner"
import { trancateText } from "@/Utiles/trancateTexte"
import ProductCard from "./components/Products/ProductCard"

 
export default function Home() {
  return (
     <div className="pg-8">
       <Container>
        <div>
          <HomeBanner/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 x1:grid-cols-5 2x1:grid-cols-6 gap-8">
          {products.map((product: any) =>{
            return <ProductCard data={product}/>
          })}
        </div>
       </Container>
     </div>
  )
}
