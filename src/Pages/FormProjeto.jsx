import * as C from "@chakra-ui/react";
import { Checkbox } from '@chakra-ui/react';

const FormProjeto = () => {
    return (
        <C.VStack
            spacing={5}
            align="stretch"
            p={5}
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
            bg="gray.50"
        >
            <C.Text fontSize="2xl" fontWeight="bold" mb={4} color="gray.700">
                Projeto
            </C.Text>

            <C.Input
                type="text"
                placeholder="Projeto"
                variant="outline"
                size="lg"
                borderColor="gray.300"
                _placeholder={{ color: "gray.500" }}
                _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
            />
            <C.Input
                type="text"
                placeholder="Área"
                variant="outline"
                size="lg"
                borderColor="gray.300"
                _placeholder={{ color: "gray.500" }}
                _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
            />
            <C.Input
                type="text"
                placeholder="Coordenador/Professor"
                variant="outline"
                size="lg"
                borderColor="gray.300"
                _placeholder={{ color: "gray.500" }}
                _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
            />

            <C.Stack spacing={3}>
                <Checkbox defaultChecked colorScheme="teal">
                    CETCC
                </Checkbox>
                <Checkbox defaultChecked colorScheme="teal">
                    CETIC
                </Checkbox>
                <Checkbox defaultChecked colorScheme="teal">
                    CETAFAJU
                </Checkbox>
                <Checkbox defaultChecked colorScheme="teal">
                    CETAFEST
                </Checkbox>
            </C.Stack>
        </C.VStack>
    );
};

export default FormProjeto;
