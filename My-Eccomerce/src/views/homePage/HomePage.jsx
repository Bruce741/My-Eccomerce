import React from 'react'
import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom'
// DB firestore 
import { db } from '../../firebase/firebaseConfig';

// Firestore 
import { collection, query, getDocs } from "firebase/firestore";

// Card
import CardCarta from '../../components/card/Card';

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
          return (
          <Link to={`DetailPage/${carta.id}`} key={carta.id}>
            <CardCarta carta={carta}/> 
          </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Home