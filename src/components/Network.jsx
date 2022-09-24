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
          <p>{station.name}</p>
          </div>

        ))

  
      
     
    ) : ('No hay estaciones')}
    
    </>
  )
}

export default Network