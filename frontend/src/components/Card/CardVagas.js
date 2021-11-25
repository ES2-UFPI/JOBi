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
const CardVagas = ({tituloTable, vagasFechadas, ...props }) => {
  return (
    <Flex
      bg="black"
      borderRadius="20"
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
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
            {tituloTable}
          </chakra.h1>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Titulos</Th>
                <Th>Descricao</Th>
                <Th>Remuneracao</Th>
                <Th>Localizacao</Th>
              </Tr>
            </Thead>
            <Tbody>
              {vagasFechadas.map(vaga => {
                <Tr>
                  <Td>{vaga.Titulos}</Td>
                  <Td>{vaga.Descricao}</Td>
                  <Td>{vaga.Remuneracao}</Td>
                  <Td>{vaga.Localizacao}</Td>
                </Tr>
              })}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Flex>
  );
};

export default CardVagas;