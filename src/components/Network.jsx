import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { uniqueNetwork } from "../functions/functions";

let countB = 0;
let countE = 0;
const Network = () => {
  const [network, setNetwork] = useState(null);

  const params = useParams();
  useEffect(() => {
    uniqueNetwork(params.id, setNetwork);
  }, []);


    if (network != null) {
      network.stations.map((station) => {
        countB += station.free_bikes;
        countE += station.empty_slots
      });
    }

  return (
    <>
      <h2>Bicicletas totales: {countB}</h2>
      <h2>Espacios totales: {countE}</h2>
      {network != null
        ? network.stations.map((station) => (
            <div key={station.name}>

              <h2>{station.name}</h2>
              <p>Fecha actualización: {station.timestamp}</p>
              {station.free_bikes || station.empty_slots != null ? (
                <div>
                  <p>Bicicletas libres: {station.free_bikes}</p>
                  <p>Espacios libres: {station.empty_slots}</p>
                  <p>
                    Total de espacios:{" "}
                    {station.free_bikes + station.empty_slots}
                  </p>
                </div>
              ) : (
                "No está disponible actualmente"
              )}
            </div>
          ))
        : "No hay estaciones"}
    </>
  );
};

export default Network;

