import axios from 'axios'

const allNetworks = async (state) => {
  const peticion = await axios.get('http://api.citybik.es/v2/networks')
  state(peticion.data.networks)
}

const uniqueNetwork = async (id, state) => {
  const peticion = await axios.get(`http://api.citybik.es/v2/networks/${id}`)
  state(peticion.data.network)

} 




export {
  allNetworks,
  uniqueNetwork
}

