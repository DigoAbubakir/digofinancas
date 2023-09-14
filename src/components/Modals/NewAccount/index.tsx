import {
    Button,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    LightMode,
    Input,
    VStack
} from '@chakra-ui/react'
import React from 'react';
import { ReactNode, useCallback } from "react";
import { InputFormik } from '../../Form/input';

interface ModalProps {
    onOk?: () => void;
    onCancel?: () => void;
    trigger: (onOpen?: () => void, onClose?: () => void) => ReactNode;
}

export function NewAccountModal({ onOk,onCancel,trigger}: ModalProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleCancel = useCallback(() => {
        onCancel?.();
        onClose();
    }, [onClose, onCancel])

    const handleOk = useCallback(() => {
        onClose();
    }, [onClose, onOk])

    return (
        <>
            {trigger(onOpen, onClose)}
            <Modal onClose={handleCancel} isOpen={isOpen} isCentered>
                <ModalOverlay
                    bg='blackAlpha.300'
                    backdropFilter='blur(10px)'
                />
                <ModalContent>
                    <ModalHeader>Cadastrar Nova Conta</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody justifyContent={"center"}>
                    </ModalBody>
                    <ModalFooter>
                        <VStack w={"full"}>
                            <Input placeholder='Basic usage' />
                            <HStack spacing={2}>
                            <LightMode>
                                <Button colorScheme={"blue"} onClick={handleCancel}>Cancelar</Button>
                                <Button colorScheme={"red"} onClick={handleOk}>Salvar</Button>
                            </LightMode>
                        </HStack>
                        </VStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
