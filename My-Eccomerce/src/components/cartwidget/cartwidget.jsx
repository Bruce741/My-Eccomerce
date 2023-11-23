import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { CartasContext } from "../../App";


const cartwidget = () => {
  const context = useContext(CartasContext);

  return (
    <div>
      <Badge badgeContent={context.cartasPedidas.length} color="primary" showZero>
      <ShoppingCartIcon/>
      </Badge>
    </div>
  )
}

export default cartwidget