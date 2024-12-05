// Heart Rate Chart Data
export const lineChartDataHeartRate = [
  {
    name: 'Heart Rate',
    data: [ 78, 59, 80, 76, 100, 82, 78], // Example heart rate data
  },
];

// Heart Rate Chart Options
export const lineChartOptionsHeartRate = {
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
            to: 59,
            color: '#FF0000', // low range
          },
          {
              from: 60,
              to: 99,
              color: '#adebb3', // normal range
            },
            {
                from: 100,
                to: 100,
                color: '#ffb343', // middle range
              },
            {
              from: 101,
              to: 150,
              color: '#FFA500', // high range
            },
          {
            from: 131,
            to: 200,
            color: '#FF0000', // Internal styling for blue color when value is 50 or below
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
