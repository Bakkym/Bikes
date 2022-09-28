import React, { useEffect, useState } from "react";
import { allNetworks } from "../functions/functions";
import {
  Heading,
  Box,
  Flex,
  Button,
  Image,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import { GrBike } from "react-icons/gr";
import logo from "../assets/Olga_PNG.png";
import './Inicio.css'

const Inicio = () => {
  const [networks, setNetworks] = useState([]);
  useEffect(() => {
    allNetworks(setNetworks);
  }, []);

  return (
    <>
      <center>
        <Heading as="h1" size="lg">
          NETWORKS
        </Heading>
        <Image src={logo} width={300} m={4}></Image>
      </center>

      <div class="cards">
        {networks != null
          ? networks.map((network) => (
            <div class='card'>
              <Box
                key={network.id}
                p={4}
                m='8'
                borderRadius="lg"
                width="30rem"
                bg='gray.100'
              >
                <Flex>
                  <text >
                    <strong>{network.name} </strong>
                    <Icon as={GrBike} />
                    <p>Company: {network.company}</p>
                    <p>Country: {network.location.country} </p>
                    <p>City: {network.location.city}</p>
                    <a href={`/network/stations/${network.id}`}>
                      <Button mt={2} colorScheme="purple">
                        Stations
                      </Button>
                    </a>
                  </text>
                  <Spacer />
                  <Image
                    boxSize="8rem"
                    src={`https://countryflagsapi.com/png/${network.location.country}`}
                  ></Image>
                </Flex>
              </Box>
            </div>
            ))
          : "No se encontraron networks"}
      </div>
    </>
  );
};

export default Inicio;
