import SidebarWithHeader from "../../components/Sidebar/SidebarWithHeader";
import { Box } from "@chakra-ui/react";
import React from "react";
import { CardDashboard } from "../../components/Cards/CardDashboard";
import { CardAccount } from "../../components/Cards/CardAccount";




export default function Accounts() {
    return (
        <SidebarWithHeader>
            <Box minH={"300px"} minW="300px">
                
                <CardAccount />

            </Box>
        </SidebarWithHeader>
    )
}