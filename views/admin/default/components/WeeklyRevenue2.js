// Chakra imports
import {
    Box,
    Button,
    Flex,
    Icon,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import Card from 'components/card/Card.js';
  // Custom components
  import BarChart from 'components/charts/BarChart'; // Assuming this is the bar chart component you're using
  import React from 'react';
  import {
    lineChartOptionsbloodpressure,
    lineChartDatabloodpressure,
  } from '../variables/chart3';
  import { MdBarChart } from 'react-icons/md';

  export default function WeeklyGlucose(props) {
    const { ...rest } = props;

    // Chakra Color Mode
    const textColor = useColorModeValue('secondaryGray.900', 'white');
    const iconColor = useColorModeValue('brand.500', 'white');
    const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
    const bgHover = useColorModeValue(
      { bg: 'secondaryGray.400' },
      { bg: 'whiteAlpha.50' },
    );
    const bgFocus = useColorModeValue(
      { bg: 'secondaryGray.300' },
      { bg: 'whiteAlpha.100' },
    );

    return (
      <Card align="center" direction="column" w="100%" {...rest}>
        <Flex align="center" w="100%" px="15px" py="10px">
          <Text
            me="auto"
            color={textColor}
            fontSize="xl"
            fontWeight="700"
            lineHeight="100%"
          >
            Blood Pressure
          </Text>
          <Button
            align="center"
            justifyContent="center"
            bg={bgButton}
            _hover={bgHover}
            _focus={bgFocus}
            _active={bgFocus}
            w="37px"
            h="37px"
            lineHeight="100%"
            borderRadius="10px"
            {...rest}
          >
            <Icon as={MdBarChart} color={iconColor} w="24px" h="24px" />
          </Button>
        </Flex>

        <Box h="240px" mt="auto">
          <BarChart
            chartData={lineChartDatabloodpressure} // Use blood glucose data here
            chartOptions={lineChartOptionsbloodpressure} // Use blood glucose chart options here
          />
        </Box>
      </Card>
    );
  }
