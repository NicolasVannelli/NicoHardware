import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import './ItemDetail.css';

const ItemDetail = ({id, nombre, stock, precio, img, descripcion}) => {
  //Se crea un estado local con la cantidad de productos que agregé 
  const [agregarCantidad, setAgregarCantidad]  = useState(0);
  const {agregarAlCarrito} = useContext(CarritoContext);
  //Se crea una función que maneja la cantidad
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //Acá se crea un objeto con el item y la cantidad
    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad);
  }
  return (
    <div className='contenedorItem'>
        <h2>{nombre} </h2>
        <p>${precio} </p>
        <p>ID:{id} </p>
        <p>Stock:{stock}</p>
        <p>{descripcion}</p>
        <img src={img} alt={nombre} />
        {
          agregarCantidad > 0 ? (<Link className='btn' to="/cart">Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
    </div>
  )
}

export default ItemDetail