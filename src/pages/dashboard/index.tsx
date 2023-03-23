import { CardDashboard } from "@/src/components/Cards/CardDashboard";
import SidebarWithHeader from "@/src/components/Sidebar/SidebarWithHeader";
import { Box, Circle, Heading, HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { FiDatabase,FiChevronsDown, FiChevronsUp, FiArchive } from "react-icons/fi";

export default function Dashboard() {
    return (
        <SidebarWithHeader>
            <Heading mb={5} ml={1}>Dashboard</Heading>
            <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px" >
                
                <CardDashboard description="Valor Total" value="R$ 600,00" color="blue.400" icon={FiDatabase} />
                <CardDashboard description="Valores a Receber" value="R$ 1500,00" color="green.400" icon={FiChevronsUp} />
                <CardDashboard description="Valores a Pagar" value="R$ 200,00" color="red.400" icon={FiChevronsDown} />
                <CardDashboard description="Valor Guardado" value="R$ 1000,00" color="purple.400" icon={FiArchive} />

            </SimpleGrid>
        </SidebarWithHeader>
    )
}