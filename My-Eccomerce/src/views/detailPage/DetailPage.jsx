import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// DB firestore
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

// Card
import CardCarta from "../../components/card/Card";
import Footer from "../../components/Footer/Footer";

// CSS
import "./DetailPage.css";

const DetailPage = () => {
  const [cartaData, setCartaData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getCartas = async () => {
      const q = query(collection(db, "cartas"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setCartaData(docs);
    };
    getCartas();
  }, []);

  return (
    <div>
      <div className="DetailPageDiv">
        {cartaData.map((carta) => <CardCarta carta={carta} key={carta.id} />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default DetailPage;
