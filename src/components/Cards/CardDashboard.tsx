import { Box, Circle, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FiHome } from "react-icons/fi";

type CardDashboardProps = {
    description?: string;
    value?: string;
    color?: string;
    icon?: IconType;
}

export function CardDashboard({icon, description, value, color} : CardDashboardProps) {
    return (
        <Box bg='white' minH={"auto"} p={"30px"} borderRadius={25} boxShadow="lg">
            <HStack justifyContent={"space-between"} align={"center"}>
                <VStack justify={"flex-start"} alignItems="start">
                    <Text fontFamily={"Roboto"} fontWeight={"normal"} fontSize={"1.2rem"}>{description}</Text>
                    <Text fontFamily={"Roboto"} fontWeight={"bold"} fontSize={"1.2rem"}>{value}</Text>
                </VStack>
                <Circle
                    bg={color}
                    textAlign="center"
                    size={"60px"}
                >
                    <Icon
                        fontSize="25"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                </Circle>
            </HStack>
        </Box>
    )
}