import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import React, { useState} from "react";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import toast from "react-hot-toast";

const initialState = {
  nombre: "",
  apellido: "",
  numero: "",
};

const DialogCard = ({ isOpen, setIsOpen, pedido }) => {
  const [values, setValues] = useState(initialState);

  const [pedidoID, setPedidoID] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "pedidos"), {
      pedido,
      values,
    });
    setPedidoID(docRef.id);
    return toast.success(`Gracias por su compra, su id es:${docRef.id}`)
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle>Complete con su informacion</DialogTitle>
      <DialogContent>
        <form onSubmit={handleOnSubmit}>
          <TextField
            placeholder="Nombre"
            name="nombre"
            value={values.nombre}
            onChange={handleOnChange}
          />
          <TextField
            placeholder="Apellido"
            name="apellido"
            value={values.apellido}
            onChange={handleOnChange}
          />
          <TextField
            placeholder="Numero"
            name="numero"
            value={values.numero}
            onChange={handleOnChange}
          />
          <Button onClick={handleOnSubmit}>Enviar</Button>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogCard;
