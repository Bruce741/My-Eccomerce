import React, { useState, useContext } from "react";

import { Button, TextField } from "@mui/material";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import { CartasContext } from "../../App";
import CardCarta from "../../components/card/Card";

import DeleteIcon from "@mui/icons-material/Delete";

import "./CartPage.css";
import DialogCard from "./DiaLog/DialogCard";
import toast from "react-hot-toast";

const cart = () => {
  const context = useContext(CartasContext);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const OnDelete = (indexParam) => {
    const newArray = context.cartasPedidas.filter(
      (carta, index) => index !== indexParam
    );
    context.setCartasPedidas(newArray);
  };

  const onClear = () => {
    context.setCartasPedidas([]);
    toast.success("Carrito vaciado")
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
          <Button onClick={onClear}>Limpiar carrito</Button>
          <div className="listadoContainer">
            {context.cartasPedidas.map((carta, index) => (
              <div className="containerCartaList" key={index}>
                <p className="nombreLista">{carta.name}</p>
                <Button onClick={() => OnDelete(index)}>
                  <DeleteIcon sx={{ color: "black", cursor: "pointer" }} />
                </Button>
              </div>
            ))}
          </div>
          <Button onClick={() => setIsDialogOpen(true)}>
            Finalizar Compra
          </Button>
        </div>
      </div>
      {isDialogOpen && (
        <DialogCard
          isOpen={isDialogOpen}
          setIsOpen={setIsDialogOpen}
          pedido={context.cartasPedidas}
        />
      )}
    </div>
  );
};

export default cart;
