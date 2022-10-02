import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { uniqueNetwork } from "../functions/functions";
import { Heading, Box, Text, Image, Flex, Spacer, Tag, Center, Square } from "@chakra-ui/react";
import logo from "../assets/R.png";
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
      countE += station.empty_slots;
    });
  }

  return (
    <>
      <center>
        <Heading as="h1" size="4xl" fontFamily="fantasy" >
          {(`${params.id} STATIONS`).toUpperCase()}
        </Heading>
        <Image src={logo} width={300} m={4}></Image>
      </center>
      <Box bg="green.200" >
        <Flex>
        <Text fontSize="4xl" fontFamily="serif" p={4}>
          <p>Bicicletas Disponibles: {countB}</p>
          <p>Espacios Disponibles: {countE}</p>
        </Text>

        </Flex>
      </Box>
      {network != null
        ? network.stations.map((station) => (
            <Box key={station.name} bg="gray.200" p={4} m={4} borderRadius="lg">
              <strong>{station.name}</strong>
              <p>Fecha actualización: {station.timestamp}</p>
              {station.free_bikes || station.empty_slots != null ? (
                <Box>
                  <Flex>
                    <Center w="150px" bg="blue.200">
                      <Text>Bicicletas libres: {station.free_bikes}</Text>
                    </Center>
                    <Center w="150px" bg="yellow.200">
                      <Text>Espacios libres: {station.empty_slots}</Text>
                    </Center>
                    <Center w="170px" bg="green.200">
                      <Text> Total de espacios:{" "}
                      {station.free_bikes + station.empty_slots}</Text>
                    </Center>
                    
                    <Spacer />
                    <Tag p={2} colorScheme="green">
                      Available
                    </Tag>
                  </Flex>
                </Box>
              ) : (
                <Flex>
                   <Center w="300px" bg="red.200">
                      <Text> No está disponible actualmente</Text>
                    </Center>
                  
                  <Spacer />
                  <Tag p={2} colorScheme="red">
                    Unavailable
                  </Tag>
                </Flex>
              )}
            </Box>
          ))
        : "No hay estaciones"}
    </>
  );
};

export default Network;
