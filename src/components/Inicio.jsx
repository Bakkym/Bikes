import React, {useEffect, useState} from 'react'
import { allNetworks } from '../functions/functions'

const Inicio = () => {
  const [networks, setNetworks] = useState(null)
  useEffect(()=>{
    allNetworks(setNetworks)

  },[])
  return (
    <>
      {networks != null ? ((
        networks.map(network => (
          <div key={network.id}>
            <a href={`/network/${network.id}`}>{network.company}</a>
          </div>
        ))
      )) : ('No hay networks')}
    
    
    
    
    </>
  )
}

export default Inicio
