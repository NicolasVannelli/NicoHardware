import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

    if(cantidadTotal === 0 ) {
        return (
            <><div className="compras">
                <h2>Agregue productos a su carrito</h2>
                <Link className="btn2" to="/"> Ir a la tienda </Link>
            </div>
            </>
        )
    }

  return (
    <div>
        {
            carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
        }
        <div className="compras">
            <h3>Total: $ {total} </h3>
            <h3>Cantidad Total: {cantidadTotal} </h3>
            <button onClick={()=> vaciarCarrito()}> Vaciar Carrito</button>
            <Link to="/checkout"> Finalizar Compra </Link>
        </div>
    </div>
  )
}

export default Cart