import React, { useEffect, useState } from "react";
import { allNetworks } from "../functions/functions";
import { Heading, Box, Flex, Text, Button, Image, Icon } from "@chakra-ui/react";
import { GrBike } from "react-icons/gr";
import logo from "../assets/Olga_PNG.png";

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
      {networks != null
        ? networks.map((network) => (
            <Box key={network.id} bg="gray.100" p={4} m={4} borderRadius="lg">
              <Flex>
                <Text fontSize="2x1">
                  <strong>{network.name} </strong>
                  <Icon as={GrBike}/>
                  <p>Company: {network.company}</p>
                  <p>Country: {network.location.country} </p>
                  <p>City: {network.location.city}</p>
                  <a href={`/network/stations/${network.id}`}>
                    <Button mt={2} colorScheme="purple">
                      Stations
                    </Button>
                  </a>
                </Text>
              </Flex>
            </Box>
          ))
        : "No se encontraron networks"}
    </>
  );
};

export default Inicio;
