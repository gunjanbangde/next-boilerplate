import React from "react";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalWrapper: React.FC<Props> = ({ isOpen, children, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg="rgba(50,50,50,0.4)"
        css={{ backdropFilter: "blur(6px)" }}
      />
      <ModalContent
        alignItems="center"
        maxW="none"
        bg="transparent"
        boxShadow="none"
      >
        {children}
      </ModalContent>
    </Modal>
  );
};

export default ModalWrapper;
