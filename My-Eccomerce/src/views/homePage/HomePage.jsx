import React from 'react'
import { useEffect, useState } from 'react';

// DB firestore 
import { db } from '../../firebase/firebaseConfig';

// Firestore 
import { collection, query, getDocs } from "firebase/firestore";

// Card
import CardCarta from '../../components/card/card';

//CSS
import './HomePage.css'

const Home = () => {

  const [cartas, setCartas] = useState ([]);

  useEffect(() => {
    const getCartas = async () => {
      const q = query(collection(db, "cartas"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id})
      });
      setCartas(docs);
    };
    getCartas();
  },[]);

  return (
    <div>
      <h1>HomePage</h1>
      <div className='CardListContainer'>
        {cartas.map((carta)=> {
          return <CardCarta key={carta.id} carta={carta}/>
        })}
      </div>
    </div>
  )
}

export default Home