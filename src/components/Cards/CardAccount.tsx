import { Box, Button, Circle, Flex, HStack, Icon, IconButton, Text, transition, VStack, Image } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { GiHamburgerMenu, GiTrashCan  } from "react-icons/gi";

type AccountProps = {
    id?: number;
    amount: number;
    description: string;
    accountType?: string;
    bankType?: string;
}

export function CardAccount({ id, amount, description, accountType, bankType }: AccountProps) {
    return (
        <Box
            bg='white'
            minH={"auto"}
            p={"15px"}
            borderRadius={25}
            h={"230px"}
            w={"380px"}
            _hover={{
                boxShadow: "lg",
                transform: 'translateY(-5px)',
                transitionDuration: '0.4s',
                transitionTimingFunction: "ease-in-out"
            }}
        >
            <Flex w={"100%"} justify={"flex-start"} justifyContent={"space-between "} >
                <HStack>
                    <Image
                        borderRadius="full"
                        boxSize={"40px"}
                        src="https://portalvhdshl0fsz1rywfcp.blob.core.windows.net/instituicoes-bancarias-logo/nubank.png"
                    />
                    <Text fontWeight={"bold"} fontSize={"17px"}>{description}</Text>
                </HStack>
                <IconButton
                    variant='outline'
                    color='black'
                    aria-label='Call Sage'
                    fontSize='20px'
                    icon={<GiHamburgerMenu />}
                />
            </Flex>
            <Flex justifyContent={"space-between"} marginTop={"25px"}>
                <Text fontWeight={"bold"}>Saldo atual</Text>
                <Text color={"green"} fontWeight={"bold"}>{amount}</Text>
            </Flex>
            <Flex justifyContent={"space-between"} marginTop={"6px"}>
                <Text fontWeight={"bold"}>Saldo previsto</Text>
                <Text color={"green"}>R$ 0,00</Text>
            </Flex>
            <Flex marginTop={"25px"} justify={"flex-start"}>
                <IconButton
                    color="red"
                    fontSize={"26px"}
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Send email'
                    _hover={{bg:"red.100"}}
                    icon={<GiTrashCan />}
                />
                
            </Flex>
        </Box>
    )
}
