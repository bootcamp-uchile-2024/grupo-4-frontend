/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export function CartLink(){
    const cartItems = useSelector((state:any) => state.cart.items);
    const totalItems = cartItems.reduce((total: any, item: any) => total + item.quantity, 0);

    return (
        <Link to={"/carrito"}>
            Carrito ({totalItems})
        </Link>
    )
}