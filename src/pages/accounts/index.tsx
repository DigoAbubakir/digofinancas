import SidebarWithHeader from "../../components/Sidebar/SidebarWithHeader";
import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { CardDashboard } from "../../components/Cards/CardDashboard";
import { CardAccount } from "../../components/Cards/CardAccount";
import { NewAccountModal } from "../../components/Modals/NewAccount";
import { useAccounts } from "../../hooks/useGetAllAccounts";




export default function Accounts() {
    const { data: accounts } = useAccounts(1)

    return (
        <SidebarWithHeader>
            <Flex justifyContent={"flex-end"} mb={"15px"}>

                <NewAccountModal trigger={
                    onOpen => <Button variant={"solid"} colorScheme={"blue"} onClick={onOpen}>Adicionar Conta</Button>
                } />
            </Flex>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={0}>

                { accounts?.content.map(acc => (
                    <CardAccount amount={acc.amount} description={acc.description}/>
                )) }
                
            </SimpleGrid>
        </SidebarWithHeader>
    )
}