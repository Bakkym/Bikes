import React, { useEffect, useState } from "react";
import { allNetworks } from "../functions/functions";


const Inicio = () => {
  const [networks, setNetworks] = useState([]);
  useEffect(() => {
    allNetworks(setNetworks);
  }, []);

  return (
    <>
      <h1>NETWORKS</h1>
       {networks.map((network) => (
            <div key={network.id}>
              <h2>{network.name}</h2>
              <h3> Compañia: {network.company}</h3>
              <h3>País: {network.location.country}</h3>
              


              <a href={`/network/stations/${network.id}`}>Stations</a>
            </div>
          ))} 


        
    </>
  );
};

export default Inicio;
