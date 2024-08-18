import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Engineering", value: 15 },
  { name: "LLB", value: 5 },
  { name: "UPSC", value: 5 },
  { name: "Business", value: 8 },
  { name: "Trading", value: 10 },
  { name: "MBA", value: 10 },
];

const COLORS = ["#4deeea", "#32CD32", "#9370DB", "#FFD700", "red", "#4eff00"];

export default function Fact() {
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Success rate in Percent
      </h1>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="right">
          <PieChart width={400} height={400} className="pie-chart">
            <Pie
              data={data}
              innerRadius={45}
              outerRadius={166}
              paddingAngle={6}
              cornerRadius={29}
              startAngle={-152}
              endAngle={187}
              dataKey="value"
              cx="50%"
              cy="50%"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
      <div className="container">
        <p className="lead typewriter">
          As stated above, the average success rate in every profession is
          around 10%, and the same goes for trading. However, the{" "}
          <span style={{ color: "red", fontWeight: "boldder" }}>
            Rate of interest
          </span>{" "}
          in trading is 1000 times higher than in any other profession. The
          wealth creation that happens through trading cannot be achieved in any
          other profession. Moreover, trading offers you so much flexibility
          that you can build your own empire from anywhere, with any amount of
          money, and with anyone, as long as you have a stable mind.
        </p>
      </div>
      <style jsx>{`
        
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: black;
          }
        }
      `}</style>
    </>
  );
}
