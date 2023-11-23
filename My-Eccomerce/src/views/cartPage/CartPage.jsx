import React, { useState, useContext } from "react";

import { Button, TextField } from "@mui/material";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import { CartasContext } from "../../App";
import CardCarta from "../../components/card/Card";

import DeleteIcon from "@mui/icons-material/Delete";

import "./CartPage.css";

const initialState = {
  nombre: "",
  apellido: "",
  numero: "",
};

const cart = () => {
  const context = useContext(CartasContext);

  const [values, setValues] = useState(initialState);
  const [pedidoID, setPedidoID] = useState("");
  const [cartToSend, setCartToSend] = useState({});

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "pedidos"), {
      pedido:context.cartasPedidas, values
    });
    setPedidoID(docRef.id);
    setValues(initialState);
  };

  const OnDelete = (indexParam) => {
    const newArray = context.cartasPedidas.filter((carta, index) => index !== indexParam)
    context.setCartasPedidas(newArray)
  }

  return (
    <div className="ContainerPadre">
      <h1 className="Titulo">Carrito</h1>
      <div className="Main">
        <div className="Productos">
          {context.cartasPedidas.map((carta, index) => {
            return (
              <div key={index} className="carta">
                <div className="imgContainer">
                  <img src={carta.img} className="imgCarta" />
                </div>
                <div className="cardDataContainer">
                  <h4 className="h4">{carta.name}</h4>
                  <p className="tipo">Tipo: {carta.tipo}</p>
                  <p className="precio">{carta.precio}$</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="ListadoPedidos">
          <h1>Listado</h1>
          <div className="listadoContainer">
            {context.cartasPedidas.map((carta, index) => (
              <div className="containerCartaList" key={index}>
                <p className="nombreLista">{carta.name}</p>
                <Button onClick={() => OnDelete(index)}>
                  <DeleteIcon sx={{ color: "black", cursor:"pointer" }} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
     <form onSubmit={handleOnSubmit}>
        <TextField
          placeholder='Nombre'
          name='nombre'
          value={values.nombre}
          onChange={handleOnChange}
        />
        <TextField
          placeholder='Apellido'
          name='apellido'
          value={values.apellido}
          onChange={handleOnChange}
        />
        <TextField
          placeholder='Numero'
          name='numero'
          value={values.numero}
          onChange={handleOnChange}
        />
        <button>Enviar</button>
      </form> 
    </div>
  );
};

export default cart;
