import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { uniqueNetwork } from '../functions/functions'

const Network = () => {
  const [network, setNetwork] = useState(null)


  const params = useParams()
  useEffect(()=>{
    uniqueNetwork(params.id, setNetwork)
  },[])

  return (
    <>
    {network != null ? (
        network.stations.map(station => (
          <div key = {station.name}>
          <h2>{station.name}</h2>
          <p>Fecha actualización: {station.timestamp}</p>
          <p>Bicicletas libres: {station.free_bikes}</p>
          <p>Espacios libres: {station.empty_slots}</p>
          <p>Total de espacios: {station.free_bikes + station.empty_slots}</p>
          </div>

        ))
    ) : ('No hay estaciones')}
    </>

  )
}

export default Network