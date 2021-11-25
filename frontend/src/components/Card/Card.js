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
const Card = ({ conexoes, ...props }) => {
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
            Conexões
          </chakra.h1>
          <Table variant="simple" style={{width: 700, fontSize: 18}}>
            <Thead>
              <Tr>
                <Th>Conexão</Th>
                <Th>Contratante</Th>
                <Th>Prestador</Th>
              </Tr>
            </Thead>
            <Tbody>
            {conexoes.map(conexao => (
                <Tr>
                  <Td>
                    {console.log(conexao)}{conexao.Conexao}</Td>
                  <Td>{conexao.Contratante}</Td>
                  <Td>{conexao.Prestador}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Flex>
  );
};

export default Card;