// SpO2 Chart Data
export const lineChartDataSpO2 = [
    {
      name: 'SpO2',
      data: [98, 90, 95, 100, 110, 99, 94],
    },
  ];

  // SpO2 Chart Options
  export const lineChartOptionsSpO2 = {
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
                to: 93,
                color: '#FF0000', // low
              },
              {
                  from: 95,
                  to: 100,
                  color: '#adebb3', // normal
                },
                {
                  from: 94,
                  to: 94,
                  color: '#ffb343', // mid
                },
              {
                from: 101,
                to: 150,
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
