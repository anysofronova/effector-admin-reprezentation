import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

interface StatsCardProps {
  name: string;
  email: string;
  count: number;
  id: string;
}

const fakeData: StatsCardProps[] = [
  { name: "Anna", email: "some@some.com", count: 5, id: "1" },
  { name: "Vlad", email: "some@some.com", count: 2, id: "2" },
  { name: "Misha", email: "some@some.com", count: 4, id: "3" },
  { name: "Natasha", email: "some@some.com", count: 8, id: "4" },
  { name: "Stepa", email: "some@some.com", count: 3, id: "5" },
  { name: "Bublik", email: "some@some.com", count: 0, id: "6" },
];

const StatsCard = ({ name, email, count }: StatsCardProps) => {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"md"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.300", "gray.400")}
      rounded={"lg"}
      bgColor={"white"}
    >
      <StatLabel fontWeight={"light"} fontSize={"xl"}>
        {name}
      </StatLabel>
      <StatLabel fontWeight={"light"} fontSize={"md"}>
        {email}
      </StatLabel>
      <StatNumber fontWeight={"medium"} fontSize={"md"}>
        {count} {count > 1 ? "profiles" : "3 profile"}
      </StatNumber>
    </Stat>
  );
};

export const View = () => {
  return (
    <Box
      maxW="7xl"
      mx={"auto"}
      pt={5}
      px={{ base: 2, md: 8 }}
      bg={useColorModeValue("gray.100", "gray.900")}
      h={"91.5vh"}
    >
      <chakra.h2
        textAlign={"left"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"light"}
      >
        Users:
      </chakra.h2>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
        {fakeData.map(profile => (
          <StatsCard {...profile} key={profile.id} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
