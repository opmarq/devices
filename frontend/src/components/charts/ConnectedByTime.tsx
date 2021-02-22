import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { IDevice } from "../PageContainer";
import { getConnectedDevicesByLastHourse } from "../../utils/helpers";

const ConnectedByTime: React.FC<{ data: IDevice[] }> = ({ data }) => {
  const formatData = getConnectedDevicesByLastHourse(data);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={formatData}>
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ConnectedByTime;
