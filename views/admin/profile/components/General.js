// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        General Information
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
      As we progress in life, the need for better care becomes essential. Our health faces challenges as we age, and sometimes the people and systems we trust may fail to provide timely help. With the IoT-based Health Monitoring System, we ensure that care is constant, proactive, and always there for those we love. By offering real-time insights and support, we aim to ease the burden of uncertainty, helping people live healthier and more secure lives
      </Text>
      <SimpleGrid columns='2' gap='20px'>

       
      </SimpleGrid>
    </Card>
  );
}
