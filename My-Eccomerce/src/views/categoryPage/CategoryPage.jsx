import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CategoryPage.css'

// DB firestore 
import { db } from '../../firebase/firebaseConfig';

// Firestore 
import { collection, query, getDocs, where } from "firebase/firestore";

// Card
import CardCarta from '../../components/card/Card';

const CategoryPage = () => {
  const [cartasData, setCartasData] = useState([]);

  const { tipo } = useParams();


  useEffect(() => {
    const getCartas = async () => {
      const q = query(collection(db, "cartas"), where("tipo", "==", tipo));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id})
      });
      setCartasData(docs);
    };
    getCartas();
  },[]);




  return (
    <div className='Contenedor'>
        {cartasData.map((carta)=> {
        return (
          <CardCarta carta={carta} key={carta.id}/> 
        )
      })}
    </div>
  )
}

export default CategoryPage