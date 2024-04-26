import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      try {
        const { data } = await axios(url);
        setData(data);
      } catch (e) {
        console.error(e);
      }
    };
    GetData();
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {data.map(({ id, name, username, email, address }) => (
          <Card key={id} name={name} username={username} email={email} address={address.street}/>
        ))}
      </div>
    </div>
  ); 
};

export default Cards;