
import { useSelector } from "react-redux";


export function CheckOut() {
    const cartItems = useSelector((state : any) => state.cart.items);
    const totalPrice = cartItems.reduce((total: number, item: { price: number; quantity: number; }) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Resumen de Compra</h2>
            <ul>
                {cartItems.map((item: { id: number; name: string; quantity: number; price: number }) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} x ${item.price} = ${item.price * item.quantity}
                    </li>
                ))}
            </ul>
            <p>Total a pagar: ${totalPrice}</p>
        </div>
    );
}