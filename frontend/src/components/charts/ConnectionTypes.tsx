import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from "recharts";

import { IDevice } from "../PageContainer";

const ConnectionTypes: React.FC<{ data: IDevice[] }> = ({ data }) => {
  const chartData = data.reduce((current, next) => {
    return {
      ...current,
      [next.connection_type]:
        current[next.connection_type] !== undefined
          ? current[next.connection_type] + 1
          : 0,
    };
  }, {} as any);

  const formatChartData = Object.keys(chartData).map((key) => {
    return {
      name: key,
      value: chartData[key],
    };
  });

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart width={400} height={400}>
        <Pie
          data={formatChartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Legend />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ConnectionTypes;
