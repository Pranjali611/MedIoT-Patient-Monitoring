import {
    Avatar,
    Box,
    Flex,
    FormLabel,
    Icon,
    Select,
    SimpleGrid,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useFirebaseData } from './firebase'; // Importing your Firebase hook
  import Usa from 'assets/img/dashboards/usa.png'; // For the USA flag image
  import MiniCalendar from 'components/calendar/MiniCalendar';
  import MiniStatistics from 'components/card/MiniStatistics';
  import IconBox from 'components/icons/IconBox';

  import React from 'react';
  import {
    MdAddTask,
    MdAttachMoney,
    MdBarChart,
    MdFileCopy,
  } from 'react-icons/md';
  import CheckTable from 'views/admin/default/components/CheckTable';
  import ComplexTable from 'views/admin/default/components/ComplexTable';
  import DailyTraffic from 'views/admin/default/components/DailyTraffic';
  import PieCard from 'views/admin/default/components/PieCard';
  import Tasks from 'views/admin/default/components/Tasks';
  import TotalSpent from 'views/admin/default/components/TotalSpent';
  import WeeklyRevenue from 'views/admin/default/components/WeeklyRevenue';
  import WeeklyRevenue1 from 'views/admin/default/components/WeeklyRevenue1';
  import WeeklyRevenue2 from 'views/admin/default/components/WeeklyRevenue2';
  import WeeklyRevenue3 from 'views/admin/default/components/WeeklyRevenue3';
  import {
    columnsDataCheck,
    columnsDataComplex,
  } from 'views/admin/default/variables/columnsData';
  import tableDataCheck from 'views/admin/default/variables/tableDataCheck.json';
  import tableDataComplex from 'views/admin/default/variables/tableDataComplex.json';
  import { FaHeart } from "react-icons/fa";
  import { BiSolidDonateBlood } from "react-icons/bi";
  import { MdBloodtype } from "react-icons/md";
  import { FaTemperatureHigh } from "react-icons/fa";
  import { GiHealthNormal } from "react-icons/gi";
  import { SiOxygen } from "react-icons/si";
  export default function UserReports() {
    const { heartRate, spO2, bloodPressure, bloodGlucose, ecg,temperature } = useFirebaseData(); // Destructuring Firebase data

    // Chakra Color Mode
    const brandColor = useColorModeValue('brand.500', 'white');
    const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

    return (
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
          gap="20px"
          mb="20px"
        >
          {/* Heart Rate Statistic */}
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                    <FaHeart />
                }
              />
            }
            name="Heart Rate"
            value={<>{heartRate ? `${heartRate} bpm` : 'Loading...'}</>}
          />

          {/* Blood Pressure Statistic */}
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                    <BiSolidDonateBlood />
                }
              />
            }
            name="Blood Pressure"
            value={<>{bloodPressure ? `${bloodPressure} mmHg` : 'Loading...'}</>}
          />

          {/* SpO2 Statistic */}
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                    <SiOxygen />
                }
              />
            }
            name="SpO2"
            value={<>{spO2 ? `${spO2} %` : 'Loading...'}</>}
          />

          {/* Blood Glucose Statistic */}
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                    < MdBloodtype />
                }
              />
            }
            name="Blood Glucose"
            value={<>{bloodGlucose ? `${bloodGlucose} mg/dL` : 'Loading...'}</>}
          />

          {/* Temperature Statistic */}
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                    <FaTemperatureHigh />
                }
              />
            }
            name="Temperature"
            value={<>{temperature ? `${temperature} °C` : 'Loading...'}</>}
          />

          {/* ECG Statistic */}
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                    <GiHealthNormal />
                }
              />
            }
            name="ECG"
            value={<>{ecg ? `${ecg} bpm` : 'Loading...'}</>}
          />
        </SimpleGrid>

        {/* Rest of the component unchanged */}
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
          <TotalSpent />
          <WeeklyRevenue />
          <WeeklyRevenue1 />
          <WeeklyRevenue2 />
          <WeeklyRevenue3/>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
            <MiniCalendar h="100%" minW="100%" selectRange={false} />
          </SimpleGrid>
        </SimpleGrid>
      </Box>
    );
  }
