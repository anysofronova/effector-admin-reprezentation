import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { RouteInstance } from "atomic-router";
import { Link as LinkTo } from "atomic-router-react";

import { SignInPage } from "@/pages/auth/signIn";
import { SignUpPage } from "@/pages/auth/signUp";
import { DashboardPage } from "@/pages/dashboard";

const Links: { title: string; path: RouteInstance<any> }[] = [
  { title: "Profiles", path: SignUpPage.route },
  { title: "Dashboard", path: DashboardPage.route },
  { title: "Users", path: SignUpPage.route },
];

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={useColorModeValue("gray.200", "gray.900")} px={{ base: 2, md: 8 }}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        w={"100%"}
      >
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack
          spacing={8}
          alignItems={"center"}
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
        >
          <Avatar
            size={"md"}
            src={
              "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }
            display={{ base: "none", md: "flex" }}
          />
        </HStack>
        <Stack direction={"row"} spacing={6}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map(link => (
              <LinkTo key={link.title} to={link.path}>
                <Text
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: "gray.400",
                    color: "white",
                  }}
                >
                  {link.title}
                </Text>
              </LinkTo>
            ))}
          </HStack>
          <Flex justify={"flex-start"}>
            <LinkTo to={SignInPage.route}>
              <Text
                fontSize={"sm"}
                fontWeight={600}
                minW={"max-content"}
                px={"1rem"}
                py={".5rem"}
                borderRadius={"5px"}
                cursor={"pointer"}
              >
                Sign In
              </Text>
            </LinkTo>

            <LinkTo to={SignUpPage.route}>
              <Text
                fontSize={"sm"}
                fontWeight={600}
                minW={"max-content"}
                color={"white"}
                cursor={"pointer"}
                px={"1rem"}
                py={".5rem"}
                bg={"gray.500"}
                _hover={{
                  bg: "gray.600",
                }}
                borderRadius={"5px"}
              >
                Sign Up
              </Text>
            </LinkTo>
          </Flex>
        </Stack>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map(link => (
              <LinkTo key={link.title} to={link.path}>
                {link.title}
              </LinkTo>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
