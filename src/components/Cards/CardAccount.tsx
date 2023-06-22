import { Box, Button, Circle, Flex, HStack, Icon, IconButton, Text, transition, VStack } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";

type CardDashboardProps = {
    description?: string;
    value?: string;
    color?: string;
    icon?: IconType;
}

export function CardAccount({ icon, description, value, color }: CardDashboardProps) {
    return (
        <Box
            bg='white'
            minH={"auto"}
            p={"15px"}
            borderRadius={25}
            h={"200px"}
            w={"350px"}

            
            _hover={{
                boxShadow: "lg",
                transform: 'translateY(-5px)',
                transitionDuration: '0.4s',
                transitionTimingFunction: "ease-in-out"
            }}
        >
            <Flex w={"100%"} justify={"flex-start"} justifyContent={"space-between "} >
                <HStack>
                    <Box bg={"tomato"} h={"50px"} w={"50px"} rounded={"full"} />
                    <Text fontWeight={"bold"} fontSize={"17px"}>Banco Nubank</Text>
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
                <Text  color={"green"} fontWeight={"bold"}>R$ 30,00</Text>
            </Flex>
            <Flex justifyContent={"space-between"} marginTop={"6px"}>
                <Text fontWeight={"bold"}>Saldo previsto</Text>
                <Text color={"green"}>R$ 0,00</Text>
            </Flex>
        </Box>
    )
}