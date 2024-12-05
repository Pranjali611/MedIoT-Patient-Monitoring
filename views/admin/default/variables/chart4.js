// Temperature Chart Data
export const lineChartDataTemperature = [
    {
      name: 'Temperature',
      data: [ 96, 98, 80, 94, 95, 100, 98], // Example heart rate data
    },
  ];

  // Temperature Chart Options
  export const lineChartOptionsTemperature = {
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
                  to: 99,
                  color: '#adebb3', // normal
                },
                {
                  from: 94,
                  to: 94,
                  color: '#ffb343', // mid
                },
              {
                from: 100,
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
