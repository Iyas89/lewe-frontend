import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import {MdFacebook} from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
    return ( <footer className="
    bg-slate-700
    text-slate-200
    text-sm
    mt-16">
         <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pg-8">
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Lewe Category</h3>
                    <Link href='#'>Short</Link>
                    <Link href='#'>Raquet</Link>
                    <Link href='#'>Remeras</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Servicios</h3>
                    <Link href='#'>Comenecate con nosotros</Link>
                    <Link href='#'>devolacion</Link>
                </FooterList>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-base font-bold mb-2">Sobre nosotros</h3>
                <p className="mp-2"></p>
                <p>&copy; {new Date().getFullYear()} Lewe Shop</p>
                </div>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Seguiernos</h3>
                    <div className="flex gap-2"></div>
                    <Link href='#'>
                        <MdFacebook size={24}/>
                    </Link>
                    <Link href='#'>
                        <AiFillInstagram size={24}/>
                    </Link>
                </FooterList>
                
            </div>
         </Container>
    </footer> );
}
 
export default Footer;