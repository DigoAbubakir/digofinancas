import SidebarWithHeader from "@/src/components/Sidebar/SidebarWithHeader";
import { Box, SimpleGrid } from "@chakra-ui/react";

export default function Dashboard() {
    return (
        <SidebarWithHeader>
            <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
            </SimpleGrid>
        </SidebarWithHeader>
    )
}