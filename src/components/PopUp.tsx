import { Box, Button, ChakraProvider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";

const Popup: React.FC = () => {
  const { isOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Meu Pop-up</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Conteúdo do pop-up aqui.</p>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Fechar
              </Button>
              <Button variant="ghost">Salvar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </ChakraProvider>
  );
};

export default Popup;
