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
  title: string;
  stat: string;
}
const StatsCard = ({ title, stat }: StatsCardProps) => {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"md"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.300", "gray.400")}
      rounded={"lg"}
      bgColor={"white"}
      maxW={"max-content"}
      minW={"20vw"}
      m={"auto"}
    >
      <StatLabel fontWeight={"light"}>{title}</StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
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
        Dashboard:
      </chakra.h2>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={"Users:"} stat={"13"} />
        <StatsCard title={"Profiles:"} stat={"27"} />
        <StatsCard title={"Profiles over 18 years old:"} stat={"20"} />
      </SimpleGrid>
    </Box>
  );
};
