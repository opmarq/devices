import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

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

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={100}>
      <PieChart>
        <Pie
          data={formatChartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ConnectionTypes;
