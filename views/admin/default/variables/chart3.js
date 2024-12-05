// Blood Pressure Chart Data
export const lineChartDatabloodpressure = [
    {
      name: 'bloodpressure',
      data: [55, 90, 95, 100, 110, 130, 120],
    },
  ];

  // Blood Pressure Chart Options
  export const lineChartOptionsbloodpressure = {
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
        columnWidth: '40%',
        colors: {
          ranges: [
            {
              from: 0,
              to: 60,
              color: '#FF0000', // low
            },
            {
                from: 60,
                to: 129,
                color: '#adebb3', // normal
              },
              {
                from: 130,
                to: 130,
                color: '#ffb343', // mid
              },
            {
              from: 131,
              to: 200,
              color: '#FF0000', // high
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
