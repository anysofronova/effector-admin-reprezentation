import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as LinkTo } from "atomic-router-react";

import { SignUpPage } from "@/pages/auth/signUp";

export const View = () => {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"xl"} w={"md"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"gray.400"}
                color={"white"}
                _hover={{
                  bg: "gray.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <LinkTo to={SignUpPage.route}>
                <Box textAlign={"center"}>
                  Don&apos;t have an account?
                  <Text color={"gray.400"}>Sing up</Text>
                </Box>
              </LinkTo>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
