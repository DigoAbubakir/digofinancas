import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import NextLink from "next/link";

export default function SimpleCard() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      minW="350px"
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'450px'} minW="400px" py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Bem-vindo</Heading>
          <Heading fontSize={'4xl'}>Faça seu login</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Lembrar</Checkbox>
                <Link color={'blue.400'}>Esqueceu sua senha?</Link>
              </Stack>



            </Stack>

          </Stack>
          <HStack justify={"center"} align="center" mt={5}>
            <NextLink style={{ width: "100%" }} href={"/dashboard"} passHref>
              <Button
                w={"100%"}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Entrar
              </Button>
            </NextLink>

          </HStack>


        </Box>
      </Stack>
    </Flex>
  );
}