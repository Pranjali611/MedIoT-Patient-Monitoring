import { border } from "@chakra-ui/system";
import { MdBorderColor } from "react-icons/md";

// Blood Glucose Chart Data
export const lineChartDataBloodGlucose = [
    {
      name: 'Blood Glucose',
      data: [85, 90, 130, 140, 180, 100, 120], // Adjusted data with both normal and diabetic values
    },
  ];

  // Blood Glucose Chart Options
  export const lineChartOptionsBloodGlucose = {
    chart: {
      type: 'bar',
      height: 350,
      zoom: { enabled: false },
    },
    xaxis: {
      categories: ['9AM', '12PM', '3PM', '6PM', '9PM', '12AM', '3AM'],
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',

        colors: {
          ranges: [
            {
              from: 70,
              to: 140,
              color: '#adebb3', // Normal range (70-140 mg/dL)
            },
            {
              from: 141,
              to: 200,
              color: '#FF0000', // Diabetic range (<140 mg/dL)
            },
          ],
        },
      },
    },
    stroke: {
      width: 2,
      curve: 'smooth',
    },
  };
