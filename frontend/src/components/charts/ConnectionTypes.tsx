import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from "recharts";

import { IDevice } from "../PageContainer";
import { getConnectionTypes } from "../../utils/helpers";

const ConnectionTypes: React.FC<{ data: IDevice[] }> = ({ data }) => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  const formatedData = getConnectionTypes(data);

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart width={400} height={400}>
        <Pie
          data={formatedData}
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
