const usersatisfaction = {
  ratings: [
    { rating: 1, count: 15 },
    { rating: 2, count: 35 },
    { rating: 3, count: 200 },
    { rating: 4, count: 500 },
    { rating: 5, count: 600 },
  ],
};

// console.log(Object.keys(usersatisfaction.ratings[0])[0]); // rating
// console.log(Object.keys(usersatisfaction.ratings[0])[1]); // count
// console.log(Object.values(usersatisfaction.ratings)); // [ 1 , 15 ]
let arr = Object.values(usersatisfaction.ratings); // [ 1 , 15 ]

// arr.map((e) => {
//   console.log(e.count);
//   console.log(e.rating);
// });
/*

Object.values(usersatisfaction.ratings) = [
  { rating: 1, count: 15 },
  { rating: 2, count: 35 },
  { rating: 3, count: 200 },
  { rating: 4, count: 500 },
  { rating: 5, count: 600 }
] 
apply map inthis array to get count value /rating value
*/
const response_times = {
  day_wise: [
    { date: "2023-05-01", average_time: 0.4 },
    { date: "2023-05-02", average_time: 0.42 },
    { date: "2023-05-03", average_time: 0.35 },
    { date: "2023-05-04", average_time: 0.5 },
    { date: "2023-05-05", average_time: 0.47 },
  ],
  week_wise: [
    { week: "18", average_time: 0.45 },
    { week: "19", average_time: 0.43 },
    { week: "20", average_time: 0.5 },
    { week: "21", average_time: 0.46 },
    { week: "22", average_time: 0.41 },
  ],
};

// console.log(Object.keys(response_times)); // ["day","week_wise"]

const usage_statistics = {
  by_platform: {
    iOS: 600,
    Android: 700,
    Web: 200,
  },
  by_country: {
    USA: 800,
    India: 250,
    Germany: 150,
    Japan: 100,
    Brazil: 200,
  },
};
// we can use 2 dougnut chart one over other

let disrr = [
  ...Object.keys(usage_statistics.by_platform),
  ...Object.keys(usage_statistics.by_country),
];

console.log(disrr);
/*
 <Doughnut
          data={{
            labels: [
              ...usage_statistics.keys(data.by_platform),
              ...usage_statistics.keys(data.by_country),
            ],
            datasets: [
              {
                label: "Usage Statistics",
                data: [
                  ...usage_statistics.values(data.by_platform),
                  ...usage_statistics.values(data.by_country),
                ],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.7)",
                  "rgba(54, 162, 235, 0.7)",
                  "rgba(255, 206, 86, 0.7)",
                  "rgba(75, 192, 192, 0.7)",
                  "rgba(153, 102, 255, 0.7)",
                  "rgba(255, 159, 64, 0.7)",
                  "rgba(255, 99, 132, 0.7)",
                  "rgba(54, 162, 235, 0.7)",
                  "rgba(255, 206, 86, 0.7)",
                  "rgba(75, 192, 192, 0.7)",
                ],
              },
            ],
          }}
        />
*/

/* 
<Doughnut
          data={{
            labels: [
              ...Object.keys(usage_statistics.by_country),
              ...Object.keys(usage_statistics.by_platform),
            ],
            datasets: [
              {
                label: "statistics by country",
                data: Object.values(usage_statistics.by_country),
                backgroundColor: [
                  "rgba(75, 192, 192, 0.7)",
                  "rgba(153, 102, 255, 0.7)",
                  "rgba(255, 159, 64, 0.7)",
                  "rgba(255, 99, 132, 0.7)",
                  "rgba(54, 162, 235, 0.7)",
                  "rgba(255, 206, 86, 0.7)",
                  "rgba(75, 192, 192, 0.7)",
                ],
                borderRadius: 6,
                // hoverOffset: 15,
                pointRotation: 10,
              },
              {
                label: "statistics by Platform",
                data: Object.values(usage_statistics.by_platform),
                backgroundColor: [
                  "rgba(255, 99, 132, 0.7)",
                  "rgba(54, 162, 235, 0.7)",
                  "rgba(255, 206, 86, 0.7)",
                ],
                borderRadius: 6,
                hoverOffset: 15,
              },
            ],
          }}
        />
*/
