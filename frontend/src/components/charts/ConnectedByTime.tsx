import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { subHours, format, startOfHour, isEqual } from "date-fns";

import { IDevice } from "../PageContainer";

const ConnectedByTime: React.FC<{ data: IDevice[] }> = ({ data }) => {
  const currentTime = new Date();

  const chartData = Array.from(Array(24).keys()).map((index) => {
    const time = startOfHour(subHours(currentTime, 24 - index));
    const count = data.filter((item) => {
      const lastSeen = startOfHour(new Date(item.last_seen_at));
      return isEqual(time, lastSeen);
    }).length;
    return { name: format(time, "p"), count };
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ConnectedByTime;
