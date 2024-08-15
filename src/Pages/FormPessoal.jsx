import * as C from "@chakra-ui/react";
import { useState } from "react";

const FormPessoal = () => {
    const [gender, setGender] = useState("");

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
                Pessoal
            </C.Text>

            <C.Input
                type="text"
                placeholder="Nome"
                variant="outline"
                size="lg"
                borderColor="gray.300"
                _placeholder={{ color: "gray.500" }}
                _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
            />
            <C.Input
                type="text"
                placeholder="CPF"
                variant="outline"
                size="lg"
                borderColor="gray.300"
                _placeholder={{ color: "gray.500" }}
                _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
            />
            <C.Input
                type="email"
                placeholder="E-mail"
                variant="outline"
                size="lg"
                borderColor="gray.300"
                _placeholder={{ color: "gray.500" }}
                _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
            />

            <C.RadioGroup value={gender} onChange={setGender}>
                <C.Stack direction="row" spacing={4}>
                    <C.Radio
                        value="H"
                        size="lg"
                        colorScheme="teal"
                        borderColor="gray.300"
                    >
                        Masculino
                    </C.Radio>
                    <C.Radio
                        value="M"
                        size="lg"
                        colorScheme="teal"
                        borderColor="gray.300"
                    >
                        Feminino
                    </C.Radio>
                </C.Stack>
            </C.RadioGroup>
        </C.VStack>
    );
};

export default FormPessoal;
