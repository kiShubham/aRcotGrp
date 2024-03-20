import React, { useEffect, useState } from "react";
import { Chart as ChartJs } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import styles from "./Graph.module.css";

const Graphh = ({ data }) => {
  const [select, setSelect] = useState(true);
  const satifaction_ratings = Object.values(data.user_satisfaction.ratings);
  const response_times = data.response_times;
  const usage_statistics = data.usage_statistics;
  function change() {
    setSelect((prevState) => !prevState);
  }

  return (
    <div className={styles.graph}>
      <div className={styles.barGraph}>
        <Bar
          data={{
            labels: Object.keys(data.category_distribution), //x-axis
            datasets: [
              {
                label: "data ",
                data: Object.values(data.category_distribution), //y-axis
                barThickness: 50,
                borderRadius: 5,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.3)",
                  "rgba(54, 162, 235, 0.3)",
                  "rgba(255, 206, 86, 0.3)",
                  "rgba(75, 192, 192, 0.3)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
        />
        <p>Category Distribution</p>
      </div>
      <div className={styles.line}>
        <Line
          data={{
            labels: response_times.day_wise.map((item) => item.date),
            datasets: [
              {
                label: "Daily Average Time",
                data: response_times.day_wise.map((item) => item.average_time),
                borderColor: "rgb(75, 192, 192)",
                fill: false,
                tension: 0.3,
              },
              {
                label: "Weekly Average Time",
                data: response_times.week_wise.map((item) => item.average_time),
                borderColor: "#84cc16",
                fill: false,
                tension: 0.3,
              },
            ],
          }}
        />
        <p>Response Time</p>
      </div>
      <div className={styles.doughnutChart}>
        <Doughnut
          data={{
            labels: satifaction_ratings.map((e) => "rating " + e.rating),
            datasets: [
              {
                label: "User Satisfaction",
                data: satifaction_ratings.map((e) => e.count),
                barThickness: 50,
                borderRadius: 8,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.8)",
                  "rgba(54, 162, 235, 0.8)",
                  "rgba(255, 206, 86, 0.8)",
                  "rgba(75, 192, 192, 0.8)",
                ],
                hoverOffset: 15,
              },
            ],
          }}
        />
        <p>User Ratings</p>
      </div>

      <div className={styles.doughnutChart_2}>
        <Doughnut
          data={
            select
              ? {
                  labels: [...Object.keys(usage_statistics.by_country)],
                  datasets: [
                    {
                      label: "statistics by country",
                      data: Object.values(usage_statistics.by_country),
                      backgroundColor: [
                        "rgba(25, 206, 86, 0.7)",
                        "rgba(153, 102, 255, 0.7)",
                        "rgba(255, 159, 64, 0.7)",
                        "rgba(255, 99, 132, 0.7)",
                        "rgba(54, 162, 235, 0.7)",
                        "rgba(255, 206, 86, 0.7)",
                        "rgba(75, 192, 192, 0.7)",
                      ],
                      borderRadius: 8,
                      hoverOffset: 15,
                    },
                  ],
                }
              : {
                  labels: [...Object.keys(usage_statistics.by_platform)],
                  datasets: [
                    {
                      label: "statistics by Platform",
                      data: Object.values(usage_statistics.by_platform),
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.7)",
                        "rgba(54, 162, 235, 0.7)",
                        "rgba(255, 206, 86, 0.7)",
                      ],
                      borderRadius: 8,
                      hoverOffset: 15,
                    },
                  ],
                }
          }
        />
        <button className={styles.btn} onClick={change}>
          change mode
        </button>
        <p> our Reach in world</p>
      </div>
    </div>
  );
};

export default Graphh;
