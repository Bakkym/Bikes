import axios from 'axios'

const allNetworks = async (state) => {
  const peticion = await axios.get('http://api.citybik.es/v2/networks')
  state(peticion.data.networks)
}

export {
  allNetworks
}