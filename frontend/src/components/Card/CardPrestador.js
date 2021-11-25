import React from "react";
import {
  chakra, Box, Flex, useColorModeValue, Link, Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

import { AiOutlineTwitter, AiOutlineLink, } from "react-icons/ai";
const CardPrestador = ({prestadores, ...props}) => {
  return (
    <Flex
      bg="black"
      borderRadius="20"
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      margin="20px"
    >
      <Box
        style={{width: 700}}
        w="full"
        maxW="sm"
        mx="auto"
        px={10}
        py={20}
        bg="black"
        color="white"
        shadow="md"
        rounded="md"
      >
        <Box>
          <chakra.h1
            fontSize="lg"
            fontWeight="bold"
            mt={2}
            color={useColorModeValue("gray.800", "white")}
          >
            Prestadores
          </chakra.h1>
          <Table variant="simple" style={{width: 700, fontSize: 18}}>
            <Thead>
              <Tr>
                <Th>Prestador</Th>
                <Th>Email</Th>
                <Th>Categoria</Th>
                <Th>Estrelas</Th>
              </Tr>
            </Thead>
            <Tbody>
            {prestadores.map(prestador => (
                <Tr>
                  <Td>{prestador.Prestador}</Td>
                  <Td>{prestador.Email}</Td>
                  <Td>{prestador.Categoria}</Td>
                  <Td>{prestador.Estrelas}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Flex>
  );
};

export default CardPrestador;